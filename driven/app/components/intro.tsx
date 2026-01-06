'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Intro = () => {
  const arrowImageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (arrowImageRef.current) {
      gsap.to(arrowImageRef.current, {
        y: 5,
        x: -5,
        duration: 0.4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })
    }
  })

  return (
    <div className='flex flex-col pt-10 min-h-auto z-2 bg-[#e8e8e8]'>
      <div className='flex items-center relative w-full h-full top-0 '>
        <a href="" className="flex flex-col justify-center mr-[15px] mt-10 absolute top-0 right-0 border-4 border-solid border-[#7000ff] rounded-full w-[100px] h-[100px]">
          <div className='w-[100px] h-[100px] p-0.5 flex relative'>
            <div className='w-[100px] h-[100px] rounded-full flex justify-center items-center flex-none'>
              <div ref={arrowImageRef} className="absolute">
                <Image src="icons/arrow.svg" 
                  alt="down" 
                  width={28} 
                  height={40} 
                  className='max-w-full transform rotate-45 scale-100' />
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className='flex flex-col px-[15px] relative items-center max-w-[1200px] mx-auto'>

        <div className='w-[60%] flex items-start mr-[152.802px] flex-wrap'>
            <h1 className='text-[40px] font-medium my-2.5 leading-[1em] tracking-[-2.2px]'>
              CREATIVE<br/>
              <span className='inline-block w-[163px] h-[50px] my-[15px] mr-[15px]'>
                <Image
                  src="icons/UX_UX.svg"
                  alt="ui"
                  width={297}
                  height={93}
                  className='inline-block bg-contain'
                />
              </span>
              DESIGNER
            </h1>
        </div>

        <div className='flex flex-col gap-[50px] w-full mt-10'>
            <div className='flex flex-col text-center items-center gap-[30px] gap-y-[25px]'>
              <div className='w-[250px] h-[300px] rounded-[15px] flex-none overflow-hidden'>
                <Image
                  src="/images/profile-pic.webp"
                  alt="someguy"
                  width={640}
                  height={320}
                  className='inline-block align-middle w-full h-full max-w-full object-cover'
                />
              </div>
              <p className='max-w-[593px] my-0 text-[24px] font-medium leading-[1.2em]'>PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB EXPERIENCES.</p>
            </div>

            <div className='flex flex-col flex-none gap-[30px] gap-y-[30px] text-center items-center w-full mr-0'>
                <div className='flex flex-row gap-5'>

                  <a href="https://www.instagram.com/" className='Socials'>
                    <div className='initials'>in</div>
                    <div className='hoverMode'>Instagram</div>
                  </a>
                  <a href="https://www.facebook.com/" className='Socials'>
                    <div className='initials'>fb</div>
                    <div className='hoverMode'>Facebook</div>
                  </a>
                  <a href="https://twitter.com/" className='Socials'>
                    <div className='initials'>tw</div>
                    <div className='hoverMode'>Twitter</div>
                  </a>
                </div>
                <div className='tracking-[-2.2px] uppercase leading-[1em] text-[40px] '>Marcel Apitty</div>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Intro
