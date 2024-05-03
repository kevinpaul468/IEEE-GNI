import React from "react";
import computer_society from "../assets/computer_society.png";
import women_in_engineering from "../assets/women_in_engineering.png";
import communication_society from "../assets/communication_society.png";

function Societies() {
  return (
    <div
      id="societies"
      className="h-screen border-b-8 flex justify-around items-center"
    >
      <div className="floatdiv">
        <img src={computer_society} alt="computer society" />
      </div>

      <div className="floatdiv">
        <img src={women_in_engineering} alt="women in engineering" />
      </div>

      <div className="floatdiv">
        <img src={communication_society} alt="communication society" />
      </div>
    </div>
  );
}

export default Societies;
