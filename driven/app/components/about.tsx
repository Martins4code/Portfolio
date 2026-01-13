import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Monitor, BookOpen, Film, CheckCircle2 } from 'lucide-react';




export default function AboutPage (){
  return (
    <div className='flex pt-[30px] justify-center items-center pb-0 z-5 bg-[#e8e8e8] relative'>
      


      <div className="flex flex-col flex-1 items-center max-w-[1200px] mx-auto px-[15px] relative">
        
        {/* Hero Section */}
        <div className="flex flex-col gap-y-5 justify-between items-center w-full md:flex-row lg:flex-row">

            <h1 className="opacity-100 text-center w-[50%] tracking-[-3px] uppercase leading-[1.2em] text-[40px] mx-2.5 font-medium md:text-left md:text-[50px] lg:text-[70px] lg:text-left lg:w-[35%] md:w-[37%] lg:leading-[1em] lg:tracking-[-3px] lg:mx-0">
              About <span className="text-[#7000ff]">Marcel Apitty</span>
            </h1>


                    <div className="w-full h-[200px] rounded-[15px] overflow-hidden md:h-[250px] md:w-[65%] lg:h-[350px] lg:w-[60%]">
                      <Image
                        src="/images/profile-pic.webp"
                        alt="banner-image"
                        width={1600}
                        height={800}
                        className="object-cover w-full h-full max-x-full inline-block align-middle border-0"
                      />
                    </div>

        </div>

      </div>

    </div>
  );
}