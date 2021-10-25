import React from "react"


const ProjectCard = ({project}) => {

  return(
    <div className='p-2 bg-black bg-opacity-50 rounded'> 

      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={project.image}
        />

        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h1 className="title-font text-xl font-medium text-white mb-3">{project.title}</h1>
          <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-2">
            <a href={project.link} key={project.image} rel="noreferrer" target="_blank" className='hover:text-white'>Live </a>
            | 
            <a href={project.github} key={project.image} rel="noreferrer" target="_blank" className='hover:text-white '> Github</a>
          </h2>
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-2">{project.subtitle}</h2>
          <p className="leading-relaxed">{project.description}</p>
        </div>
      </div>
    
    </div>
  )
}


export default ProjectCard
