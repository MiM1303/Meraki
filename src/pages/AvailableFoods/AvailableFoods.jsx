import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailableFoods = ({foods}) => {
    const allfood = useLoaderData();
    // const [availFood, setAvailFood] = ([allfood]);
    console.log(allfood);
    const [sort, setSort] = useState('');

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available-foods/sorted/${sort}`)
    //         .then(res=>res.json())
    //         .then(data=>setAvailFood(data))
    // },[])
    
    return (
        <div>
            <Helmet>
                <title>Meraki | Available Foods</title>
            </Helmet>
            <h2 className="border-b-4 w-fit mx-auto rounded-2xl p-4 border-[#EBB22F] text-center lg:text-4xl text-2xl mt-20 font-semibold text-[#442537]">Available Foods</h2>
            <p className="text-center mt-5 lg:text-xl">Check out all the available foods ready for pick up given by our users!</p>

            <div>
                {/* Search */}
                <div>

                </div>
                {/* Sort */}
                <div>
                    <select onChange={e => {
                                console.log(e.target.value);
                                setSort(e.target.value)
                            }} 
                    value={sort} name="sort" id="sort" className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Sort By Expiry Date</option>
                        <option value='asc'>Ascending</option>
                        <option value='dsc'>Descending</option>
                    </select>
                    <Link to={`/available-foods/sorted/${sort}`}><button className="btn bg-[#cb946a] text-sm lg:text-base button-styles">Sort</button></Link>
                </div>
            </div>

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