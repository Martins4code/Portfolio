import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Monitor, BookOpen, Film, CheckCircle2 } from 'lucide-react';




export default function AboutPage (){
  return (
    <div className='container p-3 lg:ml bg-gray-200'>
      


      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-32">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-4">
            <h1 className=" text-[40px] lg:text-[70px] md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
              About <br /> <span className="text-violet-600">Marcel Apitty</span>
            </h1>
          </div>

           <div className="w-full w-[382px] h-[200px] lg:w-[702px] h-[350px] relative shrink-0">
                      <Image
                        src="/images/profile-pic.webp"
                        alt="banner-image"
                        width={500}
                        height={700}
                        className="w-full h-full object-cover rounded-xl border-2 border-gray-300"
                      />
                    </div>

        </section>

      </main>

    </div>
  );
}