import { Outlet } from "react-router-dom";

import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";


const Root = () => {
    return (
        <div className="font-playpen">
            <div className=" container px-4 md:mt-4 lg:mt-16  mx-auto ">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;