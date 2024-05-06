import React from 'react'
import {motion} from "framer-motion";

function Home() {
  return (
    <div id='home'>
        <motion.div whileInView={{ x:0, scale:1 }} initial={{x:-100, scale:0}}>
        <div className="min-h-[41rem] bghome  flex justify-center items-center border-b-8 h-screen "><p className='text-9xl'>Home</p></div>
        </motion.div>
      
    </div>
  )
}

export default Home
