import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider";
import "../AddFood/AddFood.css"
import Swal from "sweetalert2";

const AddFood = () => {

    const {user} = useContext(AuthContext);
    // console.log(user)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      const onSubmit = (food) => {
        food.userEmail = user.email;
        food.userPhoto = user.photoURL;
        food.userName = user.displayName;
        food.status = 'Available';
        console.log(food);
        food.quantity = parseInt(food.quantity);

        //send food data to server
        fetch('http://localhost:5000/add-food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    title: 'Success!',
                    text: `Food added successfully! Thank you for helping people in need!!`,
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })
    }


    return (
        <div>
             <Helmet>
                <title>Meraki | Add Food</title>
            </Helmet>

            <h2 className=" text-center lg:text-4xl text-2xl mt-16 font-semibold text-[#442537]">Add A Food!</h2>
            <p className="text-center mt-5 lg:text-xl">Have some extra food you would like to give away? Fill out the details below to help someone in need can!</p>

            {/* ADD FOOD FORM */}
            <form onSubmit={handleSubmit(onSubmit)} className="font-teachers text-[#9c6637] mx-auto grid grid-cols-1 p-2 md:p-8 md:gap-4 card-body text-2xl">
                <div className="">
                    <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                        Photo URL:
                        <input type="url" className="grow p-1" placeholder="URL for the image of the food" {...register("photo", { required: true })}/>
                    </label>
                </div>
                {/* row-1 */}
                <div className="form-control flex flex-col md:flex-row gap-4 md:gap-14">
                      {/* item 1 */}
                    <div className="md:w-1/2">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Food Name:
                            <input type="text" className="grow p-1" placeholder="Name of Food" {...register("name", { required: true })}/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Quantity:
                            <input type="number" className="grow p-1" placeholder="Quantity of food" {...register("quantity", { required: true })}/>
                        </label>
                    </div>
                </div>
                {/* row-2 */}
                <div className="form-control flex flex-col md:flex-row gap-4 md:gap-14">
                      {/* item 1 */}
                    <div className="md:w-1/2">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Location:
                            <input type="text" className="grow p-1" placeholder="Pickup Location" {...register("location", { required: true })}/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Expiry Date:
                            <input type="date" className="grow p-1" placeholder="Expiry date of the food" {...register("date", { required: true })}/>
                        </label>
                    </div>
                </div>
                {/* Additional Notes */}
                <div className="">
                    <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                        Additional Notes:
                        <input type="text" className="grow p-1" defaultValue={"N/A"} placeholder="Additional notes about the food?" {...register("notes", { required: false })}/>
                    </label>
                </div>
                {/* row-3 */}
                {/* <div className="form-control flex flex-col md:flex-row gap-4 md:gap-14"> */}
                      {/* item 1 */}
                      {/* <div className="md:w-1/2">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Added By:
                            <input type="text" className="grow p-1" disabled placeholder="Email of adder" defaultValue={user.email} {...register("userEmail", { required: true })}/>
                        </label>
                    </div> */}
                    {/* item 2 */}
                    {/* <div className="md:w-1/2">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            User Image:
                            <input type="text" className="grow p-1" disabled placeholder="Photo of adder" defaultValue={user.photoURL} {...register("userPhoto", { required: true })}/>
                        </label>
                    </div>
                </div> */}

                <div className="flex flex-col md:flex-row gap-0 md:gap-20 text-base md:text-xl">
                    <h2 className="">Added By:</h2>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center mt-4">
                        <img className="rounded-full" src={user.photoURL} alt="" />
                        <div>
                            <p>{user.displayName}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[#cb946a] button-styles text-base font-bold lg:text-xl  pb-10 pt-4 flex items-center justify-center">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;