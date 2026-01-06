'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
  const arrowImageRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const profileImgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const socialsRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)

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

    const elements = [titleRef.current, profileImgRef.current, textRef.current, socialsRef.current, nameRef.current]

    if (containerRef.current) {
      gsap.from(elements, {
        y: 200,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      })
    }
  })

  return (
    <div className='flex flex-col pt-10 min-h-auto z-2 bg-[#e8e8e8] lg'>
      <div className='flex items-center relative w-full h-full top-0 '>
        <a href="" className="flex flex-col justify-center mr-[15px] mt-10 absolute top-0 right-0 border-4 border-solid border-[#7000ff] rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px] md:mt-0">
          <div className='w-[100px] h-[100px] md:w-[140px] md:h-[140px] p-0.5 flex relative'>
            <div className='w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full flex justify-center items-center flex-none'>
              <div ref={arrowImageRef} className="absolute">
                <Image src="icons/arrow.svg" 
                  alt="down" 
                  width={28} 
                  height={40} 
                  className='max-w-full transform rotate-45 scale-100 md:w-[42px] md:h-[60px]' />
              </div>
            </div>
          </div>
        </a>
      </div>
      <div ref={containerRef} className='flex flex-col px-[15px] relative items-center max-w-[1200px] mx-auto md:mx-0'>

        <div className='flex w-[60%] items-start mr-auto flex-wrap md:w-[419.409px] md:h-[146px]'>
            <h1 ref={titleRef} className='text-[40px] font-medium my-2.5 leading-[1em] tracking-[-2.2px] md:w-full md:h-full md:text-[50px]'>
              CREATIVE<br/>
              <span className='inline-block w-[163px] h-[50px] my-[15px] mr-[15px] md:mt-5 md:mr-[30px]'>
                <Image
                  src="icons/UX_UX.svg"
                  alt="ui"
                  width={297}
                  height={93}
                  className='inline-block w-full h-full'
                />
              </span>
              DESIGNER
            </h1>
        </div>

        <div className='flex flex-col gap-[50px] w-full mt-10 items-end'>
            <div className='flex flex-col text-center items-center gap-[30px] gap-y-[25px] md:flex-row md:text-start md:items-end'>
              <div ref={profileImgRef} className='w-[250px] h-[300px] rounded-[15px] flex-none overflow-hidden'>
                <Image
                  src="/images/profile-pic.webp"
                  alt="someguy"
                  width={640}
                  height={320}
                  className='inline-block align-middle w-full h-full max-w-full object-cover'
                />
              </div>
              <div className='max-w-[593px]'>
                <p ref={textRef} className='my-0 text-[24px] font-medium leading-[1.2em]'>PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB EXPERIENCES.</p>
              </div>
            </div>

            <div className='flex flex-col flex-none gap-[30px] text-center items-center w-full mr-0 md:text-start md:items-start md:w-[40%] md:mr-auto'>
                  <div ref={socialsRef} className='flex flex-row gap-5'>
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
                  <div ref={nameRef} className='tracking-[-2.2px] uppercase leading-[1em] text-[40px] md:text-[50px]'>Marcel Apitty</div>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Intro
