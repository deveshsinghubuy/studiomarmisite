import React from 'react'
import Link from 'next/link'


const Sec1ourteam = (prop) => {
  return (
    <div className='flex justify-center'>
        <div className='max-w-[2050px] w-full flex justify-center font-sans'>
            <div className='w-full h-auto flex justify-center items-center bg-[url("/teams/teamSec1st.png")] bg-center bg-cover bg-no-repeat'>
                <div className='md:pb-20 lg:pb-25 xl:pb-25 2xl:pb-25  pb-20 py-50 2xl:py-45 xl:py-40 md:py-50 flex flex-col gap-1 md:gap-3 lg:gap-2 text-center items-center text-white'>
                        <div className='flex justify-center gap-5 lg:gap-8 2xl:gap-10'>
                            <div className='flex items-center'>
                                <div className='w-10 lg:w-15 2xl:w-19 h-[2px] bg-white'></div>
                                <div className='bg-white w-2 h-2 rounded-full'></div>
                            </div>
                            <h1 className='text-[16px] md:text-sm lg:text-base 2xl:text-[20px]'>Welcome to studiomarmi</h1>
                            <div className='flex items-center'>
                                <div className='bg-white w-2 h-2 rounded-full'></div>
                                <div className='w-10 lg:w-15 2xl:w-20 h-[2px] bg-white'></div>
                            </div>
                        </div>
                        <h1 className='text-[30px]  md:text-[24px] lg:text-[30px] 2xl:text-[40px] font-medium  mb-2 md:mb-0 w-[90%] md:w-[60%]'>{prop.title}</h1>
                         <button className="my-2 lg:my-4 flex items-center gap-2  p-3 py-2 lg:py-3 lg:px-5 text-[16px] md:text-[14px] lg:text-[16px] 2xl:text-[18px] font-semibold text-black bg-white transition">
                             <img src="https://d2ati23fc66y9j.cloudfront.net/studiomarmi/contact-us/home-icon.svg" alt="home" />
                                  <Link href="/">Home</Link>  
                             <img src="https://d2ati23fc66y9j.cloudfront.net/studiomarmi/contact-us/arrow-icon.svg" alt="arrow" />
                           <h1 className='font-normal'>{prop.page}</h1> 
                        </button>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sec1ourteam
