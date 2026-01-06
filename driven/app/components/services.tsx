"use client";
import React, { useState, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ children, baseColor = "bg-[#7000ff]", overlayColor = "bg-black", isActive, onClick }: { children: React.ReactNode, baseColor?: string, overlayColor?: string, isActive: boolean, onClick: () => void }) => {
  return (
    <div onClick={onClick} className={`service-card cursor-pointer flex flex-col opacity-100 w-full ${baseColor} rounded-[15px] justify-between items-start p-[30px] relative overflow-hidden`}>
      <div className={`${overlayColor} w-auto absolute inset-x-0 bottom-0 top-auto transition-all duration-700 ease-in-out ${isActive ? 'h-full' : 'h-0'}`}></div>
      {children}
    </div>
  );
};

const services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card");
      cards.forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
          x: 200,
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className='container pb-0 pt-[60px] z-5 bg-[#e8e8e8] relative'>
        <div className='flex flex-col items-center max-w-[1200px] mx-auto px-[15px] relative'>
            <div className='grid grid-cols-1 gap-[30px] auto-cols-fr w-full '>
              
              {/* --- HEADER SECTION --- */}
              <div className='flex flex-col w-full col-span-1 row-span-1 opacity-100 gap-[30px] items-center mb-[30px] gap-y-[50px]'>
                <div className='uppercase max-w-[850px] my-0 text-[20px] font-medium'>
                  What We Do
                </div>
                <a href="" className='border-solid border-2 text-[#7000ff] text-center tracking-[-0.4px] transform-none bg-[#0000] rounded-[60px] py-2.5 px-[30px] leading-[1em]  transition-all duration-300 inline-block cursor-pointer no-underline items-center text-[20px]'>
                  Services
                  </a>
              </div>

              {/* --- CARDS COLUMN --- */}
              <div className='col-span-1 row-span-1 w-full'>
                <div className='flex flex-col gap-[30px]'>
                  
                  {/* --- CARD 1 --- */}
                  <ServiceCard isActive={activeIndex === 0} onClick={() => handleCardClick(0)}>
                      <div className='z-1 w-full relative'>
                        <Image src="icons/globank.svg" 
                              alt="down" 
                              width={168} 
                              height={41} 
                              className='max-w-full inline-block align-middle border-0'/>
                          <div className='flex flex-col items-start gap-[15px] text-white border-b justify-between w-full my-5 pb-5 text-[25px] leading-[1.2em]'>
                              <a href="" className='text-white text-[25px] items-center leading-[1.2em] no-underline transition-colors duration-300 bg-[#0000]'>Cyber Security</a>
                              <div>2023</div>
                          </div>
                          <p className='text-white mb-[30px] mt-2.5 font-normal leading-[1.5em]'>Our comprehensive Cyber Security Services ensure the protection and resilience of your digital assets and operations. We employ cutting-edge technologies and expert strategies to safeguard your organization against evolving cyber threats.</p>
                      </div>
                      <a href="" className='z-2 border-white text-white relative border-2 border-solid text-center tracking-[-0.4px] transform-none bg-[#0000] rounded-[60px] py-2.5 px-[30px] leading-[1em]  transition-all duration-300 inline-block cursor-pointer no-underline items-center text-[20px]'>
                        View more
                      </a>
                  </ServiceCard> 
                  {/* Correct closing for Card 1 */}

                {/* --- CARD 1 --- */}
                  <ServiceCard isActive={activeIndex === 1} onClick={() => handleCardClick(1)}>
                      <div className='z-1 w-full relative'>
                        <Image src="icons/nextlogo.svg" 
                              alt="down" 
                              width={142} 
                              height={41} 
                              className='max-w-full inline-block align-middle border-0'/>
                          <div className='flex flex-col items-start gap-[15px] text-white border-b justify-between w-full my-5 pb-5 text-[25px] leading-[1.2em]'>
                              <a href="" className='text-white text-[25px] items-center leading-[1.2em] no-underline transition-colors duration-300 bg-[#0000]'>Cyber Security</a>
                              <div>2023</div>
                          </div>
                          <p className='text-white mb-[30px] mt-2.5 font-normal leading-[1.5em]'>
