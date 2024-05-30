import { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Controller, useForm } from 'react-hook-form';
import { AuthContext } from "../../providers/AuthProvider";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const Reviews = () => {
    const[reviews, setReviews]=useState([]);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    

    useEffect(()=>{
        fetch('https://meraki-server.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);
    // console.log(reviews);

    // const {register, handleSubmit, formState: { errors }} = useForm();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm({
        mode: 'onBlur',
        defaultValues: {
          name: '',
          rating: 0,
        },
      });

      
    // ADD REVIEW
    const onSubmit = (review) => {
        if(user && user.email){
            review.user_img_url = user.photoURL;
            review.name = user.displayName;
            // console.log(data);
            
            //send review data to server
            fetch('https://meraki-server.vercel.app/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                
                if(data.insertedId)
                {
                    Swal.fire({
                        title: 'Success!',
                        text: `Review added successfully! Thank you for your feedback!!`,
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                    console.log(review);
                    setReviews([review, ...reviews]);
                }
                
            })
        }
        else
		{
			Swal.fire({
				title: "You are not logged in",
				text: "Please login to add food to cart!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Login"
			}).then((result) => {
				if (result.isConfirmed) {
                    console.log( location.pathname);
					// send user to login page
					navigate('/login', {state: location.pathname });
				}
			});
		}
    }
    return (
        <div>
            <div className="hero mt-16 lg:w-1/2 mx-auto">
                    <div className="hero-content  flex-col md:w-full lg:w-[800px] mb-2 ">
                        <div className="card shrink-0  shadow-2xl bg-[#FCE9DA] w-3/4">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body rounded-xl p-6 bg-[#fbece0]">
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Review</span>
                                    </label>
                                    <input type="text" {...register("review", { required: true })} placeholder="Write your review here..." className="input input-bordered"/>
                                    {errors.review && <span className="mt-2 text-[#FF5A3D]">This field is required</span>}
                                </div>
                                <div>
                                <label id="rating_label" className="label">
                                        <span className="label-text">Rating</span>
                                </label>
                                    <Controller
                                    control={control}
                                    name="rating"
                                    rules={{
                                        validate: (rating) => rating > 0,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Rating
                                        value={value}
                                        isRequired
                                        onChange={onChange}
                                        visibleLabelId="rating_label"
                                        onBlur={onBlur}
                                        style={{ maxWidth: 180 }}
                                        />
                                    )}
                                    />
                                    {errors.review && <span className="mt-5 text-[#FF5A3D]">Rating is required</span>}
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn bg-[#cb946a] button-styles  text-lg text-white">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            <div className="flex flex-col mt-4 md:mt-14 lg:mt-16 justify-center items-center mb-16">
                <div className="lg:carousel md:carousel carousel-center w-full p-4 space-x-4 rounded-box hidden bg-[#EBB22F] ">
                {/* LARGE DEVICE */}
                    {
                        reviews.map(rev=> <div key={rev.id} className="carousel-item md:w-[545px] lg:w-[568px] rounded-box flex flex-col gap-6 text-center p-20 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('https://i.ibb.co/V9z4RgS/food-bg-1-min.jpg')] bg-cover"> 
                        <FaUserCircle className="text-[#CCC3AA] mx-auto text-5xl"></FaUserCircle>
                        <h2 className="text-2xl font-semibold text-[#CCC3AA]">{rev.name}</h2>
                        <p className="text-[#CCC3AA] text-xl leading-relaxed"><span className="text-2xl font-bold ">"</span>{rev.review}<span className="text-2xl font-bold">"</span></p> 
                        <Rating style={{ maxWidth: 180 }} value={rev.rating} readOnly className="mx-auto"/>
                        </div> )
                        
                    }
                </div>
                {/* SMALL DEVICE */}
                <div className="h-[450px] carousel carousel-vertical rounded-box md:hidden lg:hidden">
                    {
                        reviews.map(rev=> <div key={rev.id} className="carousel-item w-[200px] h-full rounded-box flex flex-col gap-4 text-center p-10 bg-gradient-to-b from-[#F5EFD7] to-[#FCE9DA]"> 
                        <FaUserCircle className="mx-auto text-5xl text-[#69551c]"></FaUserCircle>
                        <h2 className="text-[#69551c] text-2xl font-semibold ">{rev.name}</h2>
                        <p className="text-[#69551c] text-xl leading-relaxed"><span className="text-2xl font-bold">"</span>{rev.review}<span className="text-2xl font-bold">"</span></p> </div> )
                    }
                </div>               
            </div>
        </div>
    );
};

export default Reviews;