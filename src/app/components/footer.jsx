"use client";
import { useRef } from "react";
import Image from 'next/image'
const Footer = () => {

    const inputRef = useRef(null);
    const handleClick = () => {
            if (inputRef.current) {
            inputRef.current.value = ""; 
        };
    }

  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] w-full flex justify-center bg-black text-white'>
            <div className='p-10 md:p-20 flex flex-col items-center gap-5'>
                <div>
                    <h1>Subscribe to our Newsletter</h1>
                </div>
                <div className='bg-white w-[93%] text-[12px] md:text-[16px] lg:w-[28%] flex justify-between rounded-md mb-6'>
                    <input ref={inputRef}  className='w-[80%] outline-none px-4 text-black' type="text" placeholder='Enter your email address'></input>
                    <button onClick={handleClick} className='bg-[#333333] h-full p-4 cursor-pointer rounded-r-sm'>Subscribe</button> 
                </div>
                <div className='grid grid-cols-3 lg:grid-cols-4  border-t-[1px] border-white md:pt-18 pt-10 lg:p-8 gap-6 lg:gap-30'>
                    <div className='flex flex-col gap-3 col-span-3 md:col-span-1'>
                        <h1 className='text-[20px] font-semibold'>About Us</h1>
                        <p className='text-[16px] font-light'>At studiomarmi, we combine craftsmanship with quality to bring your dream spaces to life. Explore our collections and get inspired.</p>
                        <h5 className='flex'><Image src="/images/Component 107.svg" alt="image" width={20} height={20} ></Image> +1800-001-658</h5>
                    </div>
                    <div className='flex flex-col gap-3 md:pl-10 text-[14px] '>
                        <h1 className=' text-[14px] md:text-[20px] font-semibold'>Our Navigate</h1>
                        <h5>Marble</h5>
                        <h5>About Us</h5>
                        <h5>Service</h5>
                    </div>
                    <div className='flex flex-col gap-3 md:pl-10 text-[14px]'>
                        <h1 className='text-[14px] md:text-[20px]  font-semibold'>Our Products</h1>
                        <h5>Italy</h5>
                        <h5>Kuwait</h5>
                        <h5>Brazil</h5>                       
                    </div>
                    <div className='flex flex-col gap-3 col-span-2 md:col-span-1 text-[14px]'>
                        <h1 className='text-[14px] md:text-[20px]  font-semibold'>Contact Us</h1>
                        <h5 >+1800-001-658</h5>
                        <h5>Info@studiomarmi.com</h5>              
                    </div>
                </div>
            </div>

        </div>
        

    </div>
  )
}

export default Footer
