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
    <div className='container pb-0 pt-[60px] z-5 bg-[#e8e8e8] relative block'>

        {/* Wrapper: 
           1. flex flex-col: Stacks vertically (Text on top) for mobile.
           2. lg:flex-row:  Switches to side-by-side for desktop.
           3. lg:items-start: Aligns items to the top on desktop.
        */}
        <div className='flex flex-col items-center max-w-[1200px] mx-auto px-[15px] relative'>

            <div className='flex flex-col gap-[50px] text-center items-center w-full lg:flex-row lg:gap-[100px] lg:items-start lg:text-start'>

                      {/* Title Section */}
                    <motion.div 
                      className='w-full max-w-[350px]'
                      initial={{ opacity: 0, scale: 0, rotateY: 90, originX: 1 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <div>
                          AWARD-WINNING DESIGNER WITH HIGH VISUAL (i think so) TASTE
                      </div>
    
                    </motion.div>
                    
                    <div className='flex flex-col gap-y-[30px] lg:gap-y-[50px] '>
                        {/* Awards List */}
                    
                        {awards.map((award, i) => (
                            <motion.div 
                              key={i} 
                              initial={{ opacity: 0, scale: 0, rotateY: 90, originX: 1 }}
                              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                              transition={{ duration: 0.8, delay: i * 0.3, ease: "easeOut" }}
                              viewport={{ once: true }}
                            >
                                <div>{award.year}</div>
                                <h2 className='text-[30px] text-[#7000ff] my-2.5 font-medium tracking-[-1.6px] leading-[1em] md:text-[42px] lg:text-[60px]'>{award.title}</h2>
                            </motion.div>
                        ))}

                    </div>
                    
            </div>


            
        </div>
      
    </div>
  )
}

export default Awards