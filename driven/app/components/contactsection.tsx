import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="pb-0 pt-[60px] z-5 bg-[#e8e8e8] relative">
      <div className="flex flex-col items-center max-w-[1200px] mx-auto px-[15px] relative">

        {/* 3rd container - Main Wrapper */}
        {/* FIX: Added lg:flex-row, lg:items-start, lg:flex-nowrap */}
        <div className='flex flex-col flex-wrap gap-y-[50px] gap-x-20 items-center w-full lg:flex-row lg:items-start lg:flex-nowrap'>

          {/* SECTION 1: Text & Contact Info (The Upper/Left Part) */}
          {/* FIX: Added lg:flex-1 to share width */}
          {/* FIX: Added lg:flex-col so the internal content stacks vertically on large screens */}
          <div className="flex flex-col opacity-100 gap-[30px] w-full md:flex-row lg:flex-col md:pt-20 lg:flex-1">
            <div className="flex flex-col w-full mb-0 gap-y-2.5">
              <h3 className="text-[32px] text-[#111] my-2.5 font-medium leading-[1.2em]">
                We appreciate your interest and look forward to connecting with you.
              </h3>
              <p className="my-2.5 font-normal leading-[1.5em]">
                If you prefer, you can use the contact form below to send us a message. Simply fill in your details, type your message, and hit the "Submit" button. We'll get back to you as soon as possible.
              </p>
            </div>

            <div className="flex flex-col gap-y-[15px]">
              {/* Address */}
              <div className="flex items-center gap-x-5">
                <p className="flex font-medium leading-[1.5em] border-2 border-solid border-[#7000ff] text-[#111] rounded-[50px] flex-none justify-center items-center w-[50px] h-[50px] my-0 text-[18px]">
                  <MapPin size={20} fill="black" className="text-black" />
                </p>
                <a href="#" className="text-[#111] items-center text-[20px] leading-[1.2em] no-underline bg-[#0000] transition-colors duration-300 hover:text-[#7000ff]">14 Tottenham Road, London, England</a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-x-5">
                <p className="flex font-medium leading-[1.5em] border-2 border-solid border-[#7000ff] text-[#111] rounded-[50px] flex-none justify-center items-center w-[50px] h-[50px] my-0 text-[18px]">
                  <Phone size={20} fill="black" className="text-black" />
                </p>
                <a href='' className="text-[#111] items-center text-[20px] leading-[1.2em] no-underline bg-[#0000] transition-colors duration-300 hover:text-[#7000ff]">+1 212 425 8617</a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-x-5">
                <p className="flex font-medium leading-[1.5em] border-2 border-solid border-[#7000ff] text-[#111] rounded-[50px] flex-none justify-center items-center w-[50px] h-[50px] my-0 text-[18px]">
                  <Mail size={20} fill="black" className="text-black" />
                </p>
                <a href='' className="text-[#111] items-center text-[20px] leading-[1.2em] no-underline bg-[#0000] transition-colors duration-300 hover:text-[#7000ff]">information@office.com</a>
              </div>
            </div>
          </div>

          {/* SECTION 2: The Form (The Lower/Right Part) */}
          {/* FIX: Added lg:flex-1 to share width */}
          <div className="w-full px-[15px] bg-[#ffffff] rounded-[15px] flex-none py-[25px] lg:flex-1">

            <div className='w-full my-0 mx-0 '>
              <form className="flex flex-col items-stretch w-full h-full">

                <div className='flex flex-col gap-x-2.5 md:flex-row'>
                  <div className='w-full'>

                    {/* Name Input */}
                    <label htmlFor="name" className="text-[18px] mb-2.5 block font-bold">
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="border border-solid border-[#ffffff] text-[#11111180] bg-[#e8e8e866] rounded-[15px] h-auto min-h-[50px] mb-5 py-2.5 px-5 text-[18px] leading-[1em] transition-all duration-200 align-middle w-full block m-0"
                      defaultValue=""
                    />


                    {/* Email Input */}
                    <label htmlFor="email" className="text-[18px] mb-2.5 block font-bold">
                      Mail
                    </label>

                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      className="border border-solid border-[#ffffff] text-[#11111180] bg-[#e8e8e866] rounded-[15px] h-auto min-h-[50px] mb-5 py-2.5 px-5 text-[18px] leading-[1em] transition-all duration-200 align-middle w-full block m-0"
                    />


                    {/* Phone Input */}
                    <label htmlFor="phone" className="text-[18px] mb-2.5 block font-bold">
                      Phone
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your phone"
                      className="border border-solid border-[#ffffff] text-[#11111180] bg-[#e8e8e866] rounded-[15px] h-auto min-h-[50px] mb-5 py-2.5 px-5 text-[18px] leading-[1em] transition-all duration-200 align-middle w-full block m-0"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="w-full ">
                    <label htmlFor="message" className="text-[18px] mb-2.5 block font-bold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Your text"
                      className="min-h-130px min-w-full max-w-full max-h-full h-auto border border-solid border-[#ffffff] text-[#11111180] bg-[#e8e8e866] rounded-[15px] mb-5 py-2.5 px-5 text-[18px] leading-[1em] transition-all duration-200 align-middle w-full block m-0 overflow-auto md:min-w-full md:max-w-full md:min-h-[82%] md:max-h-full md:h-auto md:mb-5"
                    />
                  </div>

                </div>


                {/* Services Dropdown */}
                <div className="w-full">
                  <label htmlFor="service" className="text-[18px] mb-2.5 block font-bold">
                    Services
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      className="order border-solid border-[#ffffff] text-[#11111180] bg-[#e8e8e866] rounded-[15px] h-auto min-h-[50px] mb-5 py-2.5 px-5 text-[18px] leading-[1em] transition-all duration-200 align-middle w-full block m-0"
                      defaultValue=""
                    >
                      <option value="" disabled>Select one...</option>
                      <option value="web">Web Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="seo">SEO Optimization</option>
                    </select>
                    {/* Chevron Icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="border border-[#7000ff] bg-[#7000ff] text-[#ffffff] text-center tracking-[-0.4px] rounded-[15px] p-[30px] leading-[1em] transition-all duration-300 cursor-pointer no-underline inline-block m-0"
                  style={{ backgroundColor: '#7000ff' }}
                >
                  Submit
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;