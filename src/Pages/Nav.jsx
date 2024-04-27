import React from "react";
// import "../index.css"

export default function Nav() {
  return (
    <div className="">
  
      <div className="flex justify-between text-center  border-b-2 navBg border-gray-200  bg-red-500  fixed top-0 w-full">
        <span className="m-5 text-slate-200	text-xl cursor-pointer"><a href="#">IEEE GNITC</a></span>
        <span className="m-5 text-slate-200	 cursor-pointer"><a href="#aboutus">About us</a></span>
        <span className="m-5  text-slate-200	 cursor-pointer"><a href="#societies">Societies</a></span>
        <span className="m-5 text-slate-200	 cursor-pointer"><a href="#events">Events</a></span>
        <span className="m-5 text-slate-200	 cursor-pointer"><a href="#members">Members</a></span>
        <span className="m-5 mr-10 text-slate-200	 cursor-pointer"><a href="#contact">Contact</a></span>

      </div>
    </div>
  );
}
