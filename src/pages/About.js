import React from "react";

const About = () => {

  return (
    <section id="about">
      <div className="container h-screen mx-auto flex px-5 xl:px-10 py-5 lg:py-10 flex-row items-center">
        {/* about/personal brand statement */}
        <div className="mx-auto w-full lg:w-4/5 flex flex-col md:items-start md:text-left p-4 md:p-8 lg:p-12 xl:p-16 items-center text-center bg-black bg-opacity-60 rounded-xl ">
          <h1 className="text-white title-font text-2xl lg:text-4xl  mb-4 font-medium ">Hi, I'm Sam!</h1>
          <h1 className="text-yellow-400 title-font text-2xl lg:text-4xl  mb-4 font-medium ">I want to build accessible equity-minded technologies</h1>

          <p className="my-10 text-white text-md lg:text-xl font-medium ">
            I am a Full-Stack Software Engineer with a strong background in Microbiology research and STEM education. As a microbiologist, I loved collaborating with a diverse body of brilliant minds to find and create solutions to global health issues. I enventually found great fulfilment in supporting others on their life journey as an educator.
            <br className="inline-block" /><br className="inline-block" />
            As a software engineer, I’m having a blast continuously learning new technologies and improving my skills. I can express my creativity in diverse and novel ways. I am building UX-minded features-rich full stack platforms through both solo and collaborative projects. I am seeking more opportunities to grow and leverage my skills and experience to help improve accessibility and promote equity-minded practices. 
          </p>

          <div className="md:flex md:flex-wrap md:justify-around w-full mt-2 md:mt-10">
            <a
              href="#skills"
              className="mx-auto inline-flex text-white bg-yellow-500 border-0 m-2 py-1 md:py-2 px-4 md:px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Check out my tech stack
            </a>
            <a
              href="#projects"
              className="mx-auto inline-flex text-white bg-indigo-600 border-0 m-2 py-1 md:py-2 px-4 md:px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">
              Explore my favorite projects
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About