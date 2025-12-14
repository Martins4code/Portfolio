import Image from 'next/image'

const Intro = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:p-1 lg:pl-[160px] bg-gray-200 min-h-screen overflow-x-hidden">


      <div className="flex flex-row lg:flex-row lg:justify-between lg:items-end">
        
        <div className="w-full lg:w-auto">
          <p className='text-[40px] font-bold lg:text-[80px] m-0 leading-tight'>CREATIVE</p>
          
         
          <div className='flex flex-col lg:flex-row items-start lg:items-end'>
            
        
            <div className="relative w-[110px] h-[110px] lg:w-[200px] lg:h-[200px] shrink-0 mt-2 lg:mt-0">
                <Image
                src='/icons/UX_UX.svg'
                alt='ui/ux'
                fill
                className="object-contain"
                />
            </div>
            
            
            <p className='text-[40px] font-bold lg:text-[80px] pt-0 pl-0 lg:pt-[20px] lg:pl-[20px] leading-tight'>
              DESIGNER
            </p>
          </div>

          
        </div>

       
        <div className='mt-2 lg:mt-[40px] group self-end lg:self-auto'>
          <div className='w-[8.5rem] h-[8.5rem] ml-[4px] lg:w-[15rem] lg:h-[15rem] border-4 lg:border-7 border-violet-500 rounded-full flex items-center justify-center p-2 transition-transform hover:scale-105'>
            <Image
              src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/651a9c6343b362da1594b2b8_Vector.svg"
              alt="Get-in-touch"
              width={40}
              height={70}
              
              className="w-16 h-auto lg:w-20 lg:h-20 motion-preset-oscillate motion-duration-1500 transform rotate-40"
            />
          </div>


          <div>
            
          </div>

        </div>

      </div>

     
      <div className="profile-main flex flex-col lg:flex-row items-start lg:items-end gap-8 mt-10 lg:mt-20">

        <div className="order-1 flex flex-col md:flex-row items-start md:items-end gap-6 w-full lg:w-auto">
          <div className="w-full md:w-[250px] h-[350px] relative shrink-0">
            <Image
              src="/images/profile-pic.webp"
              alt="banner-image"
              width={500}
              height={700}
              className="w-full h-full object-cover rounded-xl border-2 border-gray-300"
            />
          </div>
          <div className="flex-1">
            <p className="font-medium text-lg lg:text-xl leading-relaxed uppercase max-w-md">
              Passionate about web technologies. I love working at the intersection of creativity and user friendly interfaces. I create memorable web experiences.
            </p>
          </div>
        </div>

        <div className="order-2 w-full lg:w-auto flex flex-col lg:ml-auto space-y-6">
          <div className="flex flex-row gap-4">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border-2 border-violet-500 text-violet-500 rounded-full overflow-hidden w-[50px] hover:w-[140px] lg:hover:w-[150px] hover:bg-violet-500 hover:text-white transition-all duration-300 px-2 py-2"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">IG</span>
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Instagram</span>
            </a>
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border-2 border-violet-500 text-violet-500 rounded-full overflow-hidden w-[50px] hover:w-[140px] lg:hover:w-[150px] hover:bg-violet-500 hover:text-white transition-all duration-300 px-2 py-2"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">FB</span>
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Facebook</span>
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border-2 border-violet-500 text-violet-500 rounded-full overflow-hidden w-[50px] hover:w-[140px] lg:hover:w-[150px] hover:bg-violet-500 hover:text-white transition-all duration-300 px-2 py-2"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">TW</span>
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Twitter</span>
            </a>
          </div>

          <h3 className="block text-[40px] leading-[1.1] font-bold lg:text-[60px]">
            Marcel <br />Apitty
          </h3>
        </div>

      </div>
    </div>
  )
}

export default Intro
