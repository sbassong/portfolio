import { ArrowRightIcon } from "@heroicons/react/solid"
import React from "react"

const Navbar = () => {
  return (
    // <nav class="flex items-center justify-between flex-wrap p-6 bg-gray-800 md:sticky top-0 z-10">
    <nav className="w-64 absolute lg:relative bg-gray-800 shadow h-screen flex-col justify-between hidden lg:flex pb-12">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a href="#about" className="ml-5 text-xl   title-font font-large text-white mb-4 md:mb-0">Sam Bassong</a>
      </div>

      <div class="w-64 block flex-grow md:flex flex-col md:items-center md:w-auto">
        <div class="text-lg flex flex-col">
          <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About</a>
          <a href="#projects" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Projects</a>
          <a href="#skills" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Skills</a>
          <a href="https://drive.google.com/file/d/1f-acmG0ZmigutMpkyz26OobO0_2Y3UDh/view?usp=sharing" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" rel="noreferrer" target="_blank">Resume</a>
        </div>

        <div>
          <a href="#contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Let's get in touch!<ArrowRightIcon className="w-4 h-4 ml-1" /></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar