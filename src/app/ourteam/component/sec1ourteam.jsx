import React from 'react'


const Sec1ourteam = (prop) => {
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] w-full flex justify-center font-sans'>
            <div className='w-full h-[500px] lg:h-[800px] flex justify-center items-center bg-[url("/teams/teamSec1st.png")] bg-center bg-cover bg-no-repeat'>
                <div className='flex flex-col gap-1 md:gap-3 lg:gap-5 text-center items-center text-white'>
                        <div className='flex justify-center gap-4'>
                            <div className='flex items-center'>
                                <div className='w-19 h-[1px] bg-white'></div>
                                <div className='bg-white w-2 h-2 rounded-full'></div>
                            </div>
                            <h1 className='text-[16px] md:text-[22px]'>Welcome to studiomarmi</h1>
                            <div className='flex items-center'>
                                <div className='bg-white w-2 h-2 rounded-full'></div>
                                <div className='w-20 h-[1px] bg-white'></div>
                            </div>
                        </div>
                        <h1 className='text-[36px]  md:text-[44px] xl:text-[56px] font-medium  mb-2 md:mb-0'>{prop.title}</h1>
                         <button className="flex items-center gap-2 cursor-pointer p-3 py-2 lg:py-3 lg:px-9 text-[14px] md:text-[20px] font-semibold text-black bg-white transition">
                             <img src="https://d2ati23fc66y9j.cloudfront.net/studiomarmi/contact-us/home-icon.svg" alt="home" />
                                    Home
                             <img src="https://d2ati23fc66y9j.cloudfront.net/studiomarmi/contact-us/arrow-icon.svg" alt="arrow" />
                           <h1 className='font-normal'>Our Team</h1> 
                        </button>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sec1ourteam
