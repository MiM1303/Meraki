import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { _id, photo, name, userName, userPhoto, date, quantity, location, notes } = food;
  return (
    <div>
      <div className=" card bg-base-100 shadow-xl">

          <figure className="relative bg-gray-900">
            <img className="hover:scale-110 " src={photo} alt="Shoes" />
            <div className="flex flex-col px-6 py-6 md:px-8 md:py-8 lg:py-10 lg:px-10 gap-2 absolute left-0 text-white bottom-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl">{name}</h2>
                <p className="text-base md:text-lg lg:text-xl">Quantity: {quantity}</p>
            </div>
            <div className="md:text-lg lg:text-xl px-3 font-semibold text-[#e7ad28] py-4 absolute top-5 right-5 badge badge-ghost"><IoLocationSharp/> {location}</div>
          </figure>
          

        <div className="card-body lg:px-8 lg:py-8 bg-[#fce9da] text-lg">
            <div className="flex flex-row gap-6 mb-6 items-center">
                <img src={userPhoto} className="rounded-full w-16 h-16   lg:w-20 lg:h-20 shadow-lg" alt="" />
                <div>
                    <h2 className="text-lg lg:text-xl card-title">{userName}</h2>
                    <p className="text-base lg:text-lg">{location}</p>
                </div>
            </div>
            <p className="text-base md:text-lg lg:text-xl "><span className="font-semibold">Expiry Date:</span> {date}</p>
            <p className="text-base md:text-lg lg:text-xl "><span className="font-semibold">Notes:</span> {notes}</p>
          <div className="card-actions justify-end mt-8">
            <Link to={`/food/${_id}`}>
              <button className="btn bg-[#cb946a] text-sm lg:text-base button-styles">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
