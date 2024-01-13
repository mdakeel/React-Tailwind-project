import React from 'react'
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"

//motion
import {motion} from "framer-motion";
//varriants
import { fadeIn } from '../variants';

export const About = () => {
  return (
    <>
    <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id='about' >
      {/* First part start */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <motion.div 
            // motion start
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.7}}

            className='md:w-1/2'>
                <img src={about1} alt="" />
            </motion.div>
            {/* motion end */}

            {/* about content start */}
            <motion.div 
            // motion start
             variants={fadeIn("left", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount: 0.7}}

            
            className='md:2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary'>for many years.</span></h2>
                <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.
                     'There are many different kinds of animals that live in China.</p>
                <button className='btnPrimary'>Get Started</button>
            </motion.div>

            {/* motion end */}
            {/* about content end */}
        </div>
      {/* First part end */}

      {/* Second part start */}
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
      <motion.div 
            // motion start
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.7}} 
            
            className='md:w-1/2'>
                <img src={about2} alt="img-2" />
            </motion.div>
            {/* motion end */}

            {/* about content start */}
            <motion.div 

            // motion start
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.7}}
            
            className='md:2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can Practice at any<span className='text-secondary'>time convinent for you.</span></h2>
                <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.
                     There are many different kinds of animals that live in China.</p>
                <button className='btnPrimary'>Get Started</button>
            </motion.div>

            {/* motion end */}

            {/* about content end */}
        </div>
      {/* Second part end */}
    </div> 
    </>
  )
}
