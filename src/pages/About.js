import React from "react";

const About = () => {

  return (
    <section id="about">
      <div className="container h-screen lg:h-screen top-0 mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        {/* about/personal brand statement */}
        <div className="mx-16 lg:flex-grow md:w-1/2 lg:pr-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 pb-10 md:mb-0 items-center text-center bg-black bg-opacity-60 rounded-xl p-14">
          <h1 className="text-white title-font sm:text-4xl text-3xl mb-4 font-medium ">Hi, I'm Sam!</h1>
          <h1 className="text-yellow-400 title-font sm:text-4xl text-3xl mb-4 font-medium ">I build equitable and accessible technologies</h1>

          <p className="my-10 text-white text-xl font-medium ">
            I am a Full-Stack Software Engineer with a strong background in Microbiology research and STEM education. As a microbiologist, I loved collaborating with a diverse body of brilliant minds to find and create solutions to global health issues. I enventually found great fulfilment in supporting others on their life journey as an educator.
            <br className="hidden lg:inline-block" /><br className="hidden lg:inline-block" />
            As a software engineer, I’m having a blast continuously learning new technologies and improving my skills. I can express my creativity in diverse and novel ways. I am building UX-minded features-rich full stack platforms through both solo and collaborative projects. I am seeking more opportunities to grow and leverage my skills and experience to help improve accessibility and promote equity-minded practices. 
          </p>

          <div className="flex flex-wrap justify-around w-full mt-10">
            <a
              href="#skills"
              className="mx-auto inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Check out my tech stack
            </a>
            <a
              href="#projects"
              className="mx-auto inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">
              Explore my favorite projects
            </a>
          </div>
        </div>
        {/* portrait */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-xl"
            alt="Sam"
            src="https://i.imgur.com/QGdnNtV.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default About