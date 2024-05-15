import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Reviews = () => {
    const[reviews, setReviews]=useState([]);
    

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);
    console.log(reviews);
    return (
        <div className="flex flex-col mt-4 md:mt-14 lg:mt-16 justify-center items-center mb-16">
            <div className="lg:carousel md:carousel carousel-center w-full p-4 space-x-4 rounded-box hidden bg-[#EBB22F] ">
            {/* LARGE DEVICE */}
                {
                    reviews.map(rev=> <div key={rev.id} className="carousel-item md:w-[545px] lg:w-[568px] rounded-box flex flex-col gap-6 text-center p-20 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('https://i.ibb.co/V9z4RgS/food-bg-1-min.jpg')] bg-cover"> 
                    <FaUserCircle className="text-[#CCC3AA] mx-auto text-5xl"></FaUserCircle>
                    <h2 className="text-2xl font-semibold text-[#CCC3AA]">{rev.name}</h2>
                    <p className="text-[#CCC3AA] text-xl leading-relaxed"><span className="text-2xl font-bold ">"</span>{rev.review}<span className="text-2xl font-bold">"</span></p> </div> )
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
    );
};

export default Reviews;