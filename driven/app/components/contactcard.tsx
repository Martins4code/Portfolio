import Image from "next/image";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className="z-[2] bg-[#e8e8e8] relative block">
      {/* Main Card Container */}
      <div className="flex flex-col z-[2] gap-y-2.5 w-full max-w-[1200px] mx-auto px-[15px] relative">
        
        {/* 3rd Card Container */}
        <div className="flex flex-col gap-y-[30px] gap-x-[50px] items-center pt-[30px] px-[15px] bg-[#ffffff] rounded-[15px] justify-between w-full pl-[15px]">
          <div className="flex flex-col justify-center text-center items-center gap-y-5 ">
            
            {/* Top Buttons Section - FIXED */}
            <div className="flex flex-row gap-2.5 justify-center flex-wrap">
              <div className="text-[18px] uppercase bg-[#7000ff33] rounded-[60px] flex-none py-2 px-[30px]">
                Contact Us
              </div>
              <div className="text-[18px] uppercase bg-[#7000ff33] rounded-[60px] flex-none py-2 px-[30px]">
                FAQ
              </div>
            </div>

            {/* Text Content */}
            <h1 className="uppercase text-[40px] text-[#111] tracking-[-2.2px] my-2.5 font-medium leading-[1em]">
              Get In Touch
            </h1>

            <p className="uppercase max-w-[850px] mt-0 mb-0 text-[20px] font-medium leading-[1.5em]">
              Welcome to our "Get in touch" page! We value your communication
              and would love to hear from you, whether you have a question,
              suggestion, partnership opportunity.
            </p>
          </div>

          {/* Image Section with Overlay */}
          <div className="max-w-none rounded-[15px] flex-none w-full h-[370px] relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Workspace"
              fill
              className="object-cover w-full h-full max-w-full inline-block align-middle border-0"
              priority
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* Social Icons Overlay */}
            <div className="z-10 justify-center pb-5 absolute inset-x-0 bottom-0 top-auto gap-x-5 flex flex-row">
              {/* Circle 1: IN (LinkedIn) */}
              <a
                href="#"
                className="border-2 border-solid text-[#ffffff] border-[#ffffff] uppercase rounded-[50%] justify-center w-[50px] h-[50px] flex max-x-full items-center text-[20px] leading-[1.2em] no-underline bg-[#0000] transition-colors duration-300 ease-in-out hover:text-[#7000ff] group"
              >
                <div className="rounded-[50%] w-[50px] h-[50px] absolute"></div>
                <div className="px-0 relative">IN</div>
              </a>

              {/* Circle 2: FB (Facebook) */}
              <a
                href="#"
                className="border-2 border-solid text-[#ffffff] border-[#ffffff] uppercase rounded-[50%] justify-center w-[50px] h-[50px] flex max-x-full items-center text-[20px] leading-[1.2em] no-underline bg-[#0000] transition-colors duration-300 ease-in-out hover:text-[#7000ff] group"
              >
                <div className=" rounded-[50%] w-[50px] h-[50px] absolute"></div>
                <div className="px-0 relative">FB</div>
              </a>

              {/* Circle 3: TW (Twitter/X) */}
              <a
                href="#"
                className="border-2 border-solid text-[#ffffff] border-[#ffffff] uppercase rounded-[50%] justify-center w-[50px] h-[50px] flex max-x-full items-center text-[20px] leading-[1.2em] no-underline bg-[#0000] transition-colors duration-300 ease-in-out hover:text-[#7000ff] group"
              >
                <div className="rounded-[50%] w-[50px] h-[50px] absolute"></div>
                <div className="px-0 relative">TW</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;