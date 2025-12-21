"use client"
import React, { useState, useEffect } from 'react';

export default function AutoTimeline() {
  // Start with step 1 active
  const [activeStep, setActiveStep] = useState(1);

  // This effect handles the automatic cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((currentStep) => {
        // If we are at step 3, go back to 1, otherwise go to next
        return currentStep === 3 ? 1 : currentStep + 1;
      });
    }, 2000); // <-- Change this number (2000ms = 2 seconds) to make it faster/slower

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      text: <>I’m a pixel <br /> perfectionist</>,
    },
    {
      id: 2,
      text: <>Working with 2D, <br /> 3D, 4D</>,
    },
    {
      id: 3,
      text: <>I love make <br /> things interactive</>,
    },
  ];

  return (
    <div className="bg-[#EBEBEB] min-h-screen flex items-center justify-center p-8 font-sans">
      <div className="max-w-3xl w-full">
        
        {steps.map((step, index) => {
          const isActive = activeStep === step.id;
          const isLast = index === steps.length - 1;

          return (
            <div 
              key={step.id} 
              className="relative flex items-center pb-20 lg:pb-32 group transition-colors duration-500"
            >
              
              {/* Vertical Dashed Line (Hide on the last item) */}
              {!isLast && (
                <div 
                  className="absolute left-[2.5rem] lg:left-[5rem] top-16 bottom-0 w-px border-l-2 border-dashed border-[#A78BFA]" 
                  aria-hidden="true"
                ></div>
              )}

              {/* Left Side: Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="h-20 w-20 lg:h-40 lg:w-40 flex items-center justify-center">
                  <div 
                    className={`
                      h-[5rem] w-[5rem] lg:h-[10rem] lg:w-[10rem] rounded-full flex items-center justify-center text-3xl lg:text-6xl font-medium 
                      transition-all duration-700 ease-in-out
                      ${isActive 
                        ? 'bg-[#6200EA] text-white shadow-lg scale-110' 
                        : 'bg-[#EBEBEB] text-[#6D28D9] border-[1.5px] border-[#6D28D9] shadow-sm scale-100'
                      }
                    `}
                  >
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Right Side: Connector & Text */}
              <div className="flex items-center w-full">
                
                {/* Horizontal Connector Line - ANIMATING WIDTH */}
                <div 
                  className={`
                    h-[1px] bg-[#C4B5FD] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${isActive ? 'w-24 lg:w-48' : 'w-9 lg:w-18'}
                  `}
                ></div>

                {/* Connector Dot */}
                <div className={`
                    w-2.5 h-2.5 lg:w-4.5 lg:h-4.5 rounded-full bg-[#A78BFA] ring-4 ring-[#A78BFA]/20 relative z-20 flex-shrink-0
                    transition-transform duration-700
                    ${isActive ? 'scale-125' : 'scale-100'}
                `}></div>

                {/* Text Content */}
                <div 
                  className={`
                    ml-4 lg:ml-10 transition-all duration-700
                    ${isActive ? 'opacity-100 translate-x-0' : 'opacity-60 translate-x-0'}
                  `}
                >
                  <h3 className={`text-3xl lg:text-6xl font-medium leading-tight transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                    {step.text}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}