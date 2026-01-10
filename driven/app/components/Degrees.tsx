import React from 'react'


// Mock data
const degrees = [
  { year: "2006 – 2015", title: "California Secondary School", desc: "Lorem ipsum dolor sit amet consectetur. Velit semper fermentum mattis volutpat cras. Magna tortor porta cursus maecenas." },
  { year: "2015 – 2019", title: "College of Tech, CA", desc: "Lorem ipsum dolor sit amet consectetur. Velit semper fermentum mattis volutpat cras. Magna tortor porta cursus maecenas." },
  { year: "2019 – 2022", title: "University of Design, CA", desc: "Lorem ipsum dolor sit amet consectetur. Velit semper fermentum mattis volutpat cras. Magna tortor porta cursus maecenas." },
];


const Degrees = () => {
  return (
    <div className='py-[60px] z-5 bg-[#e8e8e8] relative block'>
           {/* Degrees Section */}
        <div className="flex flex-col py-[30px] bg-[#7000ff] rounded-[15px] mx-[15px] items-center max-w-[1200px] px-[15px] relative">
          <div className='flex flex-col text-left items-start gap-[50px] w-full'>
                <div className='w-full max-w-350px'>
                    <div className="opacity-100 text-white">My Degree</div>
                </div>
                
                <div className="flex flex-col gap-y-[30px]">

                  <div className='flex flex-col opacity-100 border-l-4 border-solid border-[#7000ff33] items-start w-full relative gap-x-[15px] text-left gap-y-[30px] md:gap-y-[50px]'>
                                {degrees.map((item, i) => (
                        <div key={i} className="flex flex-col gap-y-0 pl-0">
                      
                            <div className="mb-2.5 text-[#ffffff] bg-[#fff6] rounded-[60px] py-2.5 px-[30px] leading-[1em] inline-block self-start">{item.year}</div>
                        
                            <h2 className="text-[#ffffff] tracking-[-1.6px] uppercase max-w-[1100px] text-[30px] my-2.5 font-medium leading-[1em] md:text-[42px] lg:text-[60px]">{item.title}</h2>
                            <p className="text-[#ffffff] max-w-[670px] my-2.5 font-normal leading-[1.5em]">{item.desc}</p>
                
                      </div>
                      ))}
                  </div>
                  
              </div>
          </div>
          
        </div>
    </div>
  )
}

export default Degrees