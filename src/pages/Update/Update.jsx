import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
// import useAxiosSecure from '../hooks/useAxiosSecure'

const Update = () => {
    // const axiosSecure = useAxiosSecure()
    const food = useLoaderData();
    console.log(food.name);
    const {_id, name, photo, quantity, date, status, location, notes, userPhoto, userEmail, userName} = food

    const {user} = useContext(AuthContext);
    // console.log(user)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const { mutateAsync } = useMutation({
        mutationFn: async ({ updatedFood }) => {
          const { data } = await fetch(`https://meraki-server.vercel.app/my-foods/update/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(updatedFood)
            })
          console.log(data)
          return data
        },
        onSuccess: () => {
          Swal.fire({
            title: 'Success!',
            text: 'Food Updated Successfully.',
            icon: 'success',
            confirmButtonText: 'Close'
          })
          
        },
      })

      const onSubmit = async (updatedFood, event) =>{
        event.preventDefault();
        console.log(updatedFood);
        updatedFood.quantity = parseInt(updatedFood.quantity);
        updatedFood.status = status;

        //send a data to the server
        // fetch(`https://meraki-server.vercel.app/my-foods/update/${_id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(updatedFood)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        //     if(data.modifiedCount>0){
        //         Swal.fire({
        //             title: 'Success!',
        //             text: 'Food Updated Successfully.',
        //             icon: 'success',
        //             confirmButtonText: 'Close'
        //           })
        //         //   form.reset();
        //     }
            
        // })
        await mutateAsync({ updatedFood })
        
    }
    return (
        <div>
            <Helmet>
                <title>Meraki | Add Food</title>
            </Helmet>

            <h2 className=" text-center lg:text-4xl text-2xl mt-16 font-semibold text-[#442537]">Update {name}!</h2>
            <p className="text-center mt-5 lg:text-xl">Correct the information you want and press update to save it!</p>

            {/* ADD FOOD FORM */}
            <form onSubmit={handleSubmit(onSubmit)} className="font-teachers text-[#9c6637] mx-auto grid grid-cols-1 p-2 md:p-8 md:gap-4 card-body text-2xl">
                <div className="">
                    <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                        Photo URL:
                        <input type="url" className="grow p-1" defaultValue={photo} placeholder="URL for the image of the food" {...register("photo", { required: true })}/>
                    </label>
                </div>
                {/* row-1 */}
                <div className="form-control flex flex-col md:flex-row gap-4 md:gap-14">
                      {/* item 1 */}
                    <div className="md:w-1/2">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Food Name:
                            <input type="text" className="grow p-1" defaultValue={name} placeholder="Name of Food" {...register("name", { required: true })}/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Quantity:
                            <input type="number" className="grow p-1" defaultValue={quantity} placeholder="Quantity of food" {...register("quantity", { required: true })}/>
                        </label>
                    </div>
                </div>
                {/* row-2 */}
                <div className="form-control flex flex-col md:flex-row gap-4 md:gap-14">
                      {/* item 1 */}
                    <div className="md:w-1/2">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Location:
                            <input type="text" className="grow p-1" defaultValue={location} placeholder="Pickup Location" {...register("location", { required: true })}/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            Expiry Date:
                            <input type="date" className="grow p-1" defaultValue={date} placeholder="Expiry date of the food" {...register("date", { required: true })}/>
                        </label>
                    </div>
                </div>
                {/* Additional Notes */}
                <div className="">
                    <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                        Additional Notes:
                        <input type="text" className="grow p-1" defaultValue={notes} placeholder="Additional notes about the food?" {...register("notes", { required: false })}/>
                    </label>
                </div>

                <div className="flex flex-col md:flex-row gap-0 md:gap-20 text-base md:text-xl">
                    <h2 className="">Added By:</h2>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center mt-4">
                        <img className="rounded-full" src={user.photoURL} alt="" />
                        <div>
                            <p>{user.displayName}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[#cb946a] button-styles text-base font-bold lg:text-xl  pb-10 pt-4 flex items-center justify-center">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;