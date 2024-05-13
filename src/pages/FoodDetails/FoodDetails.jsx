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

            {/* REQUEST MODAL */}
            <dialog id="my_modal_1" className="modal ">
                <div className="modal-box">
                    <h3 className="font-bold lg:mt-10 lg:text-3xl text-[#9c6637]">Request for: {name}</h3>
                    <p className="py-4 text-[#9c6637] ">Press the request button to request the food</p>

            {/* FOOD INFORMATION */}
            <form className="font-teachers text-[#9c6637] mx-auto grid grid-cols-1 p-2 md:p-8 md:gap-4 text-2xl">
                    <div className="w-full">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Photo URL:
                            <input type="url" className="grow p-1" placeholder="URL for the image of the food" defaultValue={photo} disabled/>
                        </label>
                    </div>                
                      {/* item 1 */}
                    <div className="w-full">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Food Name:
                            <input type="text" className="grow p-1" placeholder="Name of Food" defaultValue={name} disabled/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="w-full">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Quantity:
                            <input type="number" className="grow p-1" placeholder="Quantity of food" defaultValue={quantity} disabled/>
                        </label>
                    </div>
                
                {/* row-2 */}
                
                      {/* item 1 */}
                    <div className="w-full">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Location:
                            <input type="text" className="grow p-1" placeholder="Pickup Location" defaultValue={location} disabled/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="w-full">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Expiry Date:
                            <input type="date" className="grow p-1" placeholder="Expiry date of the food" defaultValue={date} disabled/>
                        </label>
                    </div>
                {/* Additional Notes */}
                <div className="">
                    <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                        Additional Notes:
                        <input type="text" className="grow p-1" defaultValue={notes} placeholder="Additional notes about the food?" disabled/>
                    </label>
                </div>
                <div className="flex flex-col gap-2 text-base md:text-xl">
                    <h2 className="">Added By:</h2>
                    <div className="flex flex-col gap-4  items-center mt-4">
                        <img className="rounded-full" src={userPhoto} alt="" />
                        <div>
                            <p>{userName}</p>
                            <p>{userEmail}</p>
                        </div>
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[#cb946a] button-styles text-base font-bold lg:text-xl  pb-10 pt-4 flex items-center justify-center">
                        Request
                    </button>
                </div>
            </form>
                    
                    
                    
                <div className="modal-action ">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
