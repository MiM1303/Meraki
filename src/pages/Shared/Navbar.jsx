import { NavLink, Navigate } from "react-router-dom";
import "./shared.css"

const Navbar = () => {

    const navLinks = <>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/">Home</NavLink></li>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/all-spots">Available Foods</NavLink></li>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/add-spot">Add Food</NavLink></li>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/my-spots">Manage My Foods</NavLink></li>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/register">My Food Request</NavLink></li>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/register">SignUp</NavLink></li>
    

</>

  return (
    <div className="">
      <div className="navbar bg-[#F5EFD7] border border-transparent rounded-2xl md:rounded-3xl md:px-4 lg::px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost p-1 ml-1 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#F5EFD7] rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
            <div className="">
                <img className=" md:w-48 rounded-full" src="https://i.ibb.co/tsYWvtL/meraki-nav-logo.png" alt="" />
            </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-base menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#cb946a] text-white px-3 mr-2 lg:mr-0 text-sm md:text-base">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
