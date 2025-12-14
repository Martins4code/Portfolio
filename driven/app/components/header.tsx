import Image from "next/image"
import React from 'react'

const Header = () => {
  return (
    
    <header className="w-full overflow-x-hidden">
      
     
      <div className="hidden xl:flex justify-between items-center px-6 py-5 whitespace-nowrap w-full">
        
        {/* Left: Name */}
        <div className="flex items-center shrink-0">
          <h3 className="text-xl 2xl:text-2xl font-semibold">MARCEL APITTY</h3>
        </div>

     
        <div className="flex items-center gap-8 2xl:gap-16">
          <p className="font-semibold text-xl 2xl:text-2xl">
            Currently UI/UX Designer at <span className="text-violet-600">Spike</span>
          </p>
          <p className="text-xl 2xl:text-2xl font-semibold">
            Warsaw, Poland
          </p>
        </div>

        
        <nav className="flex items-center gap-6 2xl:gap-8 shrink-0">
          <a 
            className="text-xl 2xl:text-2xl font-semibold hover:text-violet-600 transition-colors duration-300" 
            href="#demos"
          >
            Demos
          </a>
          <a 
            className="text-xl 2xl:text-2xl font-semibold hover:text-violet-600 transition-colors duration-300" 
            href="#work"
          >
            Work
          </a>
          <a 
            className="text-xl 2xl:text-2xl font-semibold hover:text-violet-600 transition-colors duration-300" 
            href="#pages"
          >
            Pages
          </a>
          <a 
            className="text-xl 2xl:text-2xl font-semibold px-1 hover:text-violet-600 transition-colors duration-300" 
            href="#contact"
          >
            Let Us Talk
          </a>
        </nav>
      </div>

     
      <div className="flex xl:hidden justify-between items-center px-4 py-4 w-full">
        <p className="text-2xl font-semibold">MARCEL APITTY</p>

        <Image
          src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/6516d855f0fd3371a7761050_menu-btn.svg"
          alt="hamburger-menu"
          height={40}
          width={40}
        />
      </div>
    </header>
  )
}

export default Header