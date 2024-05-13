import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import { Helmet } from "react-helmet-async";

const AvailableFoods = ({foods}) => {
    const allfood = useLoaderData();
    console.log(allfood);
    
    return (
        <div>
            <Helmet>
                <title>Meraki | Available Foods</title>
            </Helmet>
            <h2 className="border-b-4 w-fit mx-auto rounded-2xl p-4 border-[#EBB22F] text-center lg:text-4xl text-2xl mt-20 font-semibold text-[#442537]">Available Foods</h2>
            <p className="text-center mt-5 lg:text-xl">Check out all the available foods ready for pick up given by our users!</p>

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