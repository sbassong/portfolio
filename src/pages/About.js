import React from "react";

const About = () => {

  return (
    <section id="about">
      <div className="container mx-auto mt-36 flex px-10 py-20 md:flex-row flex-col items-center">
        {/* about/personal brand statement */}
        <div className="mx-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 pb-10 md:mb-0 items-center text-center">
          <h1 className="text-indigo-500 title-font sm:text-4xl text-3xl mb-4 font-medium ">Hi, I'm Sam!</h1>
          <h1 className="text-yellow-500 title-font sm:text-4xl text-3xl mb-4 font-medium ">I want to make web development and STEM more accessible.</h1>

          <p className="my-10 leading-relaxed text-xl">
            I am a Full-Stack Software Engineer with a strong background in Microbiology research and STEM education. As a microbiologist, I grew passionate about creating and finding solutions in a collaborative environment. I have been fortunate to find fulfillment in supporting others through accessible and meaningful learning experiences.
            <br className="hidden lg:inline-block" /><br className="hidden lg:inline-block" />
            As a web developer, I’m having a blast continuously improving my skills and exploring technologies. I am building responsive and features-rich full stack platforms through both solo and collaborative projects. I am seeking more opportunities to grow and leverage my skills and experience to help improve accessibility and promote equity-minded practices. 
          </p>

          <div className="flex mx-auto mt-10">
            <a
              href="#contact"
              className="mx-4 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Want to work together?
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg">
              Explore my favorite projects!
            </a>
          </div>
        </div>
        {/* portrait */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-2xl"
            alt="Sam"
            src="https://i.imgur.com/QGdnNtV.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default About