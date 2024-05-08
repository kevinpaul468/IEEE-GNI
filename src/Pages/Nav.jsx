import React from "react";
// import "../index.css"
import logo from "../assets/n-logo.png";

export default function Nav() {
  return (
    <div className="">
      <div className="flex justify-between text-center  border-b-2 navBg border-gray-200   z-30 fixed top-0 w-full">
        <div className="flex justify-between text-center  w-full  ">
          <span className="m-4 hidden md:flex text-slate-200	text-xl cursor-pointer">
            <a href="#home"> <img src={logo} alt="Gnitc" className="max-w-36 rounded-xl logobg" /></a>  
          </span>
          <span className="m-4  mt-6 text-slate-200	 cursor-pointer">
            <a href="#aboutus" className="hidden md:flex">About us</a>
            <a href="#aboutus" className=" md:hidden ">About</a>
          </span>
          <span className="m-4  mt-6 text-slate-200	 cursor-pointer">
            <a href="#societies">Societies</a>
          </span>
          <span className="m-4 mt-6 text-slate-200	 cursor-pointer">
            <a href="#events">Events</a>
          </span>
          <span className="m-4 mt-6 text-slate-200	 cursor-pointer">
            <a href="#members">Members</a>
          </span>
          <span className="m-4 mt-6 text-slate-200	hidden md:flex cursor-pointer">
            <a href="#advisors">Faculty Advisors</a>
          </span>
          <span className="m-4  mt-6 mr-10 text-slate-200	 hidden md:flex cursor-pointer">
            <a href="#contact">Contact</a>
          </span >
        </div>
        <div className=" justify-between text-center txt gap-14 mr-10 hidden md:flex  mt-6 m-5">
          <span className="cursor-pointer"><a href="https://www.ieee.org/">IEEE.org</a></span>
          <span className="cursor-pointer"><a href="https://ieeehyd.org/">IEEE Hyderabad</a></span>
        </div>
      </div>
    </div>
  );
}
