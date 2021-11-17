import { ImProfile }from "react-icons/im"
import { MdOutlineEmail} from "react-icons/md"
import React from "react"

const TopNav = () => {

  return (
    <header className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between py-4">
        <div className="title-font font-medium text-white hover:text-yellow-400 ml-4">
          <a href="#about" className="text-lg">Sam Bassong</a>
        </div>

        <section className='flex mr-4'>
          <a href="https://drive.google.com/file/d/1vsehuFtOWocfYJI4TDIYDiI5lG-VR2o-/view?usp=sharing" className="mx-1 inline-flex items-center bg-blue-400 border-0 py-1 px-2 hover:bg-blue-500 text-white focus:outline-none rounded text-base" rel="noreferrer" target="_blank"> Resume <ImProfile className="w-4 h-4 ml-2" /> </a>
          <a href="#contact" className="mx-1 inline-flex items-center bg-yellow-500 border-0 py-1 px-1 hover:bg-yellow-400 text-white focus:outline-none rounded text-base"> Hire Me! <MdOutlineEmail className="w-4 h-4 ml-2" /> </a>
        </section>
      </div>
    </header>
  )
}

export default TopNav