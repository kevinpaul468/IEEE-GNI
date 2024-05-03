import React from "react";
import MemItem from "@/components/Items/MemItem";

import MemInfo from "@/info/meminfo";



function Allmem() {
  const OtherMemInfo =[{
    name: "K. Raviteja",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Organising Head",
  },
  {
    name: "Mohammed Qumar",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Organising Co Head",
  },
  {
    name: "Nitya Peri",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Documentaion Head",
  },
  {
    name: "Mohammad Yaseen",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Documentaion Executive",
  },
  {
    name: "Navdeep",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Proposals manager",
  },
  {
    name: "Jatin",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Social Media",
  },

  {
    name: "Shiva Shankar Bijjala",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Marketing",
  },
  {
    name: "P.yashwanth",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Publicity",
  },
  {
    name: "Sumidha",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Design",
  },
  {
    name: "Uma Maheshwar",
    img: "https://media.wired.com/photos/650399af65d83ff288720473/1:1/w_1285,h_1285,c_limit/If-Elon-Musk-Had-Been-a-Happy-Child,-Would-He-Still-Be-Launching-Rockets--Business-Redux-h_16082330.jpg",
    role: "Student Representative",
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

