import { Outlet } from "react-router-dom";

import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";


const Root = () => {
    return (
        <div className="font-marcellus">
            <div className=" container px-4 md:mt-4 mx-auto lg:mt-16">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;