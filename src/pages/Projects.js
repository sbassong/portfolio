import React from "react"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data"

const Projects = () => {

  return (
    <section id="projects" className="text-white body-font h-screen">
      <div className="container h-full top-0 px-5 pb-5 lg:px-20 mx-auto text-center bg-black bg-opacity-50">
        <div className="flex flex-col w-full mb-10">
          <h1 className="text-2xl lg:text-4xl font-medium title-font mt-6 lg:mt-10 mb-4 text-yellow-400">Apps I loved building</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-medium lg:text-xl">Selected solo and collaborative projects. Hover over a cards to see details and the techs used for implementation. Click on the orange links to find more.</p>
        </div>

        {/* <div className="grid gap-5 grid-cols-2"> */}
        <div className="container h-3/4 xl:h-auto overflow-y-auto xl:overflow-hidden grid grid-cols-1 xl:gap-5 xl:grid-cols-2">
          {projects.map(project => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects