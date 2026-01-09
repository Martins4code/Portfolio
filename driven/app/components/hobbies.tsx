import React from 'react'
import { ArrowUpRight, Monitor, BookOpen, Film, CheckCircle2 } from 'lucide-react';


const hobbies = [
  {
    title: "PLAY VIDEO GAMES",
    tags: ["Call of Duty", "FIFA", "VALORANT", "CS:GO"],
    image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=1000&auto=format&fit=crop", // Xbox Controller
    alt: "Hands holding white Xbox controller"
  },
  {
    title: "READ BOOKS",
    tags: ["Harry Potter", "Stephen King"],
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop", // Stack of books
    alt: "Stack of books on a shelf"
  },
  {
    title: "WATCH MOVIES",
    tags: ["1+1", "Avatar", "Never give up", "300 Spartans"],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop", // Netflix screen
    alt: "Netflix screen showing movies"
  }
];

export default function HobbiesList() {
  return (
    <div className="pb-0 pt-[60px] z-5 bg-[#e8e8e8] relative block">
      <div className="flex flex-col items-center max-w-[1200px] px-[15px] relative opacity-100 bg-[#111] rounded-[15px] mx-[15px] py-[50px]">
        <div className='w-full'>
                    {/* Section Label */}
                    <div className='w-full max-w-[350px]'>
                          <div className="opacity-100 text-white">
                            My Hobbies
                          </div>
                    </div>
                  

                  {/* Hobbies List */}
      
                    {hobbies.map((hobby, index) => (
                      <div key={index} className="flex flex-col gap-y-20 w-full mt-[50px]">

                        <div className='flex flex-col gap-[50px] justify-between opacity-100 '>

                                              {/* Left Side: Text Content */}
                                    <div className="gap-y-[30px] flex flex-col">
                                            <div className="text-[40px] text-[#ffffff] tracking-[-1.6] uppercase leading-[1em]">
                                              {hobby.title}
                                            </div>
                                            
                                            {/* Purple Pills */}
                                            <div className="flex gap-2.5 flex-wrap">
                                              {hobby.tags.map((tag, tagIndex) => (
                                                <div 
                                                  key={tagIndex} 
                                                  className="bg-[#7000ff] text-[#ffffff] rounded-[60px] py-2.5 px-[30px] leading-[1em]"
                                                >
                                                  {tag}
                                                </div>
                                              ))}
                                            </div>
                                    </div>

                                    {/* Right Side: Image */}
                                    <div className="w-full rounded-[15px] flex-none h-[360px] overflow-hidden">
                                      <img 
                                        src={hobby.image} 
                                        alt={hobby.alt}
                                        className="object-cover w-full h-full max-w-100% inline-block align-middle border-0"/>
                                    </div>

                        </div>
                        
                       
                      </div>
                    ))}
                  </div>

      </div>
    </div>
  );
}