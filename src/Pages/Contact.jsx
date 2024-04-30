import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Contact() {
  return (
    <div id='contact' className='flex justify-center border-b-8 h-screen gap-10'>
      <SocialIcon url="https://www.instagram.com/" />
      <SocialIcon url='https://github.com' />
      <SocialIcon url='https://www.linkedin.com' />

    </div>
  )
}

export default Contact
