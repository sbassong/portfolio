import { FaLinkedin, FaGithub, FaPhoneSquareAlt } from "react-icons/fa"
import { MdOutlineEmail, MdOutlineAlternateEmail} from "react-icons/md"
import React from "react"

const SideNav = () => {
  return (
    <nav className="overflow-y-hidden lg:overflow-y-hidden lg:sticky h-screen lg:h-screen top-0 w-52 lg:w-96 bg-needle-bg bg-no-repeat bg-cover bg-center" >
    <nav className="overflow-y-scroll lg:overflow-y-scroll lg:sticky h-screen lg:h-screen top-0 bg-indigo-900 pt-8 w-52 lg:w-96 bg-opacity-70" >
      <div className="px-12">  
        <a href="#introduction">
          <div className="lg:max-w-lg lg:w-2/3 w-2/3 mt-5 mx-auto" >
            <img className="object-cover object-center rounded-full" alt="Sam hero" src="https://i.imgur.com/grMmfrK.jpg"/>
          </div>

          <div className="text-white lg:max-w-lg lg:w-5/6 w-5/6 mt-7 mb-10 mx-auto">
            <p className="text-4xl title-font font-bold">Sam Bassong</p>
            <p className="text-lg title-font mt-1 font-medium text-yellow-500">Full-Stack Software Engineer</p>
          </div>
        </a>

        <div class="text-white lg:max-w-lg lg:w-full w-5/6">
          <div className="text-xl font-bold flex flex-col my-10 mt-8">
            <a href="#about" className="block my-7 lg:inline-block lg:mt-0  hover:text-yellow-400">ABOUT</a>
            <a href="#projects" className="block my-7 lg:inline-block lg:mt-0  hover:text-yellow-400">PROJECTS</a>
            <a href="#skills" className="block my-7 lg:inline-block lg:mt-0 hover:text-yellow-400">SKILLS</a>
            <a href="https://drive.google.com/file/d/1f-acmG0ZmigutMpkyz26OobO0_2Y3UDh/view?usp=sharing" className="block my-7 lg:inline-block lg:mt-0 hover:text-yellow-400" rel="noreferrer" target="_blank">RESUME</a>
          </div>

          <a href="#contact" className="w-3/5 my-4 inline-flex items-center bg-yellow-600 border-0 py-2 px-7 focus:outline-none hover:bg-yellow-400 rounded text-white md:mt-0"><MdOutlineEmail className="w-5 h-5 mr-1" /> Message me</a>
          <a href="https://www.linkedin.com/in/sambassong/" className="w-3/5 my-4 inline-flex items-center bg-blue-600 border-0 py-2 px-5 focus:outline-none hover:bg-blue-400 rounded text-white mt-4 md:mt-0" rel="noreferrer" target="_blank"><FaLinkedin className="w-5 h-5 mr-1" />Let's connect!</a>
          <a href="https://github.com/sbassong" className="w-3/5 my-4 inline-flex items-center bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0" rel="noreferrer" target="_blank"><FaGithub className="w-5 h-5 mr-1" />Love code?</a>
        
          <div className="bg-black relative bg-opacity-60 text-white font-semibold text-xl flex flex-col my-5 mt-14 shadow-md py-2 rounded items-center">
            <p className="text-1xl title-font font-medium text-yellow-500 mb-4">Contact me</p>
            <p className="w-3/4 my-2 inline-flex items-center py-1 px-1 focus:outline-none rounded text-base mt-4 md:mt-0"><FaPhoneSquareAlt className="w-5 h-5 mr-1" /> 206-402-7371</p>
            <p className="my-2 inline-flex items-center py-1 px-1 focus:outline-none rounded text-base mt-4 md:mt-0"><MdOutlineAlternateEmail className="w-5 h-5 mr-1" /> sam.bassong@gmail.com</p>
          </div>
        </div>

      </div>

    </nav>
    </nav>
  )
}

export default SideNav