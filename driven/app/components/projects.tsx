"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = () => {
  return (
    <div className='container p-3 lg:ml bg-gray-200'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 px-[15px]'>
            
            {/* Image 1 */}
            <motion.div 
                className='overflow-hidden rounded-lg shadow-lg'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Image 
                    src="/images/dash.jpg"
                    alt="dashboard"
                    width={570}
                    height={500} 
                    className='w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out'
                />
            </motion.div>

            {/* Image 2 */}
            <motion.div 
                className='overflow-hidden rounded-lg shadow-lg'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Image 
                    src="/images/btc.jpg"
                    alt="project1"
                    width={570}
                    height={500} 
                    className='w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out'
                />    
            </motion.div>

            {/* Image 3 */}
            <motion.div 
                className='overflow-hidden rounded-lg shadow-lg'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Image 
                    src="/images/cloud.jpg"
                    alt="project1"
                    width={570}
                    height={500} 
                    className='w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out'
                />
            </motion.div>

            {/* Image 4 */}
            <motion.div 
                className='overflow-hidden rounded-lg shadow-lg'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Image 
                    src="/images/btt.jpg"
                    alt="project1"
                    width={570}
                    height={500} 
                    className='w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out'
                />
            </motion.div>

        </div>
    </div>
  )
}

export default projects