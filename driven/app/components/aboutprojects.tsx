import Image from 'next/image';

const ProjectCard = () => {
  return (
    <div className="py-[60px] z-5 bg-[#e8e8e8] relative block">
      
      {/* Main Container */}
      <div className="flex flex-col items-center max-w-[1200px] mx-auto px-[15px] relative">
        
        {/* third Container */}
        <div className='w-full'>

            {/* everything here */}
                  <div className='flex gap-[50px] flex-col'>
                        {/* No 1 */}
                        <div>
                                  <div className='flex gap-[50px] flex-col justify-between'>
                                                                    {/* Left Content Section */}
                                                                    
                                            <div className="flex opacity-100 gap-y-[50px] flex-col justify-between items-start w-full">
                                          
                                           {/* writings x tag */}
                                                <div className='flex flex-col gap-y-2.5'>
                                                        <a href=""className="text-[30px] text-[#111] leading-[1.1em] items-center no-underline bg-[#0000] transition-colors duration-300 hover:text-[#7000ff]">
                                                    Fashion Landing Page for Wally
                                                        </a>
                                                
                                                        <p className="my-2.5 font-normal leading-[1.5em]">
                                                            A Fashion Landing Page for Wally is a web page designed to showcase Wally&apos;s fashion products, brand identity, and encourage visitors to engage with the brand and explore its offerings. The page will feature visually appealing design elements, clear calls to action, and a seamless user experience to attract potential customers.
                                                        </p>

                                                        {/* Tags */}
                                                        <div> 
                                                            <div className='flex gap-5'>
                                                                    <div>
                                                                         <a href=""className="border-2 border solid border-[#7000ff] text-[#111] rounded-[80px] py-2.5 px-5 leading-[1em] inline-block items-center text-[20px] no-underline bg-[#0000] transition-[background-color,color] duration-300 hover:bg-[#7000ff] hover:text-white">
                                                                            UI/UX
                                                                        </a>
                                                                    </div>
                                                                    <div>
                                                                        <a href=""className="border-2 border solid border-[#7000ff] text-[#111] rounded-[80px] py-2.5 px-5 leading-[1em] inline-block items-center text-[20px] no-underline bg-[#0000] transition-[background-color,color] duration-300 hover:bg-[#7000ff] hover:text-white">
                                                                        Development
                                                                        </a>
                                                                    </div>
                                                            </div>
                                                           
                                                        </div>
                                                </div>


                                                {/* Circular Button Wrapper */}
                                                <a href=""className="w-[100px] h-[100px] rounded-full border-3 border-solid border-[#7000ff] flex max-w-full items-center justify-center text-[20px] leading-[1.2em] no-underline bg-[#0000] transition:-colors duration-300 hover:bg-[#7000ff] hover:text-white group"
                                                    aria-label="View Project">
                                                    <Image 
                                                        src="/icons/arrow.svg" 
                                                        alt="arrow" 
                                                        width={28} 
                                                        height={40} 
                                                        className="text-[#7000ff] max-w-full inline-block align-middle border-0 group-hover:text-white transition-colors duration-300 transform -rotate-45" 
                                                    />
                                                
                                                </a>
                                            </div>

                                            {/* Right Image Section */}
                                            <div className="flex relative overflow-hidden opacity-100 h-[400px] items-center w-full rounded-[15px] flex-none justify-center transition-none">
                                            {/* Replace '/path-to-your-dashboard-image.png' with your actual image path.
                                                Ensure the image is in your 'public' folder.
                                            */}
                                            <a href="" className='outline-0 w-full h-full relative max-w-full inline-block text-[#7000ff] items-center text-[20px] leading-[1.2em] bg-[#0000] no-underline transition-colors duration-300 hover:text-white group'>
                                                    <div className='z-1 bg-linear-to-t from-[#111111e6] to-[#fff0] absolute inset-x-0 top-0 bottom-0'></div>
                                                    <Image
                                                        src="/dashboard-mockup.png" 
                                                        alt="Wally Dashboard Interface"
                                                        width={800}
                                                        height={600}
                                                        className="w-full h-full relative max-w-full inline-block align-middle border-0 object-cover"
                                                        priority
                                                                />
                                            </a>
                                            
                                            </div>  
                                        
                            </div>
                        </div>
                  </div>

        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;