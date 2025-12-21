"use client";

import React from 'react'
import { motion } from 'framer-motion'

const awards = [
  { year: "2021", title: "Dribbble Animation Award" },
  { year: "2022", title: "Awwwards Site of the day" },
  { year: "2023", title: "Awwwards Interactive Site" },
];

const Awards = () => {
  return (
    <div className='container p-3 lg:ml bg-gray-200'>

        {/* Wrapper: 
           1. flex flex-col: Stacks vertically (Text on top) for mobile.
           2. lg:flex-row:  Switches to side-by-side for desktop.
           3. lg:items-start: Aligns items to the top on desktop.
        */}
        <div className='flex flex-col items-center gap-[50px] lg:pt-[130px] lg:flex-row lg:items-start lg:gap-[100px]'>



            {/* Title Section */}
            <motion.div 
              className='text-center lg:text-left font-bold leading-[1.5] w-full max-w-[350px] font-normal text-[19px]'
              initial={{ opacity: 0, scale: 0, rotateY: 90, originX: 1 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
                AWARD-WINNING DESIGNER WITH HIGH VISUAL (i think so) TASTE
            </motion.div>
            
            {/* Awards List */}
            <div className='flex flex-col gap-[50px] w-full'>
                {awards.map((award, i) => (
                    <motion.div 
                      key={i} 
                      className='flex flex-col items-center lg:items-start'
                      initial={{ opacity: 0, scale: 0, rotateY: 90, originX: 1 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                        <div className='text-gray-600'>{award.year}</div>
                        <h2 className='text-[30px] text-[#6200EA] lg:text-[60px] leading-none'>{award.title}</h2>
                    </motion.div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Awards