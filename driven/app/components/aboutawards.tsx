"use client";

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const awards = [
  { year: "2021", title: "Dribbble Animation Award" },
  { year: "2022", title: "Awwwards Site of the day" },
  { year: "2023", title: "Awwwards Interactive Site" },
];

const Awards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % awards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='py-0 z-5 bg-[#e8e8e8] relative block'>

        {/* Wrapper: 
           1. flex flex-col: Stacks vertically (Text on top) for mobile.
           2. lg:flex-row:  Switches to side-by-side for desktop.
           3. lg:items-start: Aligns items to the top on desktop.
        */}
        <div className='flex flex-col items-center max-w-[1200px] mx-auto px-[15px] relative'>

            <div className='flex flex-col gap-y-[60px] gap-x-0 text-center items-center w-full lg:gap-y-[100px]'>

                      {/* Title Section */}
                    <motion.div 
                      className='w-full max-w-[350px] opacity-100 text-center'
                      initial={{ opacity: 0, scale: 0, rotateY: 90, originX: 1 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <div>
                          AWARD-WINNING DESIGNER WITH HIGH VISUAL (i think so) TASTE
                      </div>
    
                    </motion.div>
                    
                    <div className='flex flex-col gap-y-[30px] lg:gap-y-[50px]'>
                        {/* Awards List */}
                    
                        {awards.map((award, i) => (
                            <motion.div 
                              key={i}
                              className='opacity-100 text-center'
                              initial={{ opacity: 0, scale: 0, rotateY: 90, originX: 1 }}
                              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                              transition={{ duration: 0.8, delay: i * 0.3, ease: "easeOut" }}
                              viewport={{ once: true }}
                            >
                                <div>{award.year}</div>
                                <motion.h2 
                                  animate={{ color: i === activeIndex ? "#7000ff" : "rgba(112, 0, 255, 0)" }}
                                  transition={{ duration: 1.5, ease: "easeInOut" }}
                                  className='[-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#7000ff] text-[30px] my-2.5 font-medium tracking-[-1.6px] leading-[1em] md:text-[42px] lg:text-[60px]'
                                >
                                  {award.title}
                                </motion.h2>
                            </motion.div>
                        ))}

                    </div>
                    
            </div>


            
        </div>
      
    </div>
  )
}

export default Awards