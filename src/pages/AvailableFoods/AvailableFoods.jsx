import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";


const AvailableFoods = ({foods}) => {
    const allfood = useLoaderData();
    console.log(allfood);
    
    return (
        <div>
            <h2 className="border-b-4 w-fit mx-auto rounded-2xl p-4 border-[#EBB22F] text-center lg:text-4xl text-2xl mt-20 font-semibold text-[#442537]">Available Foods</h2>
            <p className="text-center mt-5 lg:text-xl">Have some extra food you would like to give away? Fill out the details below to help someone in need can!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16">
                {
                    allfood.map(food=><FoodCard 
                        key={food._id}
                        food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;