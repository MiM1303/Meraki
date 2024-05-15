import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import FoodCard from "../FoodCard/FoodCard";
import { Helmet } from "react-helmet-async";


const RequestedFoods = () => {
    const {user} = useContext(AuthContext);
    const [myFoods, setMyFoods] = useState([]);
    const userEmail = user.email;
    console.log(userEmail);

    useEffect(()=>{
        fetch(`https://meraki-server.vercel.app/requested-foods/${userEmail}`, {credentials: 'include'})
            .then(res=>res.json())
            .then(data=>setMyFoods(data))
    },[user])

    return (
        <div>
            <Helmet>
                <title>Meraki | My Food Request</title>
            </Helmet>

            {/* FEATURED FOODS SECTION */}
            <h2 className="border-b-4 w-fit mx-auto rounded-2xl p-4 border-[#EBB22F] text-center lg:text-4xl text-2xl mt-20 font-semibold text-[#442537]">Your Food Requests</h2>
            <p className="text-center mt-5 lg:text-xl">See all of your requested foods below!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16">
                {
                    myFoods.map(food=><FoodCard 
                        key={food._id}
                        food={food}></FoodCard>)
                }
            </div>

            
            
        </div>
    );
};

export default RequestedFoods;