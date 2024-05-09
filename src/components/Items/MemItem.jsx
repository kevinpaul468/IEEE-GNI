import React from "react";

function MemItem({ memimg,memname,memrole}) {
  return (
    <div>
  
    <div className="bg-slate-700 border-2 p-2 h-[400px] rounded-xl overflow-hidden shadow-md w-72">

        
      <img src={memimg} alt="Employee Image" className="w-72  hover:p-2  hover:rounded-2xl  h-auto rounded-xl" />
      <div className="p-4">
        <h2 className="text-xl font-semibold txt">{memname}</h2>
        <p className="text-gray-400">{memrole}</p>
      </div>
    </div>
    </div>
  );
}

export default MemItem;
