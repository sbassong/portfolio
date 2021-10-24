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
            <div class="text-white text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl p-10 ">Dev needs?</div>
      
            <div class="text-yellow-600 opacity-70 mt-10 sm:mt-40 text-2xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl">
              <Typewriter 
                options={{ strings: [
                  'Synergy-oriented',
                  'Growth minded',
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

              <p className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-white to-yellow-500">
                <Typewriter 
                  options={{ strings: [
                    'Sam Bassong'
                  ],
                  autoStart: true,
                  delay: 450,
                  deleteSpeed: 15,
                  loop: true
                  }}
                />
              </p>
            </div>
          </motion.div>
        </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Introduction