Logo Services
App Development
2023
Our App Development Services encompass the entire spectrum of building innovative and functional applications tailored to meet your unique business needs.</p>
                      </div>
                      <a href="" className='z-2 border-white text-white relative border-2 border-solid text-center tracking-[-0.4px] transform-none bg-[#0000] rounded-[60px] py-2.5 px-[30px] leading-[1em]  transition-all duration-300 inline-block cursor-pointer no-underline items-center text-[20px]'>
                        View more
                      </a>
                  </ServiceCard> 
                  {/* Correct closing for Card 1 */}

                </div>
              </div>

              {/* Empty Grid Cells (If needed) */}
              <div className='col-span-1 row-span-1 w-full'>
                     <div className='flex flex-col gap-[30px]'>
                  
                  {/* --- CARD 3 --- */}
                  <ServiceCard isActive={activeIndex === 2} onClick={() => handleCardClick(2)}>
                      <div className='z-1 w-full relative'>
                        <Image src="icons/nextthird.svg" 
                              alt="down" 
                              width={156} 
                              height={41} 
                              className='max-w-full inline-block align-middle border-0'/>
                          <div className='flex flex-col items-start gap-[15px] text-white border-b justify-between w-full my-5 pb-5 text-[25px] leading-[1.2em]'>
                              <a href="" className='text-white text-[25px] items-center leading-[1.2em] no-underline transition-colors duration-300 bg-[#0000]'>IT Consultancy</a>
                              <div>2023</div>
                          </div>
                          <p className='text-white mb-[30px] mt-2.5 font-normal leading-[1.5em]'>Our IT Consultancy Services are designed to guide and empower your organization in navigating the complex and ever-changing landscape of information technology.</p>
                      </div>
                      <a href="" className='z-2 border-white text-white relative border-2 border-solid text-center tracking-[-0.4px] transform-none bg-[#0000] rounded-[60px] py-2.5 px-[30px] leading-[1em]  transition-all duration-300 inline-block cursor-pointer no-underline items-center text-[20px]'>
                        View more
                      </a>
                  </ServiceCard> 
                  {/* Correct closing for Card 3 */}
                </div>
              </div>
              <div className='col-span-1 row-span-1 w-full'>
                  <div className='flex flex-col gap-[30px]'>
                        <ServiceCard baseColor="bg-black" overlayColor="bg-[#7000ff]" isActive={activeIndex === 3} onClick={() => handleCardClick(3)}>
                              <div className='z-1 w-full relative'>
                                  <Image src="icons/bolt.svg" 
                                          alt="down" 
                                          width={145} 
                                          height={41} 
                                          className='max-w-full inline-block border-0 align-middle ' />
                                  <div className='flex flex-col items-start gap-[15px] text-white border-b border-solid border-#fff6 justify-between w-full my-5 pb-5 text-[25px] '>
                                        <a href="" className='text-white text-25 items-center leading-[1.2em] no-underline transition-colors duration-300 bg-[#0000]'>Cloud Migration</a>
                                        <div>Present</div>
                                  </div>
                                  <div className='flex gap-[30px]'>
                                        <p className='mt-0 mb-[30px] text-white font-medium leading-[1.5em] lg:columns-2'>Our Cloud Migration Services facilitate a seamless transition of your IT infrastructure, applications, and data to cloud environments, enabling you to leverage the benefits of agility, scalability, and cost-efficiency. We ensure a structured and efficient migration process tailored to your organization's specific needs.</p>
                                  </div>
                              </div>
                              <a href="" className='z-2 border-[#ffffff] text-[#ffffff] relative border-2 border-solid text-center tracking-[-0.4px] transform-none bg-[#0000] rounded-[60px] py-2.5 px-[30px] leading-[1em] transition-all duration-300 inline-block no-underline items-center text-[20px] '>View More</a>
                        </ServiceCard>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default services