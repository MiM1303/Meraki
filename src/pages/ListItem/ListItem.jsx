import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ListItem = ({food, handleDelete}) => {
    const {_id, name, photo, quantity, date, status, location, notes, userPhoto, userEmail, userName} = food

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (updatedFood, event) =>{
        event.preventDefault();
        console.log(updatedFood);
        updatedFood.quantity = parseInt(updatedFood.quantity);
        updatedFood.status = status;

        //send a data to the server
        fetch(`http://localhost:5000/my-foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedFood)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Food Updated Successfully.',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
                //   form.reset();
            }
            
        })
        
    }

    return (
        <tr>
            {/* image */}
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle md:w-14 md:h-14 lg:w-28 lg:h-28">
                    <img src={photo} className="" alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
            </div>
            </td>
            <td> {name} </td>
            <td> {quantity} </td>
            <td> {location} </td>
            <td> {date} </td>
            <td> {status} </td>
            <th>
                {/* <Link to={`/updateSpot/${_id}`}> */}
                    <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn btn-ghost btn-xs text-lg text-[#EBB22F]">Update</button>
                {/* </Link> */}
            </th>
            <th>
            <button 
            onClick={()=>handleDelete(_id)} 
            className="btn btn-ghost btn-xs text-lg text-red-600">Delete</button>
            </th>


            {/* UPDATE MODAL */}
            <dialog id="my_modal_1" className="modal z-20">
            
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold lg:mt-10 lg:text-3xl text-center text-[#9c6637]">Updating : {name}</h3>
                    <p className="py-4 text-[#9c6637] text-center text-xl">Press the update button to update food information</p>

            {/* FOOD INFORMATION */}
            <form onSubmit={handleSubmit(onSubmit)} className="font-teachers text-[#9c6637] mx-auto grid grid-cols-1 p-2 md:p-8 md:gap-4 text-2xl">
                    <div className="w-full">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Photo URL:
                            <input type="url" className="grow p-1" placeholder="URL for the image of the food" defaultValue={photo} {...register("photo", { required: true })}/>
                        </label>
                    </div>                
                      {/* item 1 */}
                    <div className="w-full">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Food Name:
                            <input type="text" className="grow p-1" placeholder="Name of Food" defaultValue={name} {...register("name", { required: true })}/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="w-full">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Quantity:
                            <input type="number" className="grow p-1" placeholder="Quantity of food" defaultValue={quantity} {...register("quantity", { required: true })}/>
                        </label>
                    </div>
                
                {/* row-2 */}
                
                      {/* item 1 */}
                    <div className="w-full">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Location:
                            <input type="text" className="grow p-1" placeholder="Pickup Location" defaultValue={location} {...register("location", { required: true })}/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="w-full">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Expiry Date:
                            <input type="date" className="grow p-1" placeholder="Expiry date of the food" defaultValue={date} {...register("date", { required: true })}/>
                        </label>
                    </div>
                {/* Additional Notes */}
                <div className="">
                    <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                        Additional Notes:
                        <input type="text" className="grow p-1" defaultValue={notes} placeholder="Additional notes about the food?"  {...register("notes", { required: false })}/>
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

                <div method="dialog" className="form-control modal-action mt-6">
                    <button className="btn bg-[#cb946a] button-styles text-base font-bold lg:text-xl  pb-10 pt-4 flex items-center justify-center">
                        Update
                    </button>
                </div>
            </form>
            </div>
            </dialog>
        </tr>
    );
};

export default ListItem;