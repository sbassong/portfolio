import React from "react";

const About = () => {

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo">
            Hi, I'm Sam!
            <br className="hidden lg:inline-block" />I want to make web development and STEM more accessible
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a Full-Stack Software Engineer with a strong background in Microbiology research and STEM education. As a microbiologist, I grew passionate about creating and finding solutions in a collaborative environment. I have been fortunate to find fulfillment in supporting others through accessible and meaningful learning experiences.
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            As a web developer, I’m having a blast continuously improving my skills and exploring technologies. I am building responsive and features-rich full stack platforms through both solo and collaborative projects. I am seeking more opportunities to grow and leverage my skills and experience to help improve accessibility and promote equity-minded practices. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Want to work together?
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Explore my favorite projects!
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Sam"
            src="https://lh3.googleusercontent.com/9vC1C8B0tX2WqgZa1MBdWISCHrWrncf4OHvs7cNias0szw525w-DIwn8YR_rSY5oFCFxZtskmSmPOv0ghzYg9qB2wxXjTeiwjXY_AFQUZHBgo4VrWCKOcnKUb0C5kv_ld3zGyJoe6xRSMTFBLcV5r-S6P5ZwogcbHcoYFOPLd4CAlUrcNZlOTnVvGlJcQAd3kqsmKQELaww8sVwLFBdbrcVRxHfMyrK5PD2zBPYfSJV3Ud1s4jsbREwADTEr4rLjCUQQ7_TaMkD3aeLV6Tv2PTEmCmUf4qUsjQJBV_sPkQtoQn5lKXF2E5dqZ-toykklCMX2EkbDeHPOtA6y693kiIsySjYC7y3DbOjWI6q_suBnROtvvrGo94JiTugHaN4WL5UMBzdb6lZjDlSJxOE3_TEto53JbK-150afR_4jTTRz4obLOpgOhM2oDkeciEH-BCUIN3hQ-gTISI0jPhRG9AeMx0qGeL1FbSoLh8uyRcgqXVBxman6NxXLPFtmnfRiZbPPKHFO2u0qKw7OP3aC2IeyYYxPPNeIJCHAu9lmtlUiPPp9iJ9lrkcr9i4MFjHwu3592ArKCDNQjhn9tQXu6vX1kFpKTt3n4KpdB2sizuuY6LYZpmn6RNJLf0zdlDmIBLKQP0oXlGiPLG8uw9iP7s864bcnsEcfb4fAKgynm70HqSzkkH-JJXQ_0nCWghua8yHrI_X_S5SskLnb03OeHCXz=s708-no?authuser=0"
          />
        </div>
      </div>
    </section>
  )
}

export default About