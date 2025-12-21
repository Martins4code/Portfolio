"use client";

import React from 'react'
import { motion } from 'framer-motion'

const services = () => {
  return (
    <div className='container p-3 lg:ml bg-gray-200'>

      
      <div className='grid grid-cols-1 px-[15px] gap-8 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:items-stretch '>

        <motion.div 
          className=' flex flex-col gap-[50px] items-center '
          initial={{ opacity: 0, scale: 0, rotateY: 90, originX: 1 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
            <div className='text-[20px] uppercase'>
              WHAT WE DO
            </div>
            
            <div className='w-auto h-auto border-2 border-violet-600 text-violet-600 rounded-full px-8 py-2'>
              <a href="">
                Services
              </a>
            </div>
            
        </motion.div>

        
        <motion.div 
          className='box_format flex flex-col justify-between h-full relative overflow-hidden group'
          initial={{ opacity: 0, scale: 0, rotateY: 90, originX: 1 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className='absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>

          <div className='relative z-10'>
            <div className='text-[24px] font-bold mb-4 flex justify-between'>
              <a href=""> Cyber Security</a>
              <div>2025</div>
            </div>
            
            <p className='text-[20px]'>Our comprehensive Cyber Security Services ensure the protection and resilience of your digital assets and operations. We employ cutting-edge technologies and expert strategies to safeguard your organization against evolving cyber threats.</p>
          </div>

          <a href="" className='mt-4 self-start pl-5 pr-5 border-2 border-white text-white rounded-full relative z-10'>View More</a>

        </motion.div>


        <motion.div 
          className='box_format flex flex-col justify-between h-full relative overflow-hidden group'
          initial={{ opacity: 0, scale: 0, rotateY: 90, originX: 1 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className='absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>

          <div className='relative z-10'>
            <div className='text-[24px] font-bold mb-4 flex justify-between'>
              <a href=""> App Development</a>
              <div>2023</div>
            </div>

            <p className='text-[20px]'>Our App Development Services encompass the entire spectrum of building innovative and functional applications tailored to meet your unique business needs.</p>
          </div>

          <a href="" className='mt-4 self-start pl-5 pr-5 border-2 border-white text-white rounded-full relative z-10'>View More</a>
              
        </motion.div>

        <motion.div 
          className='box_format flex flex-col justify-between h-full relative overflow-hidden group'
          initial={{ opacity: 0, scale: 0, rotateY: 90, originX: 1 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className='absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>

          <div className='relative z-10'>
            <div className='text-[24px] font-bold mb-4 flex justify-between'>
              <a href=""> IT Consultancy</a>
              <div>2023</div>
            </div>

            <p className='text-[20px]'>Our IT Consultancy Services are designed to guide and empower your organization in navigating the complex and ever-changing landscape of information technology.</p>
          </div>

          <a href="" className='mt-4 self-start pl-5 pr-5 border-2 border-white text-white rounded-full relative z-10'>View More</a>
            
        </motion.div>

        <motion.div 
          className='bg-black lg:col-span-2 p-[30px] text-white rounded-xl w-full h-full flex flex-col justify-between relative overflow-hidden group'
          initial={{ opacity: 0, scale: 0, rotateY: 90, originX: 1 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className='absolute inset-0 bg-violet-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div> 
          
          <div className='relative z-10'>
            <div className='text-[24px] font-bold mb-4 flex justify-between'>
              <a href=""> Cloud Migration</a>
              <div>2023</div>
            </div>

            <p className='text-[20px] lg:columns-2'>Our Cloud Migration Services facilitate a seamless transition of your IT infrastructure, applications, and data to cloud environments, enabling you to leverage the benefits of agility, scalability, and cost-efficiency. We ensure a structured and efficient migration process tailored to your organization specific needs.</p>
          </div>

          <a href="" className='mt-4 self-start pl-5 pr-5 border-2 border-white text-white rounded-full relative z-10'>View More</a>

        </motion.div>

      </div>
        
    </div>
  )
}

export default services 
