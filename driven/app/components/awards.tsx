import React from 'react'

const Awards = () => {
  return (
    <div className='container mx-auto p-3 bg-gray-200'>

        {/* Wrapper: 
           1. flex flex-col: Stacks vertically (Text on top) for mobile.
           2. lg:flex-row:  Switches to side-by-side for desktop.
           3. lg:items-start: Aligns items to the top on desktop.
        */}
        <div className='flex flex-col items-center gap-[50px] lg:pt-[130px] lg:flex-row lg:items-start lg:gap-[100px]'>



            {/* Title Section */}
            <div className='text-center lg:text-left font-bold leading-[1.5] w-full max-w-[350px] font-normal text-[19px]'>
                AWARD-WINNING DESIGNER WITH HIGH VISUAL (i think so) TASTE
            </div>
            
            {/* Awards List */}
            <div className='flex flex-col gap-[50px] w-full'>
                
                {/* Item 1 */}
                <div className='flex flex-col items-center lg:items-start'>
                    <div className='text-gray-600'>2025</div>
                    <h2 className='text-[30px] text-[#6200EA] lg:text-[60px] leading-none'>Dribbble Animation Award</h2>
                </div>

                {/* Item 2 */}
                <div className='flex flex-col items-center lg:items-start'>
                    <div className='text-gray-600'>2025</div>
                    <h2 className='text-[30px] text-[#6200EA] lg:text-[60px] leading-none'>Dribbble Animation Award</h2>
                </div>

                {/* Item 3 */}
                <div className='flex flex-col items-center lg:items-start'>
                    <div className='text-gray-600'>2025</div>
                    <h2 className='text-[30px] text-[#6200EA] lg:text-[60px] leading-none'>Dribbble Animation Award</h2>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Awards