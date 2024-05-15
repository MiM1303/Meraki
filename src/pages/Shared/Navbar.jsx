import { NavLink, Navigate } from "react-router-dom";
import "./shared.css"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    
    const signOutUser = () => {
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }
    console.log(user)

    const navLinks = <>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/">Home</NavLink></li>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/available-foods">Available Foods</NavLink></li>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/add-food">Add Food</NavLink></li>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/my-foods/:email">Manage My Foods</NavLink></li>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/requested-foods">My Food Request</NavLink></li>
    <li className="font-semibold font-4xl text-[#4D433A]"><NavLink to="/register">SignUp</NavLink></li>
    

</>

  return (
    <div className="font-teachers">
      <div className="navbar bg-[#F5EFD7] border border-transparent rounded-2xl md:rounded-3xl lg:py-1 p-0 md:px-4 lg:px-10">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#F5EFD7] text-[#4c2100b] rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
            <div className="">
                <Link to="/"><img className=" md:w-48 rounded-full" src="https://i.ibb.co/tsYWvtL/meraki-nav-logo.png" alt="" /></Link>
            </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-base menu menu-horizontal px-1 text-[#4c2100b]">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        {user ? <>
                    <div className="dropdown dropdown-end">
                        <div className="tooltip" data-tip={user.displayName}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img referrerPolicy="no-referrer" alt="User" src={user.photoURL? user.photoURL : <FaRegUserCircle />} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={signOutUser} className="btn lg:ml-4 mr-2 p-2 bg-[#acb946] button-styles">Log Out</button>
                </> :
                <div>
                    <Link to='/login' className="btn ml-4 mr-2 p-2 bg-[#cb946a] button-styles">Log In</Link>
                </div>}
          {/* <a className="btn bg-[#cb946a] button-styles text-white px-3 mr-2 lg:mr-0 text-sm md:text-base">Login</a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
