import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa6";
// import register from "../../../public/register.png"
import "../../App.css"

import Lottie from 'lottie-react';
import RegisterAnimation from "../Register/register.json"

import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const [passwordState, setPasswordState] = useState(false);
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {updateUserInfo, setUser, createUser} = useContext(AuthContext);

    // Regex 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const photoURL = data.photoURL;
        
        data.donationCount = 0; //initially users will have donated 0 food when registering

        if(passwordRegex.test(password)){
            createUser(email, password)
            .then(()=>{
                updateUserInfo(name, photoURL)
                .then(()=>{
                    setUser({
                        displayName: name,
                        photoURL: photoURL,
                        email: email
                    })

                    // send donor/user data to donors collection
                    fetch('https://meraki-server.vercel.app/donors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data);
                        if(data.insertedId)
                        {
                            toast.success("Successfully Registered!");
                        }
                    })

                    // navigate(location?.state ? location.state : '/')
                    
                })
                .catch(()=>{   
                    toast.error("Something went wrong!");
                })
            })
            .catch(()=>{
                toast.error("This email already exists!");
            })
        }
        else{
            toast.error("Password must have uppercase, lowercase and at least 6 characters!");
        }
    }


    return (
        <HelmetProvider>
            <Helmet>
                <title>Meraki | Register</title>
            </Helmet>
            <ToastContainer />

            {/* REGISTRATION FORM */}
            <div className="flex items-center justify-center">
                
                <div className="hero mt-40 mb-32">
                    <div className="hero-content flex-col  md:w-full lg:w-[800px] h-[600px]">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-3">Register now!</h1>
                        </div>
                        <div className="card shrink-0 w-3/4 shadow-2xl bg-[#fbece0]">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-6">
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="Name" placeholder="Your Name" className="input input-bordered" {...register("name", { required: true })}/>
                                    {errors.name && <span className="mt-2 text-[#FF5A3D]">This field is required</span>}
                                </div>
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="photourl" placeholder="Photo URL" className="input input-bordered" {...register("photoURL", { required: true })}/>
                                    {errors.photoURL && <span className="mt-2 text-[#FF5A3D]">This field is required</span>}
                                </div>
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })}/>
                                    {errors.email && <span className="mt-2 text-[#FF5A3D]">This field is required</span>}
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={passwordState ? 'text' : 'password'} placeholder="password" className="input input-bordered" {...register("password", { required: true })}/>
                                    <div onClick={()=>setPasswordState(!passwordState)} className="absolute right-5 top-[50px] text-[#b6723e]">
                                        {
                                            passwordState ? <FaRegEye className="text-xl"/> : <FaRegEyeSlash className="text-xl" />
                                        }
                                    </div>
                                    {errors.password && <span className="mt-2 text-[#FF5A3D]">This field is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#cb946a] button-styles text-lg text-white">Register</button>
                                </div>
                            </form>
                            <div className='mx-8 mb-8 text-center flex justify-center'>
                                <p>Already have an account? <Link className="text-[#e69a60] underline font-semibold" to={'/login'}>Login Now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Lottie animationData={RegisterAnimation} loop={true} />
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Register;