"use client";

import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full relative">
      {/* --- DESKTOP NAVIGATION --- 
         FIX: Added 'lg:flex' to make it visible on large screens.
         Added 'items-center' and 'justify-between' for layout.
         Added 'px-6 py-4' for spacing.
      */}
      <div className="hidden lg:flex w-full items-center justify-between px-[15px] py-4">
        
        {/* Logo Section */}
        <div className="">
          <a href="/" className="hover:text-violet-600 transition-colors mt-5">
            <Image
              src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/652e90c1db8e2313f6775069_Union.svg"
              width={167}
              height={24}
              alt="Marcel Apitty"
              className="text-xl 2xl:text-2xl"
            />
          </a>
        </div>

        {/* Center Info Section (Job & Location) */}
        <div className="flex items-center gap-[5rem]">
          <div className="">
            <p className="text-small py-4">
              Currently UI/UX Designer at{" "}
              <span className="text-violet-600">Spike</span>
            </p>
          </div>
        </div>
            <div>
            <p className="text-[20px]">Warsaw, Poland</p>
          </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 2xl:gap-8 shrink-0">
          <a href="#demos" className="text-xl 2xl:text-2xl hover:text-violet-600 transition-colors">
            Demos
          </a>
          <a href="#work" className="text-xl 2xl:text-2xl hover:text-violet-600 transition-colors">
            Works
          </a>
          <a href="/about" className="text-xl 2xl:text-2xl hover:text-violet-600 transition-colors">
            About
          </a>
          <a href="#contact" className="text-xl 2xl:text-2xl hover:text-violet-600 transition-colors">
            Let Us Talk
          </a>
        </nav>
      </div>

      {/* --- MOBILE NAVIGATION --- 
          Changed 'xl:hidden' to 'lg:hidden' 
      */}
      <div className="flex lg:hidden justify-between items-center w-full pt-5 px-[15px]">

        <div className="menu-name flex justify-between w-full items-center">
          <div>
             <a href="/">
          <Image src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/652e90c1db8e2313f6775069_Union.svg" width={167} height={24} alt="Marcel Apitty" className="w-[167] h-[24]" />
        </a>
          </div>
         
        <div>
          <button onClick={toggleMenu} className="relative z-[60] ">
          <Image
            src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/6516d855f0fd3371a7761050_menu-btn.svg"
            alt="hamburger-menu"
            height={16}
            width={27}
          />
        </button>
        </div>
        

        </div>
        

        {/* --- MOBILE SIDE MENU PANEL --- */}
        <div 
          className={`fixed top-0 left-0 h-screen w-[320px] bg-[#FFFFFF] z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col pt-6 px-[15px] pb-6 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <a href="/" onClick={toggleMenu}>
              <a href="/" className="hover:text-violet-600 transition-colors">
            <Image
              src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/652e90c1db8e2313f6775069_Union.svg"
              width={167}
              height={24}
              alt="Marcel Apitty"
              className="text-xl 2xl:text-2xl"
            />
          </a>
            </a>
            <button onClick={toggleMenu}>
              <Image 
                src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/6516d855f0fd3371a7761051_close-btn.svg" 
                alt="close-menu"
                width={17}
                height={16}
              />
            </button>
            </div>
          </div>
          

          

        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/40 z-[65]"
            onClick={toggleMenu}
          />
        )}
      </div>
    </header>
  );
};

export default Header;