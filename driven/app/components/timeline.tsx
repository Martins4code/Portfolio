"use client"
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Timeline = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const scale1Ref = useRef(null);
  const scale2Ref = useRef(null);
  const scale3Ref = useRef(null);
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);

  useGSAP(() => {
    gsap.set([scale1Ref.current, scale2Ref.current, scale3Ref.current], { scale: 0 });
    const tl = gsap.timeline({ repeat: -1 });
    // For lg screens, you can modify the width values here, e.g., extend to 80px instead of 60px, and adjust scaleNow sizes accordingly
    tl.to(line1Ref.current, { width: '60px', duration: 1, ease: 'power2.inOut' })
      .to(scale1Ref.current, { scale: 1, duration: 1, ease: 'power2.inOut' }, '<')
      .to(num1Ref.current, { color: '#ffffff' }, '<')
      .to(line1Ref.current, { width: '30px', duration: 1, ease: 'power2.inOut' })
      .to(scale1Ref.current, { scale: 0, duration: 1, ease: 'power2.inOut' }, '<')
      .to(num1Ref.current, { color: '#7000ff' }, '<')
      .to(line2Ref.current, { width: '60px', duration: 1, ease: 'power2.inOut' })
      .to(scale2Ref.current, { scale: 1, duration: 1, ease: 'power2.inOut' }, '<')
      .to(num2Ref.current, { color: '#ffffff' }, '<')
      .to(line2Ref.current, { width: '30px', duration: 1, ease: 'power2.inOut' })
      .to(scale2Ref.current, { scale: 0, duration: 1, ease: 'power2.inOut' }, '<')
      .to(num2Ref.current, { color: '#7000ff' }, '<')
      .to(line3Ref.current, { width: '60px', duration: 1, ease: 'power2.inOut' })
      .to(scale3Ref.current, { scale: 1, duration: 1, ease: 'power2.inOut' }, '<')
      .to(num3Ref.current, { color: '#ffffff' }, '<')
      .to(line3Ref.current, { width: '30px', duration: 1, ease: 'power2.inOut' })
      .to(scale3Ref.current, { scale: 0, duration: 1, ease: 'power2.inOut' }, '<')
      .to(num3Ref.current, { color: '#7000ff' }, '<');
  });
  return (
    <div className='pb-0 pt-[60px] bg-[#e8e8e8] relative z-index-5'>
        <div className='flex flex-col items-center max-w-[1200px] mx-auto px-[15px] relative'>
           <div className='flex flex-col justify-center w-full'>

              <div className='flex items-center w-full min-h-[100px]'>
                <div className='flex w-[60px] h-[60px] text-[20px] border-[#7000ff] border-3 border-solid rounded-full text-[#7000ff] flex-none justify-center items-center leading-[1em] relative overflow-hidden'>
                  <div ref={scale1Ref} className='scaleNow w-[60px] h-[60px] bg-[#7000ff] rounded-full absolute text-[20px] z-index-0'></div>
                  <div ref={num1Ref} className='NumTransition text-[#7000ff] z-index-2 relative text-[20px]'>1</div>
                </div>
                <div className='flex items-center '>
                  <div ref={line1Ref} className='myLine flex w-[30px] h-px bg-[#7000ff] opacity-[0.4]'></div>
                  <div className='flex bg-[#7000ff33] rounded-full justify-center items-center w-[30px] h-[30px]'>
                      <div className='bg-[#7000ff] rounded-full w-2.5 h-2.5 absolute'></div>
                  </div>
                </div>
                <div className='ml-5 max-w-[465px] text-[60px] leading-[1em]'>
                  <h2 className='my-2.5 text-[30px] text-[#111] tracking-[-1.6px] font-medium leading-[1em]'>I’m a pixel<span className="block sm:hidden"></span> perfectionist</h2>
                </div>
              </div>

              <div className='h-[100px] ml-[25px] border border-dashed border-[#7000ff66] w-px'></div>

              <div className='flex items-center w-full min-h-[100px]'>
                <div className='flex w-[60px] h-[60px] text-[20px] border-[#7000ff] border-3 border-solid rounded-full text-[#7000ff] flex-none justify-center items-center leading-[1em] relative overflow-hidden'>
                  <div ref={scale2Ref} className='scaleNow w-[60px] h-[60px] bg-[#7000ff] rounded-full absolute text-[20px] z-index-0'></div>
                  <div ref={num2Ref} className='NumTransition text-[#7000ff] z-index-2 relative text-[20px]'>2</div>
                </div>
                <div className='flex items-center '>
                  <div ref={line2Ref} className='myLine flex w-[30px] h-px bg-[#7000ff] opacity-[0.4]'></div>
                  <div className='flex bg-[#7000ff33] rounded-full justify-center items-center w-[30px] h-[30px]'>
                        <div className='bg-[#7000ff] rounded-full w-2.5 h-2.5 absolute'></div>
                  </div>
                </div>
                <div className='ml-5 max-w-[465px] text-[60px] leading-[1em]'>
                  <h2 className='my-2.5 text-[30px] text-[#111] tracking-[-1.6px] font-medium leading-[1em]'>Working with 2D,<span className="block sm:hidden"></span>3D, 4D</h2>
                </div>
              </div>

              <div className='h-[100px] ml-[25px] border border-dashed border-[#7000ff66] w-px'></div>

              <div className='flex items-center w-full min-h-[100px]'>
                <div className='flex w-[60px] h-[60px] text-[20px] border-[#7000ff] border-3 border-solid rounded-full text-[#7000ff] flex-none justify-center items-center leading-[1em] relative overflow-hidden'>
                  <div ref={scale3Ref} className='scaleNow w-[60px] h-[60px] bg-[#7000ff] rounded-full absolute text-[20px] z-index-0'></div>
                  <div ref={num3Ref} className='NumTransition text-[#7000ff] z-index-2 relative text-[20px]'>3</div>
                </div>
                <div className='flex items-center '>
                  <div ref={line3Ref} className='myLine flex w-[30px] h-px bg-[#7000ff] opacity-[0.4]'></div>
                  <div className='flex bg-[#7000ff33] rounded-full justify-center items-center w-[30px] h-[30px]'>
                        <div className='bg-[#7000ff] rounded-full w-2.5 h-2.5 absolute'></div>
                  </div>
                </div>
                <div className='ml-5 max-w-[465px] text-[60px] leading-[1em]'>
                  <h2 className='my-2.5 text-[30px] text-[#111] tracking-[-1.6px] font-medium leading-[1em]'>I love make things interactive</h2>
                </div>
              </div>

           </div>
        </div>
    </div>
  )
}

export default Timeline