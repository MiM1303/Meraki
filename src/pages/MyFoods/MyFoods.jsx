import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ListItem from "../ListItem/ListItem";
import "../MyFoods/MyFoods.css"
import { Helmet } from "react-helmet-async";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2'


const MyFoods = () => {
    
    const {user} = useContext(AuthContext);
    const [myFoods, setMyFoods] = useState([]);
    const userEmail = user.email;

    useEffect(()=>{
        fetch(`https://meraki-server.vercel.app/my-foods/${userEmail}`, {credentials: 'include'})
            .then(res=>res.json())
            .then(data=>setMyFoods(data))
    },[user])

    

    const handleDelete = _id =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then((result)=>{
            if(result.isConfirmed){
                fetch(`https://meraki-server.vercel.app/food/${_id}`, {
                    method: "DELETE",
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount>0)
                    {
                        Swal.fire({
                            title: "Deleted!",
                            text: "The food has been deleted!",
                            icon: "success"
                          });
                        setMyFoods(myFoods.filter(fd=>fd._id!==_id)); 
                    }
                })
            }
          })
    }
    return (
        <div>
            <Helmet>
                <title>Meraki | Manage My Foods</title>
            </Helmet>
            <h2 className="border-b-4 w-fit mx-auto rounded-2xl p-4 border-[#EBB22F] text-center lg:text-4xl text-2xl mt-20 font-semibold text-[#442537]">Manage My Foods</h2>
            <p className="text-center mt-8 mb-20 lg:text-xl">Here is a list of all the foods you&apos;ve listed so far! Update or delete any foods you like!!</p>

            <div className="overflow-x-auto">
                <table className="table md:text-base lg:text-lg">
                    {/* head */}
                    <thead>
                    <tr>
                        <th className="w-1/6">Photo</th>
                        <th className="w-1/6">Name</th>
                        <th>Qty</th>
                        <th>Location</th>
                        
                        <th>Expiry Date</th>
                        <th>Status</th>
                        <th> <FaRegEdit className="mx-8 text-2xl text-[#EBB22F]"/> </th>
                        <th> <MdDeleteForever className="mx-6 text-3xl text-red-600"/> </th>
                    </tr>
                    </thead>
                    <tbody>

                    {/* rows  */}
                    {
                        myFoods.map(food=> <ListItem
                            key={food._id}
                            food={food}
                            myFoods={myFoods}
                            setMyFoods={setMyFoods}
                            handleDelete={handleDelete}></ListItem>)
                    }

                    </tbody>                    
                </table>
            </div>
            
        </div>
    );
};

export default MyFoods;