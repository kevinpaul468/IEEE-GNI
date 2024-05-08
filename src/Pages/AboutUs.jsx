import React from 'react'
import './../index.css'


function AboutUs() {

  const data1= "IEEE is a non-profit organization, and the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community to innovate for a better tomorrow through its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe "


  const data2= "The IEEE GNITC Chapter fosters a vibrant research culture on campus by providing a platform for students to develop their technical prowess. Through workshops, hackathons, seminars, and competitions, the chapter equips students with valuable skills and fosters a space for them to showcase their research and projects."

  return (
    <div id='aboutus'>
    <div  className=' md:min-h-screen border-b-4'>
      <p>.</p>
      <div className="heading  mt-10 text-center">About Us</div>
      <div className=" flex gap-2 m-1 flex-col md:flex-row  p-4 ">
        <span className='border-2 p-4 md:w-3/5 m-5 bg-slate-900 border-white rounded-2xl txt'>{data1}</span>
        <span className='border-2 p-4 md:w-3/5 m-5 bg-slate-900 border-white rounded-2xl txt'>{data2}</span>
      </div>
     
    </div> 
    </div>
  )
}

export default AboutUs
