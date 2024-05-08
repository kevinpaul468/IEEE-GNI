import React from "react";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoGithub,
  IoLogoWhatsapp,
} from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



function Contact() {
  //discord
  return (
    <div id="contact">
    <div  className="h-screen" >
      <p>.</p>
      <div className="flex gap-5 justify-center items-center m-8 mt-20 ">
        <a
          href="https://www.linkedin.com/company/ieee-gnitc/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin className="text-5xl" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC1Kg2Dm4KzqZ0nQj3Y6c9LQ"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoYoutube className="text-5xl" />
        </a>
        <a
          href="https://www.instagram.com/ieee_gnitc/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare className="text-5xl" />
        </a>
        <a
          href="https://twitter.com/IEEE_GNITC"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareXTwitter className="text-5xl" />
        </a>
        <a
          href="https://www.reddit.com/r/ieee_gnitc/"
          target="_blank"
          rel="noreferrer"
        >
          <FaReddit className="text-5xl" />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <IoLogoWhatsapp className="text-5xl" />
        </a>
        <a
          href="https://github.com/IEEE-GNITC"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub className="text-5xl" />
        </a>
        <a href="https://discord.gg/4G3jXV7" target="_blank" rel="noreferrer">
          <FaDiscord className="text-5xl" />
        </a>
      </div>
      <div className=" flex justify-between m-8">
      <div className="text-slate-300 gap-4 underline font-semibold flex flex-col m-4 text-xl">
        <a href="#aboutus">About us</a>
        <a href="#societies">Societies</a>
        <a href="#events">Events</a>
        <a href="#members">Members</a>
      </div>
      <div className=" txt text-xl ">
        <h2 className="">Important Links</h2>
      </div>
      </div>
      <a href="IEEE-GNI/code-of-conduct"><b className="flex justify-center mb-8">IEEE GNITC CODE OF CONDUCT</b></a>
      <b className="flex justify-center mb-8">ALL RIGHTS RESERVED</b>
    </div>
    </div>
  );
}

export default Contact;
