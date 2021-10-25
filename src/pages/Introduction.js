import React from "react";
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect/'

const Introduction = () => {

  return (
    <section id='introduction'>
      <div className="h-screen lg:h-screen top-0 bg-eastlake-bg bg-no-repeat bg-cover bg-center" >
        {/* <div className="h-screen lg:h-screen top-0 bg-yellow-600 bg-opacity-60" > */}
        <div className="h-screen lg:h-screen top-0 bg-indigo-900 bg-opacity-70" >

        <motion.div initial={{ x: 0 }} animate={{ y: 100 }} exit={{ y: -1000 }} transition={{ delay: 0.05 }} className="flex justify-center text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className="mt-36 sm:mt-40">
      
            <div class="text-yellow-500 opacity-70 mt-5 sm:mt-20 text-2xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl">
              <Typewriter 
                options={{ strings: [
                  'Adaptability',
                  'Synergy',
                  'Growth mindset',
                  'Agile-focused approach',
                  'Elegant solutions',
                ],
                autoStart: true,
                loop: true,
                delay: 15,
                deleteSpeed: 16
                }}
              />

              <br />

              <p className="font-bold text-yellow-400 text-8xl "><span className='text-white'>Sam</span>Bassong</p>
            </div>
          </motion.div>
        </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Introduction