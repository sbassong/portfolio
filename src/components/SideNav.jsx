import { FaLinkedin, FaGithub, FaPhoneSquareAlt } from "react-icons/fa"
import { MdOutlineEmail, MdOutlineAlternateEmail} from "react-icons/md"
import React from "react"

const SideNav = ({windowDimension}) => {
  
  return (
    <nav className="overflow-y-hidden md:sticky h-screen top-0 w-44 sm:w-52 md:w-64 lg:w-96 bg-needle-bg bg-no-repeat bg-cover bg-center" >
    <nav className="overflow-y-auto lg:overflow-y-auto md:sticky h-screen top-0 bg-indigo-900 pt-4 md:pt-6 lg:pt-8 bg-opacity-70" >
      <div className="px-8 lg:px-12">  
        <a href="#introduction">
          <div className="lg:max-w-lg w-3/4 md:w-2/3 mt-5 mx-auto" >
            <img className="object-cover object-center rounded-full" alt="Sam's avatar" src="https://i.imgur.com/grMmfrK.jpg"/>
          </div>

          <div className="text-white lg:max-w-lg lg:w-5/6 w-full mt-5 lg:mt-7 mb-8 lg:mb-10 mx-auto">
            <p className=" text-2xl md:text-3xl lg:text-4xl title-font font-bold">Sam Bassong</p>
            <p className="text-medium lg:text-lg title-font mt-1 font-medium text-yellow-400">Full-Stack Software Engineer</p>
          </div>
        </a>

        <div class="text-white lg:max-w-lg w-full">
          <div className="text-lg md:text-xl font-bold flex flex-col mt-5 lg:mt-8 mb-2 lg:mb-5">
            <a href="#about" className="block my-5 lg:my-5 lg:inline-block lg:mt-0  hover:text-yellow-400">ABOUT</a>
            <a href="#projects" className="block my-5 lg:inline-block lg:mt-0  hover:text-yellow-400">PROJECTS</a>
            <a href="#skills" className="block my-5 lg:inline-block lg:mt-0 hover:text-yellow-400">SKILLS</a>
              <a href="https://drive.google.com/file/d/1jDSvXbmOqkpDMiOHBlVvXfsqMJCcT2Wr/view?usp=sharing" className="block my-5 lg:inline-block lg:mt-0 hover:text-yellow-400" rel="noreferrer" target="_blank">RESUME</a>
          </div>

          <a href="#contact" className="w-auto my-4 lg:my-2 inline-flex items-center bg-yellow-500 border-0 py-1 lg:py-2 px-5 lg:px-6 focus:outline-none hover:bg-yellow-600 rounded text-white text-sm lg:text-base"><MdOutlineEmail className="w-5 h-5 mr-1" /> Message me</a>
          <a href="https://www.linkedin.com/in/sambassong/" className="w-auto my-4 lg:my-2 inline-flex items-center bg-blue-500 border-0 py-1 lg:py-2 px-4 lg:px-5 focus:outline-none hover:bg-blue-600 rounded text-white text-sm lg:text-base" rel="noreferrer" target="_blank"><FaLinkedin className="w-5 h-5 mr-1" />Let's connect!</a>
          <a href="https://github.com/sbassong" className="w-auto my-4 lg:my-2 inline-flex items-center bg-gray-800 border-0 py-1 lg:py-2 px-6 lg:px-7 focus:outline-none hover:bg-gray-900 rounded text-white text-sm lg:text-base" rel="noreferrer" target="_blank"><FaGithub className="w-5 h-5 mr-1" />Love code?</a>
        
          {
            windowDimension.winWidth >= 1024 &&
            <div className="w-full bg-black relative bg-opacity-60 text-white font-semibold flex flex-col mb-3 lg:mb-4 mt-6 lg:mt-8 shadow-md p-2 rounded items-center">
              <p className="text-lg title-font font-medium text-yellow-400 mb-2">Contact me</p>
              <p className="w-3/4 my-1 inline-flex items-center py-1 px-1 focus:outline-none rounded text-sm mt-4"><FaPhoneSquareAlt className="w-5 h-5 mr-1" /> 206-402-7371</p>
              <p className="my-1 inline-flex items-center py-1 px-1 focus:outline-none rounded text-sm mt-4"><MdOutlineAlternateEmail className="w-5 h-5 mr-1" /> sam.bassong@gmail.com</p>
            </div>
          }
        </div>

      </div>

    </nav>
    </nav>
  )
}

export default SideNav