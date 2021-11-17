import React from "react"


const ProjectCard = ({project}) => {
  const {image, link, github, title, description, subtitle} = project

  return(
    <div className='p-2 bg-black bg-opacity-50 rounded w-4/5 h-auto mx-auto xl:w-full m-2 xl:m-0 '>

      <div className="flex relative lg:aspect-w-16 aspect-h-9">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={image}
        />

        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h1 className="title-font text-lg md:text-xl font-normal md:font-medium text-white mb-2 md:mb-3">{title}</h1>
          <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-2">
            <a href={link} key={image} rel="noreferrer" target="_blank" className='hover:text-white'>Live site </a>
            | 
            <a href={github} key={image} rel="noreferrer" target="_blank" className='hover:text-white '> Github repo</a>
          </h2>
          <h2 className="tracking-widest text-xs md:text-sm title-font font-normal text-green-400 mb-1 md:mb-2">{subtitle}</h2>
          <p className="leading-relaxed text-xs lg:text-sm">{description}</p>
        </div>
      </div>
    
    </div>
  )
}


export default ProjectCard
