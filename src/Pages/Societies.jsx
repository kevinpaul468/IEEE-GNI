import React from 'react'
import computer_society from '../assets/computer_society.png'
// import women_in_engineering from '../assets/women_in_engineering.png'
import communication_society from '../assets/communication_society.png'
import circuits_and_systems_society from '../assets/circuits_and_systems_society.png'
import { Radius } from 'lucide-react'


function Societies() {
  return (
    <div>
    <div
      id="societies"
      className="h-screen border-b-4 flex justify-around items-center"
     
    >
      <a href='/IEEE-GNI/computersociety'>
      <div className="floatdiv">
        <img src={computer_society} alt="Icomputer society" />
      </div>
      </a>

      {/* <div className="floatdiv"> 
        <img src={women_in_engineering} alt='women in engineering'/>
        women in engineering</div> */}

      <a href='/IEEE-GNI/circuitsandsystemssociety'>
      <div className="floatdiv"> 
        <img className='rounded-full max-w-80' src={circuits_and_systems_society} alt="circuits and systems society" />
      </div>
      </a>

      <a href='/IEEE-GNI/communicationsociety'>
      <div className="floatdiv"> 
        <img src={communication_society} alt="communication society" />
      </div>
      </a>

      
    </div>
    </div>
  );
}

export default Societies;
