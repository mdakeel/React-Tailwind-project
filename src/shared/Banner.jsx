import React from 'react';
//motion
import {motion} from "framer-motion";
//varriants
import { fadeIn } from '../variants';

export const Banner = ({banner, heading, subheading, btn1, btn2}) => {
  return (
    <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
    <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        
        {/* banner image start */}
        {/* motion start */}
        <motion.div 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}
        >
            <img src={banner} alt="banner-image" className='lg:h-[386px]' />
        </motion.div>
        {/* motion end */}
        {/* banner image end */}

        {/* banner content start */}
        {/* motion start */}
        <motion.div
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount: 0.7}}

         className='md:w-3/5'>
            <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
            <p className='text-[#EBEBEB] text-2xl mb-8'>{subheading}</p>
             <div className='space-x-2 space-y-4'> 
                <button className='btnPrimary'>{btn1}</button>
                <button className='btnPrimary'>{btn2}</button>
             </div>
        </motion.div>
        {/* motion end */}
        {/* banner content end */}
        
    </div>
</div>
  )
}
