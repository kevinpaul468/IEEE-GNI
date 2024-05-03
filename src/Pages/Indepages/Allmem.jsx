import React from "react";
import MemItem from "@/components/Items/MemItem";

import MemInfo from "@/info/meminfo";



function Allmem() {
  const OtherMemInfo =[{
    id: "1",
    name: "K. Raviteja",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Organising Head",
  },
  {
    id: "2",
    name: "Mohammed Qumar",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Organising Co Head",
  },
  {
    id: "3",
    name: "Nitya Peri",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "",
  },
    
  ];
  
  
  
  const AllMemInfo = [...MemInfo, ...OtherMemInfo];

  return (
    <div>
        <div className=" min-h-44 ">
            Meet the Team
        </div>
      <div className="flex justify-center gap-10 items-center flex-wrap ">
        {AllMemInfo.map((data) => {
          return (
            <div className="m-4 p-2">
              <MemItem
                memimg={data.img}
                memname={data.name}
                memrole={data.role}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Allmem;

