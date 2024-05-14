import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import LoginAnimation from '../Login/login.json'

const Login = () => {

    const {login,googleLogin} = useContext(AuthContext);
    const {register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    // LOGIN
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)
        login(email, password)
        .then(()=>{
            toast.success("Successful");
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            toast.error("Your email or password didn't matched!");
        })
    }

    // GOOGLE LOGIN
    const googleUserLogin = () =>{
        googleLogin()
        .then(()=>{navigate(location?.state ? location.state : '/')})
        .catch((error)=>{toast.error("Please Try Again!");})
    }

    return (
        <div>
            <Helmet>
                <title>Meraki | Login</title>
            </Helmet>
            <ToastContainer />

            {/* LOGIN FORM */}
            <div className='flex lg:flex-row items-center justify-center'>
                
                <div  className="w-4/5 md:w-1/3 lg:w-1/2">
                    <Lottie animationData={LoginAnimation} loop={true} />
                </div>

                <div className="hero mt-16 lg:w-1/2 ">
                    <div className="hero-content  flex-col md:w-full lg:w-[800px] h-[600px] mb-2 lg:mb-44">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                        </div>
                        <div className="card shrink-0  shadow-2xl bg-[#FCE9DA] w-3/4">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body rounded-xl p-6 bg-[#fbece0]">
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered"/>
                                    {errors.email && <span className="mt-3 text-[#FF5A3D]">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} placeholder="Password" className="input input-bordered" />
                                    {errors.password && <span className="my-2 text-[#FF5A3D]">This field is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#cb946a] button-styles  text-lg text-white">Login</button>
                                </div>
                            </form>
                           <div className='flex flex-col md:flex-row lg:flex-row lg:gap-4 mx-auto bg-[#FCE9DA]'>
                                <div className='mx-8 lg:mb-8 mb-4 justify-center bg-[#FCE9DA]'>
                                    <p className='text-center mb-2 text-lg font-semibold text-[#7b3f11]'>Or Login With:</p>
                                    <button onClick={googleUserLogin} className="btn text-lg bg-[#F5EFD7] hover:bg-[#f5e08f]">
                                        <FcGoogle className='text-2xl'></FcGoogle>
                                        Google
                                    </button>
                                </div>
                           </div>
                            <div className='mx-8 mb-8 flex justify-center text-center'>
                                <p>Don&apos;t have an account? <Link className="text-[#e69a60] underline font-semibold" to={'/register'}>Register Now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;