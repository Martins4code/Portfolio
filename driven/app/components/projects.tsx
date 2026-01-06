'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    // Create a GSAP context for cleanup and scoping
    let ctx = gsap.context(() => {
      
      const cards = gsap.utils.toArray('.project-card');

      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 50, 
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%", 
            toggleActions: "play none none none",
            once: true
          }
        })
      });

    }, containerRef) 

    return () => ctx.revert() // Cleanup on unmount
  }, [])

  return (
    <div ref={containerRef} className='container py-[60px] z-5 bg-[#e8e8e8] relative block'>
        <div className='flex flex-col items-center max-w-[1200px] mx-auto px-[15px] relative'>
            <div className='w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] grid-rows-[auto] auto-cols-fr w-full'>
                    
                    {/* --- Image 1 --- */}
                    <div className='project-card flex w-full'>
                        <a href="#" className='group h-[400px] rounded-[15px] w-full block relative overflow-hidden max-w-full text-[#7000ff] no-underline bg-black'>
                             <Image
                                src="/images/dash.jpg"
                                alt="dashboard"
                                width={570}
                                height={500}
                                className='w-full h-full max-w-full inline-block align-middle border-0 object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100'
                            />
                            <div className='flex gap-x-[50px] gap-y-[30px] z-10 justify-between mx-[30px] mb-[30px] leading-[1.5em] inset-x-0 bottom-0 top-auto absolute'>
                                <div className='text-white text-[25px] transition-colors duration-300 group-hover:text-[#7000ff]'>Fashion Landing Page for Wally</div>
                                {/* Added: group-hover:rotate-90 */}
                                <Image 
                                    src="/icons/turnArrow.svg" 
                                    alt="down" 
                                    width={24} 
                                    height={24} 
                                    className='max-w-full inline-block align-middle border-0 transition-transform duration-500 group-hover:rotate-90' 
                                />   
                            </div>
                            <div className='bg-gradient-to-t from-[#111111e6] to-transparent absolute inset-0 z-0'></div>
                        </a>
                    </div>

                    {/* --- Image 2 --- */}
                    <div className='project-card flex w-full'>
                         <a href="#" className='group h-[400px] rounded-[15px] w-full block relative overflow-hidden max-w-full text-[#7000ff] no-underline bg-black'>
                             <Image
                                src="/images/btc.jpg"
                                alt="btc project"
                                width={570}
                                height={500}
                                className='w-full h-full max-w-full inline-block align-middle border-0 object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100'
                            />
                            <div className='flex gap-x-[50px] gap-y-[30px] z-10 justify-between mx-[30px] mb-[30px] leading-[1.5em] inset-x-0 bottom-0 top-auto absolute'>
                                <div className='text-white text-[25px] transition-colors duration-300 group-hover:text-[#7000ff]'>Shopify App for Nike</div>
                                {/* Added: group-hover:rotate-90 */}
                                <Image 
                                    src="/icons/turnArrow.svg" 
                                    alt="down" 
                                    width={24} 
                                    height={24} 
                                    className='max-w-full inline-block align-middle border-0 transition-transform duration-500 group-hover:rotate-90' 
                                />   
                            </div>
                            <div className='bg-gradient-to-t from-[#111111e6] to-transparent absolute inset-0 z-0'></div>
                        </a>  
                    </div>

                    {/* --- Image 3 --- */}
                    <div className='project-card flex w-full'>
                        <a href="#" className='group h-[400px] rounded-[15px] w-full block relative overflow-hidden max-w-full text-[#7000ff] no-underline bg-black'>
                             <Image
                                src="/images/cloud.jpg"
                                alt="cloud project"
                                width={570}
                                height={500}
                                className='w-full h-full max-w-full inline-block align-middle border-0 object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100'
                            />
                            <div className='flex gap-x-[50px] gap-y-[30px] z-10 justify-between mx-[30px] mb-[30px] leading-[1.5em] inset-x-0 bottom-0 top-auto absolute'>
                                <div className='text-white text-[25px] transition-colors duration-300 group-hover:text-[#7000ff]'>Courses Website for Pattern</div>
                                {/* Added: group-hover:rotate-90 */}
                                <Image 
                                    src="/icons/turnArrow.svg" 
                                    alt="down" 
                                    width={24} 
                                    height={24} 
                                    className='max-w-full inline-block align-middle border-0 transition-transform duration-500 group-hover:rotate-90' 
                                />   
                            </div>
                            <div className='bg-gradient-to-t from-[#111111e6] to-transparent absolute inset-0 z-0'></div>
                        </a>
                    </div>

                    {/* --- Image 4 --- */}
                    <div className='project-card flex w-full'>
                        <a href="#" className='group h-[400px] rounded-[15px] w-full block relative overflow-hidden max-w-full text-[#7000ff] no-underline bg-black'>
                             <Image
                                src="/images/btt.jpg"
                                alt="btt project"
                                width={570}
                                height={500}
                                className='w-full h-full max-w-full inline-block align-middle border-0 object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100'
                            />
                            <div className='flex gap-x-[50px] gap-y-[30px] z-10 justify-between mx-[30px] mb-[30px] leading-[1.5em] inset-x-0 bottom-0 top-auto absolute'>
                                <div className='text-white text-[25px] transition-colors duration-300 group-hover:text-[#7000ff]'>No coding platform for Dotmo</div>
                                {/* Added: group-hover:rotate-90 */}
                                <Image 
                                    src="/icons/turnArrow.svg" 
                                    alt="down" 
                                    width={24} 
                                    height={24} 
                                    className='max-w-full inline-block align-middle border-0 transition-transform duration-500 group-hover:rotate-90' 
                                />   
                            </div>
                            <div className='bg-gradient-to-t from-[#111111e6] to-transparent absolute inset-0 z-0'></div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects