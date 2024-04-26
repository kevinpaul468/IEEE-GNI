import React from "react";
// import "../index.css"

export default function Nav() {
  return (
    <div className="">
    

      <div className="flex justify-between text-center  border-b-4 border-gray-200  bg-red-500  fixed top-0 w-full">
        <span className="m-5 text-slate-200	text-xl cursor-pointer">GNITC</span>
        <span className="m-5  text-slate-200	 cursor-pointer">Home</span>
        <span className="m-5 text-slate-200	 cursor-pointer">About us</span>
        <span className="m-5 text-slate-200	 cursor-pointer">Events</span>
        <span className="m-5 text-slate-200	 cursor-pointer">Members</span>
        <span className="m-5 mr-10 text-slate-200	 cursor-pointer">Contact</span>
      </div>
    </div>
  );
}
