"use client"

import React, { useRef, useState } from 'react'

const Footer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    setPosition({
      x: relX * -0.25, 
      y: relY * 0.25   
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <>
      <style>{`
        @keyframes breathing {
          /* CHANGED HERE: 
             Was 0.6 (shrinks a lot). 
             Now 0.85 (shrinks just a tiny bit). 
          */
          0%, 100% { transform: scale(0.85); }
          50% { transform: scale(1); }
        }
      `}</style>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-6 font-normal text-[19px] w-full text-center lg:text-left py-10 px-[6rem]'>

        {/* --- 1. NAME --- */}
        <div className='lg:row-start-1 lg:col-start-1'>
          <p className='pb-[3.2rem] font-black'>MARCEL APITTY</p>
          <div className='text-4xl font-variable font-bold leading-normal tracking-normal w-full lg:w-[630px]'>
            I DON’T BUILD WEBSITES, I BUILD <span className="text-violet-600">WORLD-CLASS BRANDS</span> AND SUSTAINABLE BUSINESSES
          </div>
        </div>

        {/* --- 2. INTERACTIVE CIRCLE --- */}
        <div className='flex justify-center lg:justify-end lg:row-start-1 lg:col-start-2'>
           
           <div 
             ref={containerRef}
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
             className="relative w-60 h-60 flex items-center justify-center cursor-pointer group"
           >
              {/* Static Border */}
              <div className="absolute inset-0 w-full h-full rounded-full border-[1px] border-dashed border-black z-10 pointer-events-none"></div>

              {/* Moving Wrapper */}
              <div 
                className="absolute z-20 flex items-center justify-center transition-transform duration-300 ease-out will-change-transform"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)` 
                }}
              >
                  {/* Breathing Circle */}
                  <div 
                    className="w-60 h-60  rounded-full flex items-center justify-center"
                    style={{
                      /* CHANGED HERE: 
                         Was 3s. Now 6s (Much slower).
                      */
                      backgroundColor: "#111111",
                      animation: 'breathing 6s ease-in-out infinite',
                    }}
                  >
                     <span className="text-white font-medium relative z-30 pointer-events-none">Let’s Talk</span>
                  </div>
              </div>
           </div> 
        </div>

        {/* --- 3. LINKS --- */}
        <div className='flex gap-5 justify-center lg:justify-end lg:row-start-2 lg:col-start-2'>
          <p className="cursor-pointer hover:text-violet-600 transition-colors duration-300">Work</p> 
          <p className="cursor-pointer hover:text-violet-600 transition-colors duration-300">About</p> 
          <p className="cursor-pointer hover:text-violet-600 transition-colors duration-300">Blog</p>
        </div>

        {/* --- 4. COPYRIGHT --- */}
        <div className='lg:row-start-2 lg:col-start-1'>
          <p>
            © Marcel Apitty. All Rights Reserved. Licensing <br />
            Template by wCopilot Powered by Webflow
          </p>
        </div>
        
      </div>
    </>
  )
}

export default Footer