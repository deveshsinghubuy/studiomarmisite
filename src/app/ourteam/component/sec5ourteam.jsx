"use client";
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../globals.css"

const Sec5ourteam = () => {
  return (
    <div className='flex justify-center'>
      <div className='max-w-[1900px] w-full flex justify-center font-sans'>
        <div className='w-[88%] flex flex-col items-center my-15'>
          <div className='w-full md:flex justify-between items-center border-b border-[#E8ECF1] pb-6 xl:pb-8 2xl:pb-14'>
            <div>
              <div className='flex items-center md:pl-2  gap-3'>
                <div className='bg-[#895740] w-18 h-0.5 hidden md:block'></div>
                <h5 className='text-[18px] lg:text-[20px] text-[#895740] font-sans font-medium'>OUR TESTIMONIAL</h5>
              </div>
              <h1 className='text-[22px] 2xl:text-[36px] md:text-[24px] lg:text-[30px] font-sans font-bold mt-2 lg:mt-6'>What Our Clients Say</h1>
            </div>
            <div className='text-base xl:text-base md:text-[12px]  mt-4 md:mt-0 cursor-pointer font-sans font-normal bg-[#2A3037] text-white px-6 py-3 rounded-md flex items-center justify-between gap-2'>
              <button className='cursor-pointer'>VIEW MORE</button>
              <Image src="/teams/Arrow 1.png" alt="image" width={20} height={10}></Image>
            </div>
          </div>

        <div className=' relative mt-10 w-[80%] h-[100%] mx-auto'>
          <Swiper
            modules={[Pagination]}
             pagination={{
               clickable: true,
               el: ".custom-pagination",
            }} 
            spaceBetween={30}
            slidesPerView={1}
            className="w-full"
          >           
            <SwiperSlide>
                <div className='text-center absolute left-3 lg:left-[5%]'>
                  <div className='w-[80%] xl:w-[100%] mx-auto'>
                    <Image className='w-[95%]' src="/teams/Ellipse 2.png" alt='image' width={281} height={281}></Image>
                  </div>
                  <h2 className='text-[20px] font-semibold mt-5'>Prince Sharma</h2>
                  <h4 className='text-[16px] font-medium'>Manager</h4>
                </div>
                <div className='pt-45 md:pt-50  pb-4 lg:p-15 bg-[#F8F6F6] mt-18 rounded-2xl '>
                  <div className='p-3 md:p-0 lg:pl-60 xl:pl-70 2xl:pl-80 flex gap-2'>
                    <h1 className='w-[30%] lg:w-[60%] 2xl:w-[30%]   hidden md:block'><Image className='w-[80%]' src="/teams/vector-10.svg" alt='image' width={48} height={48}></Image></h1>
                    <p className='text-[16px] font-normal leading-8 mt-4 line-clamp-6 md:line-clamp-none'>
                     At StudioMarmi, we take pride in delivering the finest selection of natural stone, engineered marble, and premium flooring solutions that combine timeless beauty with modern functionality. With a deep understanding of materials and design, we curate collections that elevate both residential and commercial spaces. From initial consultation and concept planning to precision fabrication and flawless installation, our expert team is with you at every step. Whether you're designing a luxury kitchen, a grand lobby, or a serene bathroom, we bring your vision to life with elegance and durability. <Image className='w-[4%] inline-block ml-3 pt-2' src="/teams/vector-11.svg" alt='image' width={48} height={48}></Image>
                    </p>
                  </div>
                </div>
              
            </SwiperSlide>

            <SwiperSlide>
                <div className='text-center absolute left-3 lg:left-[5%]'>
                  <div className='w-[80%] xl:w-[100%] mx-auto'>
                    <Image className='w-[95%]' src="/teams/Ellipse 2.png" alt='image' width={281} height={281}></Image>
                  </div>
                  <h2 className='text-[20px] font-semibold mt-5'>Prince Sharma</h2>
                  <h4 className='text-[16px] font-medium'>Manager</h4>
                </div>
                <div className='pt-45 md:pt-50  pb-4 lg:p-15 bg-[#F8F6F6] mt-18 rounded-2xl '>
                  <div className='p-3 md:p-0 lg:pl-60 xl:pl-70 2xl:pl-80 flex gap-2'>
                    <h1 className='w-[30%] lg:w-[60%] 2xl:w-[30%]   hidden md:block'><Image className='w-[80%]' src="/teams/vector-10.svg" alt='image' width={48} height={48}></Image></h1>
                    <p className='text-[16px] font-normal leading-8 mt-4 line-clamp-6 md:line-clamp-none'>
                     At StudioMarmi, we take pride in delivering the finest selection of natural stone, engineered marble, and premium flooring solutions that combine timeless beauty with modern functionality. With a deep understanding of materials and design, we curate collections that elevate both residential and commercial spaces. From initial consultation and concept planning to precision fabrication and flawless installation, our expert team is with you at every step. Whether you're designing a luxury kitchen, a grand lobby, or a serene bathroom, we bring your vision to life with elegance and durability. <Image className='w-[4%] inline-block ml-3 pt-2' src="/teams/vector-11.svg" alt='image' width={48} height={48}></Image>
                    </p>
                  </div>
                </div>
              
            </SwiperSlide>

            <SwiperSlide>
                <div className='text-center absolute left-3 lg:left-[5%]'>
                  <div className='w-[80%] xl:w-[100%] mx-auto'>
                    <Image className='w-[95%]' src="/teams/Ellipse 2.png" alt='image' width={281} height={281}></Image>
                  </div>
                  <h2 className='text-[20px] font-semibold mt-5'>Prince Sharma</h2>
                  <h4 className='text-[16px] font-medium'>Manager</h4>
                </div>
                <div className='pt-45 md:pt-50  pb-4 lg:p-15 bg-[#F8F6F6] mt-18 rounded-2xl '>
                  <div className='p-3 md:p-0 lg:pl-60 xl:pl-70 2xl:pl-80 flex gap-2'>
                    <h1 className='w-[30%] lg:w-[60%] 2xl:w-[30%]   hidden md:block'><Image className='w-[80%]' src="/teams/vector-10.svg" alt='image' width={48} height={48}></Image></h1>
                    <p className='text-[16px] font-normal leading-8 mt-4 line-clamp-6 md:line-clamp-none'>
                     At StudioMarmi, we take pride in delivering the finest selection of natural stone, engineered marble, and premium flooring solutions that combine timeless beauty with modern functionality. With a deep understanding of materials and design, we curate collections that elevate both residential and commercial spaces. From initial consultation and concept planning to precision fabrication and flawless installation, our expert team is with you at every step. Whether you're designing a luxury kitchen, a grand lobby, or a serene bathroom, we bring your vision to life with elegance and durability. <Image className='w-[4%] inline-block ml-3 pt-2' src="/teams/vector-11.svg" alt='image' width={48} height={48}></Image>
                    </p>
                  </div>
                </div>
              
            </SwiperSlide>
          </Swiper>
          <div className="custom-pagination mt-6 "></div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Sec5ourteam
