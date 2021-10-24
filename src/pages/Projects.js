import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => {

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container h-screen lg:h-screen top-0 px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mt-16 mb-4 text-white">
            Apps I loved building
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A few of my passion projects. Hover over a card to see details and the tech stacked used for implementations. Click on Card and play around with the demo!
          </p>
        </div>
        <div className="flex flex-wrap m-8">
          {projects.map(project => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects