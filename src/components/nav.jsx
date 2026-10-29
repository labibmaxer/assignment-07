import React from 'react';
import Image from 'next/image'
import logo from "../../public/KeenKeeper.png";
 import { MdOutlineHome } from "react-icons/md";
import { FiClock } from "react-icons/fi";

const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
     
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
<Image src={logo} alt="KeenKeeper" />
  </div>
 
  <div className="navbar-end gap-4">
    <a className="btn bg-[#244D3F] font-bold text-white"><MdOutlineHome /> Home</a>
    <a className="btn bg-[#244D3F] font-bold text-white"><FiClock /> Timeline</a>

  </div>
</div>
    );
};

export default Navbar;