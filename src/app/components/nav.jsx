import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <div className='flex justify-center relative'>
        <div className='max-w-[1900px] w-full flex justify-center fixed'>
        <nav className='bg-[#CCCCCCCC] w-full py-4 px-2 md:p-4  flex justify-center'>
           <div className='w-[100%] md:w-[90%] flex justify-between'> 
                <div className='flex items-center w-[60%] md:w-[50%]'>
                    <div className='w-[90%] xl:w-[32%]  flex'>
                        <Image className='w-[20%]' src='/images/Vector-4.png' alt="image" width={40} height={40} ></Image>
                    
                        <Image  className='w-[70%]' src='/images/Vector.svg' alt="image" width={40} height={40} ></Image>
                    </div>
                </div>
                <div className='flex items-center gap-4 md:gap-10  '>
                    <div className='h-full flex items-center text-white text-shadow-lg font-sans gap-3 pr-4 md:p-0'>
                        <h1 className='font-bold text-[20px]'>EN</h1>
                        <div className='w-[3px] font-normal pr-2 text-[30px]'>|</div>
                        <h1 className='font-normal text-[18px]'>AR</h1>
                    </div>
                    <div className='md:flex items-center gap-4 hidden md:gap-8'>
                        <Image  src="/images/Vector-3.svg" alt="image" width={25} height={25}></Image>
                        <Image  src="/images/Vector-1.svg" alt="image" width={25} height={25}></Image>
                        <Image  src="/images/Vector-2.svg" alt="image" width={25} height={25}></Image>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    </div>
  )
}

export default Nav
