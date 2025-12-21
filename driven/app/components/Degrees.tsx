import React from 'react'


// Mock data
const degrees = [
  { year: "2006 – 2015", title: "California Secondary School", desc: "Foundational arts and basic computer sciences." },
  { year: "2015 – 2019", title: "College of Tech, CA", desc: "Deep dive into Computer Technology and front-end fundamentals." },
  { year: "2019 – 2022", title: "University of Design, CA", desc: "Mastered UI/UX principles and modern product design." },
];


const Degrees = () => {
  return (
    <div className='container p-3 lg:ml bg-gray-200'>
           {/* Degrees Section */}
        <div className="bg-violet-500 text-white p-8 rounded-[1rem] ">
          <h2 className="text-[20px] font-bold uppercase tracking-[0.3em] mb-12">My Degree</h2>
          <div className="flex flex-col lg:flex-col gap-12">
            {degrees.map((item, i) => (
              <div key={i} className="group cursor-default">
                <div className='bg-purple-400 rounded-full w-fit px-5 py-2'>
                    <p className="font-mono text-[20px] text-xs">{item.year}</p>
                </div>
                <h3 className="text-[30px] font-bold mb-3 lg:text[60px] group-hover:text-gray-200 transition">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.desc}</p>
        
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Degrees