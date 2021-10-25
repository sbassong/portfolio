import React from "react"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data"

const Projects = () => {

  return (
    <section id="projects" className="text-white body-font">
      <div className="container h-screen lg:h-screen top-0 px-5 pb-5 lg:px-20 lg:pb-5 mx-auto text-center bg-black bg-opacity-50">
        <div className="flex flex-col w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mt-10 mb-4 text-yellow-400">Apps I loved building</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Selected solo and collaborative projects. Hover over a cards to see details and the techs used for implementation. Click on the orange links to find more.</p>
        </div>

        <div className="grid gap-5 grid-cols-2">
          {projects.map(project => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects