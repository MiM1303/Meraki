
import Lottie from "lottie-react";
import Error from "./Error404.json"
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="text-center flex gap-0 flex-col justify-center items-center">
            <h2 className="font-medium mt-16 text-4xl md:text-5xl lg:text-7xl text-[#ebb22f]">ERROR 404</h2>
            <p className="font-medium mt-6 text-xl md:text-3xl lg:text-3xl text-[#a7591e]">Page Does Not Exist!</p>
            <Lottie className="absolute top-56 md:top-24 lg:top-20 lg:w-1/3 mx-auto" animationData={Error} loop={true} />
            <p className="font-medium absolute text-[#a7591e] bottom-60 md:bottom-0 lg:bottom-36 text-xl md:text-3xl lg:text-3xl">Go Back To <Link className="text-[#ebb22f] underline font-bold" to="/">Home Page</Link></p>
        </div>
    );
};

export default Error404;