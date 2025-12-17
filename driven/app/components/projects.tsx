import React from 'react'
import Image from 'next/image'

const projects = () => {
  return (
    <div className='container p-3 lg:ml bg-gray-200'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 px-[15px]'>
            <div>
                <Image 
                    src="/images/dash.jpg"
                    alt="dashboard"
                    width={570}
                    height={500} 
                    className='w-[570px] h-[500px] object-cover rounded-lg shadow-lg'/>
            </div>
            <div>
            <Image 
                    src="/images/btc.jpg"
                    alt="project1"
                    width={570}
                    height={500} 
                    className='w-[570px] h-[500px] object-cover rounded-lg shadow-lg'/>    
            </div>
            <div>
                <Image 
                    src="/images/cloud.jpg"
                    alt="project1"
                    width={570}
                    height={500} 
                    className='w-[570px] h-[500px] object-cover rounded-lg shadow-lg'/>
            </div>
            <div>
                <Image 
                    src="/images/btt.jpg"
                    alt="project1"
                    width={570}
                    height={500} 
                    className='w-[570px] h-[500px] object-cover rounded-lg shadow-lg'/>
            </div>
        </div>
    </div>
  )
}

export default projects