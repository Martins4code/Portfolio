"use client"
import React from 'react';

const ImageScene = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[60px] z-5 bg-[#e8e8e8] relative">

        {/* Background Image/Video Container */}
        <div className="absolute text-white overflow-hidden h-full w-[97%] max-w-[1200px] rounded-[15px] bg-gradient-to-t from-black to-[#fff0]">
            <video 
                src="" 
                className='bg-[url("https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/6527e3fb94fddffefa48792d_pexels-ekaterina-bolovtsova-6185251 (720p)-poster-00001.jpg")] absolute inset-[-100%] z-[-100] m-auto h-full w-full object-cover bg-cover bg-center'
            >
            </video>
        </div>

        {/* Main Content */}
        <div className='flex flex-1 flex-col items-center mx-auto max-w-[1200px] px-[15px] relative'>
            <div className='flex flex-col items-center mx-auto max-w-[600px] text-center'>
                <h2 className='mb-5 mt-0 text-3xl font-medium leading-[1.1em] tracking-[-1.6px] text-[#ffffff] md:text-[42px]'>
                    Click to learn more about how we can elevate your projects and ideas.
                </h2>

                <address className='flex flex-col justify-center items-center relative'>
                    
                    {/* --- PURPLE BUTTON (Main Trigger) --- */}
                    <div className='relative z-20 flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-full bg-[#7000ff] shadow-[0_32px_32px_#0000001f,0_16px_16px_#0000001f,0_8px_8px_#0000001f,0_4px_4px_#0000001f]'>
                        {/* ICON START */}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="w-8 h-8 text-white" 
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21c2.728 0 5.496-.584 8.019-1.636 2.15-1.014 3.731-3.042 3.731-5.364C23.75 7.923 18.25 4.5 12 4.5c-6.25 0-11.75 3.423-11.75 9.51 0 .227.009.452.027.674a.75.75 0 01-.027-.674z" />
                        </svg>
                        {/* ICON END */}
                    </div>

                    {/* --- ACTION BUTTONS (Hidden Behind) --- */}
                    {/* Note: You need hover/click state logic to make these fan out */}
                    <a href="#" className='absolute z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#7000ffb3] text-[#7000ff] transition-all duration-300 hover:translate-x-[-80px]'>
                        <img src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/6527e117aa94a232d78b0d80_whatsapp.svg" alt="Whatsapp" className='h-6 w-6' />
                    </a>
                    <a href="#" className='absolute z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#7000ffb3] text-[#7000ff] transition-all duration-300 hover:translate-y-[80px]'>
                        <img src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/6527e117aa94a232d78b0d82_mail.svg" alt="Mail" className='h-6 w-6' />
                    </a>
                    <a href="#" className='absolute z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#7000ffb3] text-[#7000ff] transition-all duration-300 hover:translate-x-[80px]'>
                        <img src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/6527e117aa94a232d78b0d81_call.svg" alt="Call" className='h-6 w-6' />
                    </a>

                </address>
            </div>
        </div>
    </div>
  )
}

export default ImageScene