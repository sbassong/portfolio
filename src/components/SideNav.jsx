import { FaLinkedin, FaGithub, FaPhoneSquareAlt } from "react-icons/fa"
import { MdOutlineEmail, MdOutlineAlternateEmail} from "react-icons/md"
import React from "react"

const SideNav = () => {
  return (
    <nav class="overflow-y-scroll lg:overflow-y-auto lg:sticky h-screen lg:h-screen z-40 top-0 bg-gray-900  pt-10 w-52 lg:w-96">  
      <div class="px-12">  

        <div className="lg:max-w-lg lg:w-5/6 w-5/6 mt-5" >
          <img className="object-cover object-center rounded-full" alt="Sam" src="https://i.imgur.com/grMmfrK.jpg"/>
        </div>

        <div class="text-white lg:max-w-lg lg:w-full w-5/6 mt-5 mb-12">
          <a href="#about" class="text-4xl title-font font-medium text-white">Sam Bassong</a>
          <p class="text-xl title-font mt-1 font-medium text-yellow-400">Software Engineer</p>
        </div>

        <div class="text-indigo-500 lg:max-w-lg lg:w-full w-5/6">
          <div className="text-indigo-300 text-lg flex flex-col my-10 mt-8">
            <a href="#about" class="block my-6 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">ABOUT</a>
            <a href="#projects" class="block my-6 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">PROJECTS</a>
            <a href="#skills" class="block my-6 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">SKILLS</a>
            <a href="https://drive.google.com/file/d/1f-acmG0ZmigutMpkyz26OobO0_2Y3UDh/view?usp=sharing" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" rel="noreferrer" target="_blank">RESUME</a>
          </div>

          <a href="#contact" class="w-2/3 my-6 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"><MdOutlineEmail className="w-5 h-5 mr-1" /> Message me!</a>
          
          <div className="text-indigo-300 text-lg flex flex-col my-10 mt-14">
            <p class="text-xl title-font font-medium text-green-400 mb-4">Contacts</p>
            <a href="#about" class="w-3/4 my-6 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"><FaPhoneSquareAlt className="w-5 h-5 mr-1" /> 206-402-7371</a>
            <a href="#contact" class="my-6 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"><MdOutlineAlternateEmail className="w-5 h-5 mr-1" /> sam.bassong@email.com</a>
            <div class="flex justify-around ">
              <a href="https://www.linkedin.com/in/sambassong/" class="w-1/2 my-6 mx-1.5 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" rel="noreferrer" target="_blank"><FaLinkedin className="w-5 h-5 mr-1" /> LinkedIn</a>
              <a href="https://github.com/sbassong" class="w-1/2 my-6 mx-1.5 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" rel="noreferrer" target="_blank"><FaGithub className="w-5 h-5 mr-1" /> Github</a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default SideNav