import MemItem from '@/components/Items/MemItem'
import React from 'react'
import MemInfo from '@/info/meminfo'




function Memebers() {
  return (
   
       <div id="members">
      <div className="h-screen">
        <div className="   eventsbg border-b-8   h-screen w-full">
          <p>.</p>
          <div className=" flex justify-between items-center mt-6  gap-3">
            <div className=" heading ">Members</div>
          
          </div>
          <div className=" memcard flex  gap-5 m-6">
          {MemInfo.map((data)=>{
            return(
              <MemItem memimg={data.img}  memname={data.name} memrole={data.role}/>
            )
          })} 
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Memebers
