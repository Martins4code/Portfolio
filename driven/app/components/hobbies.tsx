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
    <section className="bg-[#050505] min-h-screen text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Label */}
        <h2 className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-widest mb-16 md:mb-24">
          My Hobbies
        </h2>

        {/* Hobbies List */}
        <div className="space-y-24 md:space-y-32">
          {hobbies.map((hobby, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20 group">
              
              {/* Left Side: Text Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-4xl md:text-6xl font-normal tracking-tight uppercase">
                  {hobby.title}
                </h3>
                
                {/* Purple Pills */}
                <div className="flex flex-wrap gap-3">
                  {hobby.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-5 py-2 bg-[#6b21a8] text-white text-xs md:text-sm font-medium rounded-full hover:bg-[#7e22ce] transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="w-full md:w-[500px] aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl bg-zinc-900 relative">
                <img 
                  src={hobby.image} 
                  alt={hobby.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90"/>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}