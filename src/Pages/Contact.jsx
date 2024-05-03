import React from 'react'
import { IoLogoLinkedin , IoLogoYoutube, IoLogoInstagram , IoLogoGithub} from "react-icons/io";


function Contact() {
  return (
    <div id='contact' className='flex gap-5  flex-col'>
      <div className='flex gap-5 justify-center items-center h-screen '>
        <a href='https://www.linkedin.com/company/ieee-gnitc/' target='_blank' rel='noreferrer'>
          <IoLogoLinkedin className='text-5xl' />
        </a>
        <a href='https://www.youtube.com/channel/UC1Kg2Dm4KzqZ0nQj3Y6c9LQ' target='_blank' rel='noreferrer'>
          <IoLogoYoutube className='text-5xl' />
        </a>
        <a href='https://www.instagram.com/ieee_gnitc/' target='_blank' rel='noreferrer'>
          <IoLogoInstagram className='text-5xl' />
        </a>
        <a href='https://github.com/IEEE-GNITC' target='_blank' rel='noreferrer'>
          <IoLogoGithub className='text-5xl' />
        </a>
      </div>
      <b className='flex justify-center mb-8'>ALL RIGHTS RESERVED</b>
    </div>
  )
}

export default Contact
