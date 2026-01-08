"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins immediately
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null)
  const magneticRef = useRef<HTMLAnchorElement>(null)
  const breathingRef = useRef<HTMLDivElement>(null)

  // We store the "quickTo" functions in refs
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(() => {
    // --- 1. Setup Magnetic Movement (quickTo) ---
    if (magneticRef.current) {
      xTo.current = gsap.quickTo(magneticRef.current, "x", { duration: 0.4, ease: "power3.out" });
      yTo.current = gsap.quickTo(magneticRef.current, "y", { duration: 0.4, ease: "power3.out" });
    }

    // --- 2. Breathing Animation ---
    if (breathingRef.current) {
        gsap.to(breathingRef.current, {
            scale: 1.1,
            duration: 2,
            ease: "bounce.inOut",
            repeat: -1,
            yoyo: true
        });
    }

    // --- 3. Entry Animation ---
    if (footerRef.current) {
        gsap.fromTo(footerRef.current,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
            }
        }
        )
    }
  }, { scope: footerRef })


  // --- Event Handlers ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!xTo.current || !yTo.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    
    // Calculate distance from center
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // --- MIXED LOGIC ---
    // X is Inverted (Repel), Y is Standard (Attract)
    xTo.current(x * -0.5); 
    yTo.current(y * 0.5);
  }

  const handleMouseLeave = () => {
    if (!xTo.current || !yTo.current) return;
    
    // Reset to center
    xTo.current(0);
    yTo.current(0);
  }

  return (
    <div 
      ref={footerRef}
      className='text-left static lg:sticky lg:bottom-0 -z-10 bg-[#0000] pb-[50px]'>
      <div className='flex flex-col items-center max-w-[1200px] mx-auto px-[15px] relative'>

          {/* Top Section */}
          <div className='flex flex-col gap-y-[50px] gap-x-[30px] justify-center items-center mb-[50px] w-full  lg:flex-row'>
              <div className='flex flex-col justify-between items-start w-full'>
                  <div className='flex flex-col gap-x-[50px] gap-y-[30px] items-center w-full lg:items-start lg:gap-[50px]'>
                      <a href='#' className='relative inline-block'>
                        <Image src="/icons/hisName.svg" alt="Name" width={167} height={18} className='block w-auto h-auto'/>
                      </a>
                      <p className='text-[40px] text-center tracking-[-1.6px] uppercase max-w-7xl my-0 font-medium leading-[1.2em] lg:text-start lg:text-[50px]'>
                        I don’t build websites, I build <span className='text-[#7000ff]'>world-class brands</span> and sustainable businesses
                      </p>
                  </div>
              </div>

              {/* --- INTERACTIVE CIRCLE AREA --- */}
              <div 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className='w-[200px] h-[200px] border border-dashed border-black rounded-full flex items-center justify-center relative cursor-pointer md:w-[255px] md:h-[255px]'
              >
                  {/* The Link (Magnetic Target) */}
                  <a 
                    href="#contact"
                    ref={magneticRef}
                    className="relative z-10 flex items-center justify-center w-full h-full no-underline"
                  >
                      {/* The Visual Circle (Breathing Target) */}
                      <div 
                        ref={breathingRef}
                        className="w-[180px] h-[180px] bg-[#111111] rounded-full flex items-center justify-center text-white md:w-[238px] md:h-[238px]"
                      >
                        <span className="pointer-events-none font-medium text-lg">Let’s Talk</span>
                      </div>
                  </a>
              </div>
          </div>

          {/* Bottom Section */}
          <div className='flex flex-col-reverse gap-y-[50px] items-center justify-between w-full lg:flex-row lg:mt-[30px] lg:items-start'>
            <div className='flex flex-col text-center items-center '>
                <div className='text-center w-full leading-[1.6em] inline'>
                  © Marcel Apitty. All Rights Reserved.
                  <a href="" className='ml-[5px] text-[#111] tracking-[0.2px] mr-[5px] no-underline inline items-center text-[20px] leading-[1.2em] bg-[#0000] hover:text-[#7000ff] transition-all duration-200 '>Licensing</a>
               </div>

               <div className='flex flex-wrap justify-center '>
                  <div className='text-center leading-[1.6em]'>
                      <a href="" className='mx-[5px] text-black tracking-[.2px] no-underline inline items-center text-[20px] leading-[1.2em] bg-[#0000] hover:text-[#7000ff] transition-all duration-200 '>Template</a>by
                      <a href="" className='mx-[5px] text-black tracking-[.2px] no-underline inline items-center text-[20px] leading-[1.2em] bg-[#0000] hover:text-[#7000ff] transition-all duration-200 '>wCopilot</a>
                  </div>
                  <div className='text-center leading-[1.6em]'>
                    Powered by
                    <a href="" className='mx-[5px] text-black tracking-[.2px] no-underline inline items-center text-[20px] leading-[1.2em] bg-[#0000] hover:text-[#7000ff] transition-all duration-200 '>Webflow</a>
                  </div>
                  
               </div>
            </div>
               

               

                <div className='flex gap-[30px]'>
                  {['Work', 'About', 'Blog'].map((item) => (
                    <a href='' key={item} className="text-black tracking-[-0.4px] items-center text-[20px] leading-[1.2em] no-underline cursor-pointer bg-[#0000] hover:text-[#7000ff] transition-colors duration-300">{item}</a> 
                  ))}
                </div>
          </div>

      </div>
    </div>
  )
}

export default Footer