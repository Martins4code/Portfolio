import Image from 'next/image'

const intro = () => {
  return (
   <div className="container p-1  lg:pl-[160px] bg-gray-200">

        <div className=" flex justify-between items-end">
            <div> 
                <p className='text-[40px] text-bold lg:text-[80px] text-bold m-0'>CREATIVE</p>
                <div className='flex'>
                    <Image
                    src='/icons/UX_UX.svg'
                    alt='ui/ux'
                      width={200} 
                      height={200}/>
                <p className=' text-[40px] text-bold lg:text-[80px] pt-[20px] pl-[20px]'>DESIGNER</p>
                </div>
        </div>
        
        
            <div className='mt-[40px] group'>
              <div className='w-[8.5rem] h-[8.5rem] lg:w-[15rem] lg:h-[15rem] border-4 lg:border-7 border-violet-500 rounded-full flex items-center justify-center p-2 lg:mr-8lg:pt-2 lg:pr-8'>
                <Image
                  src="https://cdn.prod.website-files.com/6516d854f0fd3371a7760f25/651a9c6343b362da1594b2b8_Vector.svg"
                  alt="Get-in-touch"
                  width={40}
                  height={70}
                  className="w-14 h-16 lg:w-20 lg:h-20 motion-preset-oscillate motion-duration-1500 transform rotate-40"
                />
              </div>
            </div>
            
        </div>


<div className="profile-main flex flex-wrap items-end gap-4 mt-10">

 
  <div className="order-1 flex items-end gap-4 flex-nowrap w-full md:w-auto">
    <div className="w-[250px] h-[350px] flex-shrink-0">
  <Image
    src="/images/profile-pic.webp"
    alt="banner-image"
    // CHANGE THIS: Double the values to support 2x pixel density
    width={500} 
    height={700}
    className="w-full h-full object-cover rounded-xl border-2 border-gray-300"
  />
</div>
    <div className="flex-1">
      <p className="banner-paragraph">
        PASSIONATE ABOUT WEB <br />
        TECHNOLOGIES. I LOVE  WORKING AT <br />
        THE INTERSECTION OF CREATIVITY  AND <br />
        USER FRIENDLY INTERFACES. I CREATE <br />
        MEMORABLE WEB EXPERIENCES.
      </p>
    </div>
  </div>

  
  <div className="order-2 md:order-3 w-full md:w-auto mt-4 md:mt-0 flex flex-col lg:ml-auto space-y-2">
    <div className="flex flex-row gap-4">

      {/* Instagram */}
      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 border-2 border-violet-500 text-violet-500 rounded-full overflow-hidden w-[50px] sm:w-[50px] lg:hover:w-[150px] hover:bg-violet-500 hover:text-white transition-none sm:transition-all sm:duration-300 px-2 py-2"
      >
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-transparent flex items-center justify-center text-sm font-semibold">IG</span>
        <span className="whitespace-nowrap opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-200">Instagram</span>
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 border-2 border-violet-500 text-violet-500 rounded-full overflow-hidden w-[50px] sm:w-[50px] lg:hover:w-[150px] hover:bg-violet-500 hover:text-white transition-none sm:transition-all sm:duration-300 px-2 py-2"
      >
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-transparent flex items-center justify-center text-sm font-semibold">FB</span>
        <span className="whitespace-nowrap opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-200">Facebook</span>
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 border-2 border-violet-500 text-violet-500 rounded-full overflow-hidden w-[50px] sm:w-[50px] lg:hover:w-[150px] hover:bg-violet-500 hover:text-white transition-none sm:transition-all sm:duration-300 px-2 py-2"
      >
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-transparent flex items-center justify-center text-sm font-semibold">TW</span>
        <span className="whitespace-nowrap opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-200">Twitter</span>
      </a>

    </div>

      
        <h3 className="hidden sm:block text-[40px] leading-[1.1] profile-name lg:text-[60px]">Marcel <br />Apitty</h3>
      
    
  </div>

</div>

         
   </div>
  )
}

export default intro
