import { ImProfile }from "react-icons/im"
import { MdOutlineEmail} from "react-icons/md"
import React from "react"

const TopNav = () => {

  return (
    <header className="overflow-x-hidden sticky w-full top-0 z-10 bg-needle-bg bg-no-repeat bg-cover bg-top">
      <div className="sticky w-full flex justify-between py-4 bg-indigo-900 bg-opacity-70">
        <div className="title-font font-medium text-white hover:text-yellow-400 ml-5">
          <a href="#about" className="text-xl">Sam Bassong</a>
        </div>

        <section className='flex mr-5'>
          <a href="https://drive.google.com/file/d/1jDSvXbmOqkpDMiOHBlVvXfsqMJCcT2Wr/view?usp=sharing" className="mx-1 inline-flex items-center bg-blue-500 border-0 py-1 px-2 hover:bg-blue-600 text-white focus:outline-none rounded text-base" rel="noreferrer" target="_blank"> Resume <ImProfile className="w-4 h-4 ml-2" /> </a>
          <a href="#contact" className="mx-1 inline-flex items-center bg-yellow-500 border-0 py-1 px-2 hover:bg-yellow-400 text-white focus:outline-none rounded text-base"> Hire Me! <MdOutlineEmail className="w-4 h-4 ml-2" /> </a>
        </section>
      </div>
    </header>
  )
}

export default TopNav