import React from 'react'
import './../index.css'

function AboutUs() {
  return (
    <div id='aboutus' className='h-screen border-b-8'>
      <p>.</p>
      <div className="heading text-center txtcolor  m-7 text-5xl txt  mt-10" ><h1>ABOUT US</h1></div>
        <div className='flex justify-around gap-8 text-black'>
        <b className='w-1/2 txt'>
        IEEE is a non-profit organization, and the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community to innovate for a better tomorrow through its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.
        </b>
        <b className='w-1/2 txt mx-0.5'>
	      The IEEE GNITC Chapter fosters a vibrant research culture on campus by providing a platform for students to develop their technical prowess. Through workshops, hackathons, seminars, and competitions, the chapter equips students with valuable skills and fosters a space for them to showcase their research and projects.
        </b>
    </div>
    </div> 
  )
}

export default AboutUs
