import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import { Link } from "react-router-dom";
import Process from "./Process";
import Reviews from "./Reviews";

const Home = () => {
    const foods = useLoaderData();
    console.log(foods);
    return (
        <div>
            <Helmet>
                <title>Meraki | Home</title>
            </Helmet>
            <Banner></Banner>

            {/* FEATURED FOODS SECTION */}
            <h2 className="border-b-4 w-fit mx-auto rounded-2xl p-4 border-[#EBB22F] text-center lg:text-4xl text-2xl mt-20 font-semibold text-[#442537]">Featured Foods</h2>
            <p className="text-center mt-5 lg:text-xl">Have some extra food you would like to give away? Fill out the details below to help someone in need can!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16">
                {
                    foods.map(food=><FoodCard 
                        key={food._id}
                        food={food}></FoodCard>)
                }
            </div>
            <Link to={`/available-foods`} className="flex justify-center mt-10" >
              <button className="btn  bg-[#cb946a] text-sm lg:text-base button-styles">Show All</button>
            </Link>

            {/* EXTRA SECTION - PROCESS */}
            <h2 className="border-b-4 w-fit mx-auto rounded-2xl p-4 border-[#EBB22F] text-center lg:text-4xl text-2xl mt-20 font-semibold text-[#442537]">How It Works!</h2>
            <p className="text-center mt-5 lg:text-xl">Find out the process below to help others and getting help, all the while maintaining sustainability!</p>
            <Process></Process>
            
            <h2 className="border-b-4 w-fit mx-auto rounded-2xl p-4 border-[#EBB22F] text-center lg:text-4xl text-2xl mt-20 font-semibold text-[#442537]">Reviews</h2>
            <p className="text-center mt-5 lg:text-xl">Swipe to see some feedback from our users!</p>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;