"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ 
  children, 
  baseColor = "bg-[#7000ff]", 
  overlayColor = "bg-black", 
  index = 0
}: { 
  children: React.ReactNode, 
  baseColor?: string, 
  overlayColor?: string, 
  index?: number
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { opacity: 0, scale: 0.5, rotateY: 90, transformOrigin: "right center" },
        {
          opacity: 1, 
          scale: 1, 
          rotateY: 0, 
          duration: 0.8, 
          ease: "power2.out", 
          delay: index * 0.3,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            once: true
          }
        }
      );
    }
  }, { scope: cardRef });

  const handleMouseEnter = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        height: "100%",
        duration: 0.4,
        ease: "power1.inOut"
      });
    }
  };

  const handleMouseLeave = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        height: "0%",
        duration: 0.4,
        ease: "power1.inOut"
      });
    }
  };

  return (
    <div 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`service-card cursor-pointer flex flex-col w-full ${baseColor} rounded-[15px] justify-between items-start p-[30px] relative overflow-hidden`}
    >
      <div 
        ref={overlayRef}
        className={`${overlayColor} w-full absolute inset-x-0 bottom-0 top-auto z-0`}
        style={{ height: 0 }}
      />
      
      {/* Content wrapper to ensure it stays above the overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between items-start">
        {children}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className='w-full pb-0 pt-[60px] z-5 bg-[#e8e8e8] relative lg:pt-[130px]'>
        <div className='flex flex-col items-center max-w-[1200px] mx-auto px-[15px] relative'>
            <div className='grid grid-cols-1 gap-[30px] auto-cols-fr w-full lg:grid-cols-3 '>
              
              {/* --- HEADER SECTION --- */}
              <div className='flex flex-col w-full col-span-1 row-span-1 opacity-100 gap-[30px] items-center lg:items-start mb-[30px] gap-y-[50px]'>
                <div className='uppercase max-w-[850px] my-0 text-[20px] font-medium'>
                  What We Do
                </div>
                <a href="" className='border-solid border-2 text-[#7000ff] text-center tracking-[-0.4px] transform-none bg-[#0000] rounded-[60px] py-2.5 px-[30px] leading-[1em] transition-all duration-300 inline-block cursor-pointer no-underline items-center text-[20px]'>
                  Services
                </a>
              </div>

              {/* --- CARDS COLUMN --- */}
              <div className='col-span-1 row-span-1 w-full lg:col-span-2'>
                <div className='flex flex-col gap-[30px] md:flex-row'>
                  
                  {/* --- CARD 1 --- */}
                  <ServiceCard index={0}>
                      <div className='w-full relative'>
                        <Image src="icons/globank.svg" 
                              alt="globank" 
                              width={168} 
                              height={41} 
                              className='max-w-full inline-block align-middle border-0'/>
                          <div className='flex flex-col items-start gap-[15px] text-white border-b justify-between w-full my-5 pb-5 text-[25px] leading-[1.2em]'>
                              <span className='text-white text-[25px] items-center leading-[1.2em]'>Cyber Security</span>
                              <div>2023</div>
                          </div>
                          <p className='text-white mb-[30px] mt-2.5 font-normal leading-[1.5em]'>Our comprehensive Cyber Security Services ensure the protection and resilience of your digital assets and operations. We employ cutting-edge technologies and expert strategies to safeguard your organization against evolving cyber threats.</p>
                      </div>
                      <a href="" className='border-white text-white hover:bg-white hover:text-black relative border-2 border-solid text-center tracking-[-0.4px] transform-none bg-[#0000] rounded-[60px] py-2.5 px-[30px] leading-[1em] transition-all duration-300 inline-block cursor-pointer no-underline items-center text-[20px]'>
                        View more
                      </a>
                  </ServiceCard> 

                  {/* --- CARD 2 --- */}
                  <ServiceCard index={1}>
                            <div className='w-full relative'>
                            <Image src="icons/nextlogo.svg" 
                                  alt="nextlogo" 
                                  width={142} 
                                  height={41} 
                                  className='max-w-full inline-block align-middle border-0'/>
                              <div className='flex flex-col items-start gap-[15px] text-white border-b w-full my-5 pb-5 text-[25px] leading-[1.2em]'>
                                  <span className='text-white text-[25px] items-center leading-[1.2em]'>App Development</span>
                                  <div>2023</div>
                              </div>
                              <p className='text-white mb-[30px] mt-2.5 font-normal leading-[1.5em]'>
                                Our App Development Services encompass the entire spectrum of building innovative and functional applications tailored to meet your unique business needs.
                              </p>
                          </div>
                          <a href="" className='border-white text-white hover:bg-white hover:text-black relative border-2 border-solid text-center tracking-[-0.4px] transform-none bg-[#0000] rounded-[60px] py-2.5 px-[30px] leading-[1em] transition-all duration-300 inline-block cursor-pointer no-underline items-center text-[20px]'>
                            View more
                          </a>
                      
                  </ServiceCard> 

                </div>
              </div>

              {/* --- CARD 3 SECTION --- */}
              <div className='col-span-1 row-span-1 w-full'>
                     <div className='flex flex-col gap-[30px]'>
                  
                  <ServiceCard index={2}>
                                <div className='w-full relative'>
                              <Image src="icons/nextthird.svg" 
                                    alt="nextthird" 
                                    width={156} 
                                    height={41} 
                                    className='max-w-full inline-block align-middle border-0'/>
                                <div className='flex flex-col items-start gap-[15px] text-white border-b justify-between w-full my-5 pb-5 text-[25px] leading-[1.2em]'>
                                    <span className='text-white text-[25px] items-center leading-[1.2em]'>IT Consultancy</span>
                                    <div>2023</div>
                                </div>
                                <p className='text-white mb-[30px] mt-2.5 font-normal leading-[1.5em]'>Our IT Consultancy Services are designed to guide and empower your organization in navigating the complex and ever-changing landscape of information technology.</p>
                            </div>
                            <a href="" className='border-white text-white hover:bg-white hover:text-black relative border-2 border-solid text-center tracking-[-0.4px] transform-none bg-[#0000] rounded-[60px] py-2.5 px-[30px] leading-[1em] transition-all duration-300 inline-block cursor-pointer no-underline items-center text-[20px]'>
                              View more
                            </a>
                      
                  </ServiceCard> 

                </div>
              </div>

              {/* --- CARD 4 SECTION --- */}
              <div className='col-span-1 row-span-1 w-full lg:col-span-2'>
                  <div className='flex flex-col gap-[30px] lg:flex-row h-full'>
                        <ServiceCard index={3} baseColor="bg-[#111111]" overlayColor="bg-[#7000ff]">
                                      <div className='w-full relative'>
                                  <Image src="icons/bolt.svg" 
                                          alt="bolt" 
                                          width={145} 
                                          height={41} 
                                          className='max-w-full inline-block border-0 align-middle ' />
                                  <div className='flex flex-col items-start gap-[15px] text-white border-b border-solid border-#fff6 justify-between w-full my-5 pb-5 text-[25px] '>
                                        <span className='text-white text-25 items-center leading-[1.2em]'>Cloud Migration</span>
                                        <div>Present</div>
                                  </div>
                                  <div className='flex gap-[30px]'>
                                        <p className='mt-0 mb-[30px] text-white font-medium leading-[1.5em] md:columns-2'>Our Cloud Migration Services facilitate a seamless transition of your IT infrastructure, applications, and data to cloud environments, enabling you to leverage the benefits of agility, scalability, and cost-efficiency. We ensure a structured and efficient migration process tailored to your organization&apos;s specific needs.</p>
                                  </div>
                              </div>
                              <a href="" className='border-[#ffffff] text-[#ffffff] hover:bg-white hover:text-black relative border-2 border-solid text-center tracking-[-0.4px] transform-none bg-[#0000] rounded-[60px] py-2.5 px-[30px] leading-[1em] transition-all duration-300 inline-block no-underline items-center text-[20px]'>View More</a>
                              
                        </ServiceCard>
                  </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Services