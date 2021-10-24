

const Skills = () => {
  return (
    <section id="skills">
      <div className="container h-screen lg:h-screen top-0 px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>

        <p>Languages</p>
        <ul className="m-2 flex flex-wrap">
          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/Q9P8Hac.png"/>
            JavaScript
          </li> 
    
          <li className='w-14 h-14 text-md flex-col justify-around mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/aEjpOUs.png"/>
            Python3
          </li> 

          <li className='w-14 h-14 text-md flex-col justify-around mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/f8ab8PH.png"/>
            HTML5
          </li> 

          <li className='w-14 h-14 text-md flex-col justify-around mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/j0NoZ95.png"/>
            CSS3
          </li> 

          <li className='w-14 h-14 text-md flex-col justify-around mx-3'>
            <img className=" w-full mx-2" alt='' src="https://logodix.com/logo/542135.jpg"/>
            SQL
          </li> 

          <li className='w-14 h-14 text-md flex-col justify-around mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/duR0hTQ.png"/>
            NoSQL
          </li> 
        </ul>
        
        <p>Front-end</p>
        <ul className="m-2 flex flex-wrap">
          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/WlkyT3e.png"/>
            React
          </li> 
          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/VDXSXtU.png"/>
            Redux
          </li> 
          <li className='w-14 h-14 text-md flex-col justify-around mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/qz4DXir.png"/>
            Vue
          </li> 
          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/pT1baZU.jpg"/>
            Vuex
          </li> 
          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/fOcjEPM.png"/>
            Vuetify
          </li> 
          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/T9Q7a86.png"/>
            TailwindsCSS
          </li> 
          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/cgV9eEc.png"/>
            Bootstrap
          </li> 
        </ul>
        
        <p>Back-end</p>
        <ul className="m-2 flex flex-wrap">
          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/GJrnwtm.png"/>
            NodeJS
          </li> 

          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/5KBUmxD.png"/>
            ExpressJS
          </li> 
          
          <li className='w-14 h-14 text-md flex-col justify-around mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/aEjpOUs.png"/>
            Flask
          </li> 

          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/Q9P8Hac.png"/>
            PostgresSQL
          </li> 
          
          <li className='w-14 h-14 text-md flex-col justify-around mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/uJMRgGU.png"/>
            MongoDB
          </li> 
        </ul>

        <p>Misc</p>
        <ul className="m-2 flex flex-wrap">
          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/ZjHBxKw.png"/>
            Github
          </li> 

          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/a3INeUB.png"/>
            Heroku
          </li> 
          
          <li className='w-14 h-14 text-md flex-col justify-around mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/EAdqHYd.png"/>
            Netlify
          </li> 

          <li className='w-14 h-14 text-md flex-col mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/tsvrUS4.png"/>
            Vercel
          </li> 
          
          <li className='w-14 h-14 text-md flex-col justify-around mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/Jtz0c7W.png"/>
            AWS S3
          </li> 

          <li className='w-14 h-14 text-md flex-col justify-around mx-3'>
            <img className=" w-full mx-2" alt='' src="https://i.imgur.com/h4ZWbL0.jpg"/>
            GMaps API
          </li> 
        </ul>
        

      </div>
    </section>
  );
}

export default Skills