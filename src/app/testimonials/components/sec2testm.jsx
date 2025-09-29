"use client";

import React from 'react'
import Image from 'next/image'  
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../globals.css"
const Sec2testm = () => {
  return (
    <div className='sec2nd flex justify-center bg-[#F4F4F5] font-sans'>
        <div className='max-w-[2050px] w-full flex justify-center'>
            <div className='w-[73%] md:w-[63%] lg:w-[83%] 2xl:w-[73%] my-10 lg:my-20'>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className='flex justify-center items-center gap-3'>
                        <div className='w-10 h-[1px] bg-black'></div>
                        <h3 className='text-[20px] font-normal'>TESTIMONIAL</h3>
                        <div className='w-10 h-[1px] bg-black'></div>
                    </div>
                    <h1 className='text-[30px] md:text-[36px] font-bold'>What Our Clients Say</h1>
                </div>
             
                   
                <div className='grid lg:grid-cols-2  gap-5 mt-10'>
                    <div>
                        <Image  src="/testimonials/Rectangle 44.png" alt="image" width={788} height={788}></Image>
                    </div>
                    
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                        clickable: true,
                        el: ".custom-pagination",}}
                        spaceBetween={30}
                        slidesPerView={1}
                        className="w-full" 
                        
                        >
                     <SwiperSlide className='shadow-lg shadow-black/30'>
                        <div className='flex flex-col justify-center h-full bg-white shadow-md shadow-black/30 p-5 md:px-13 '>
                            <div className='flex justify-center'>
                                <Image className='w-[26%]' src="/testimonials/Ellipse 4.png"  alt="image" width={151} height={151}></Image>
                            </div>
                            <div className='flex flex-col gap-3 mt-5 text-center'>
                                <p className='text-[16px] w-[95%] mx-auto font-normal leading-7'>When it comes to choosing premium marble for your space, seeing is believing — but hearing from satisfied customers is just as powerful. To build trust and show the true value of our marble products and services, we showcase real stories from real clients.
                                Whether it's a stunning marble countertop, </p>
                                <div>
                                    <h1 className='text-[22px] font-bold'>Nakul Harrison</h1>
                                    <h3 className='text-[18px]'>Manager</h3>
                                </div>
                            </div>
                        </div>
                     </SwiperSlide>
                    
                    <SwiperSlide className='shadow-lg shadow-black/30'>
                        <div className='flex flex-col justify-center h-full bg-white  p-5 md:px-13'>
                            <div className='flex justify-center'>
                                <Image className='w-[26%]' src="/testimonials/Ellipse 4.png"  alt="image" width={151} height={151}></Image>
                            </div>
                            <div className='flex flex-col gap-3 mt-5 text-center'>
                                <p className='text-[16px] w-[95%] mx-auto font-normal leading-7'>When it comes to choosing premium marble for your space, seeing is believing — but hearing from satisfied customers is just as powerful. To build trust and show the true value of our marble products and services, we showcase real stories from real clients.
                                Whether it's a stunning marble countertop, </p>
                                <div>
                                    <h1 className='text-[22px] font-bold'>Nakul Harrison</h1>
                                    <h3 className='text-[18px]'>Manager</h3>
                                </div>
                            </div>
                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className='flex flex-col justify-center h-full bg-white shadow-md shadow-black/40 p-5 md:px-13'>
                            <div className='flex justify-center'>
                                <Image className='w-[26%]' src="/testimonials/Ellipse 4.png"  alt="image" width={151} height={151}></Image>
                            </div>
                            <div className='flex flex-col gap-3 mt-5 text-center'>
                                <p className='text-[16px] w-[95%] mx-auto font-normal leading-7'>When it comes to choosing premium marble for your space, seeing is believing — but hearing from satisfied customers is just as powerful. To build trust and show the true value of our marble products and services, we showcase real stories from real clients.
                                Whether it's a stunning marble countertop, </p>
                                <div>
                                    <h1 className='text-[22px] font-bold'>Nakul Harrison</h1>
                                    <h3 className='text-[18px]'>Manager</h3>
                                </div>
                            </div>
                        </div>
                     </SwiperSlide>
                     </Swiper>        
                    {/* <div className=' custom-pagination'></div> */}
            </div>

            </div>
        </div>
    </div>
  )
}

export default Sec2testm
