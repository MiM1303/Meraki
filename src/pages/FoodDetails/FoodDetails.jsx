import { useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
// import "../FoodDetails/FoodDetails.css"

const FoodDetails = () => {
  const food = useLoaderData();
  const { name, photo, quantity, date, userName, location, userEmail, userPhoto, notes } = food;
  return (
    <div className="md:mt-16 lg:mt-20">
        <h2 className="text-center mb-10 text-5xl font-semibold text-[#EBB22F]">Details for food: {name}</h2>
      <div
        className="hero font-teachers"
            style={{backgroundImage: `url(${photo})`,  backgroundPosition: "center", backgroundSize: "cover"  }}
      >
        <div className=" hero-overlay bg-opacity-60"></div>
        <div className="relative flex flex-col hero-content text-center text-neutral-content">
            <figure className="md:w-10/12 lg:w-3/6 w-full mt-32 mb-5">
                <img src={photo} className="w-full rounded-2xl" alt="" />
            </figure>
            <div className="absolute top-5 lg:top-10 md:right-5 lg:-right-16 text-center text-base  md:text-xl lg:text-2xl font-semibold">
                <p className="mb-2"><span className="font-semibold">Donated By: </span>{userName}</p>
                <p className="flex items-center justify-center md:justify-end gap-2"><IoLocationSharp className="text-[#e7ad28] text-2xl"/> {location}</p>
            </div>
          <div className="text-center">
            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
            <p className="mb-5 text-lg md:text-xl lg:text-2xl"> <span className="font-semibold">Quantity:</span> {quantity} </p>
            <p className="mb-5 text-lg md:text-xl lg:text-2xl"> <span className="font-semibold">Expires By:</span> {date} </p>
            <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn lg:mb-6 bg-[#cb946a] md:text-lg lg:text-lg button-styles border-[#60564C]">Request</button>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
