"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [demosOpen, setDemosOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const pagesList = ["Home", "About"];

  return (
    <header className="w-full relative font-sans pb-[15px]">
      {/* --- DESKTOP NAVIGATION --- */}
      <div className="hidden lg:flex w-full items-center justify-between px-[15px] py-[15px] relative z-50 bg-[#e8e8e8]">
        <div>
          <a href="/" className="hover:text-violet-600 transition-colors">
            <Image
              src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/652e90c1db8e2313f6775069_Union.svg"
              width={167}
              height={24}
              alt="Marcel Apitty"
            />
          </a>
        </div>

        <div className="flex items-center gap-[5rem]">
          <p className="text-black whitespace-nowrap">
            Currently UI/UX Designer at{" "}
            <span className="text-violet-600 font-medium italic">Spike</span>
          </p>
          <p className="text-[20px] text-black whitespace-nowrap">Warsaw, Poland</p>
        </div>

        <nav className="flex items-center gap-6 2xl:gap-8 shrink-0">
          <a href="#demos" className="text-xl text-black hover:text-violet-600 transition-colors">Demos</a>
          <a href="work" className="text-xl text-black hover:text-violet-600 transition-colors">Works</a>
          <a href="/about" className="text-xl text-black hover:text-violet-600 transition-colors">About</a>
          <a href="contact" className="text-xl text-black hover:text-violet-600 transition-colors">Let Us Talk</a>
        </nav>
      </div>

      {/* --- MOBILE NAVIGATION --- */}
      <div className="flex lg:hidden justify-between items-center w-full pt-5 px-[15px] bg-[#e8e8e8]">
        <a href="/">
          <Image 
            src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/652e90c1db8e2313f6775069_Union.svg" 
            width={167} 
            height={24} 
            alt="Marcel Apitty" 
          />
        </a>
        
        {/* HAMBURGER BUTTON - FIXED: Changed z-[80] to z-[50] so it sits behind the menu */}
        <button onClick={toggleMenu} className="relative z-[50] p-2">
          <Image 
            src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/6516d855f0fd3371a7761050_menu-btn.svg" 
            alt="hamburger-menu"
            width={27}
            height={16}
          />
        </button>

        {/* --- MOBILE SIDE MENU PANEL --- */}
        <div 
          className={`fixed top-0 left-0 h-screen w-full max-w-[370px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          // FIXED: Removed inline style width to allow Tailwind responsive width above
        >
          <div className="flex flex-col min-h-full pt-8 px-[30px] pb-12">
            {/* Sidebar Logo and Close Button */}
            <div className="flex justify-between items-center mb-12">
              <Image 
                src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/652e90c1db8e2313f6775069_Union.svg" 
                width={167} 
                height={24} 
                alt="Marcel Apitty" 
              />
              <button onClick={toggleMenu} className="p-2">
                <Image 
                  src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/6516d855f0fd3371a7761051_close-btn.svg" 
                  alt="close-menu"
                  width={17}
                  height={16}
                />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-8 text-[24px] text-black mb-16">
              <div className="flex flex-col">
                <button 
                  onClick={() => setDemosOpen(!demosOpen)}
                  className="flex justify-between items-center w-full hover:text-violet-600 transition-colors text-left font-medium"
                >
                  <span className="text-[18px]">Demos</span>
                  <span className={`transition-transform duration-300 ${demosOpen ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${demosOpen ? 'max-h-[300px] mt-4' : 'max-h-0'}`}>
                  <div className="flex flex-col gap-4 ml-4 text-[18px] text-black">
                    <a href="#" className="hover:text-violet-600 transition-colors">Home 1</a>
                    <a href="#" className="hover:text-violet-600 transition-colors">Home 2</a>
                    <a href="#" className="hover:text-violet-600 transition-colors">Home 3</a>
                    <a href="#" className="hover:text-violet-600 transition-colors">Home 4</a>
                    <a href="#" className="hover:text-violet-600 transition-colors">Home 5</a>
                  </div>
                </div>
              </div>

              <a href="#work" className="hover:text-violet-600 transition-colors text-[18px] text-black">Work</a>
              
              <div className="flex flex-col">
                <button 
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className="flex justify-between items-center w-full hover:text-violet-600 transition-colors text-left font-medium"
                >
                  <span className="text-[18px]">Pages</span>
                  <span className={`transition-transform duration-300 ${pagesOpen ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${pagesOpen ? 'max-h-[1200px] mt-4' : 'max-h-0'}`}>
                  <div className="flex flex-col gap-4 ml-4 text-[18px] text-black 0 pl-4">
                    {pagesList.map((page, index) => (
                      <a key={index} href="#" className="hover:text-violet-600 transition-colors">{page}</a>
                    ))}
                  </div>
                </div>
              </div>
              
              <a href="#contact" className="hover:text-violet-600 transition-colors text-[18px] text-black">Let Us Talk</a>
            </nav>

            {/* Footer Section */}
            <div className="mt-auto space-y-4 pt-7">
              <div className="text-[20px] font-medium text-black whitespace-nowrap">
                Warsaw, Poland
              </div>
              <div className="text-[18px] text-black whitespace-nowrap">
                Currently UI/UX Designer at{" "}
                <a href="#" className="text-violet-600 text-[18px] hover:underline">Spike</a>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/40 z-[65]" onClick={toggleMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;