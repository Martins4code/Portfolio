"use client";

import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full overflow-x-hidden relative">
      {/* --- DESKTOP NAVIGATION --- */}
      <div className="hidden xl:flex justify-between items-center px-6 py-5 whitespace-nowrap w-full">
        <div className="flex items-center shrink-0">
          {/* Name linked to Home */}
          <a href="/" className="">
            <h3 className="text-xl 2xl:text-2xl font-semibold">MARCEL APITTY</h3>
          </a>
        </div>

        <div className="flex items-center gap-8 2xl:gap-16">
          <p className="text-xl 2xl:text-2xl font-semibold">Warsaw, Poland</p>
          <p className="font-semibold text-xl 2xl:text-2xl">
            Currently UI/UX Designer at <span className="text-violet-600">Spike</span>
          </p>
        </div>

        <nav className="flex items-center gap-6 2xl:gap-8 shrink-0">
          <a href="#work" className="text-xl 2xl:text-2xl font-semibold hover:text-violet-600 transition-colors">Works</a>
          <a href="#about" className="text-xl 2xl:text-2xl font-semibold hover:text-violet-600 transition-colors">About</a>
          <a href="#contact" className="text-xl 2xl:text-2xl font-semibold px-1 hover:text-violet-600 transition-colors">Let us talk</a>
        </nav>
      </div>

      {/* --- MOBILE NAVIGATION --- */}
      <div className="flex xl:hidden justify-between items-center px-4 py-4 w-full">
        {/* Name linked to Home */}
        <a href="/" className="">
          <p className="text-2xl font-semibold">MARCEL APITTY</p>
        </a>

        <button onClick={toggleMenu} className="z-[60]">
          <Image
            src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/6516d855f0fd3371a7761050_menu-btn.svg"
            alt="hamburger-menu"
            height={40}
            width={40}
          />
        </button>

        {/* --- SIDE MENU OVERLAY --- */}
        {isOpen && (
          <div 
            className="fixed"
            onClick={toggleMenu}
          />
        )}

        {/* --- SIDE MENU PANEL --- */}
        <div className={`fixed top-0 left-0 h-screen w-[350px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col pt-4 px-6 pb-6 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          
          {/* Header inside Side Menu: Name (Linked) + Custom X Image */}
          <div className="flex justify-between items-center mb-6">
            <a href="/" onClick={toggleMenu} className="hover:text-violet-600 transition-colors duration-300">
              <h3 className="text-xl font-bold">MARCEL APITTY</h3>
            </a>
            <button onClick={toggleMenu} className="hover:opacity-70 transition-opacity">
              <Image 
                src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/6516d855f0fd3371a7761051_close-btn.svg" 
                alt="close-menu"
                width={17}
                height={16}
              />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 mb-12">
            <a href="#work" onClick={toggleMenu} className="text-xl font-semibold hover:text-violet-600">Works</a>
            <a href="#about" onClick={toggleMenu} className="text-xl font-semibold hover:text-violet-600">About</a>
            <a href="#contact" onClick={toggleMenu} className="text-xl font-semibold hover:text-violet-600">Let us talk</a>
          </nav>

          {/* Location and Role */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-lg font-semibold">Warsaw, Poland</p>
            </div>
            <div>
              <p className="text-lg font-semibold">
                Currently UI/UX Designer at <span className="text-violet-600">Spike</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;