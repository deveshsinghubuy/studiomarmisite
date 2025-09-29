"use client"
import Image from "next/image";
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";

const Sec3rdservice = () => {
    return(
        <div className="sec2nd flex justify-center">
            <div className="max-w-[2050px] w-full flex jutify-center font-sans">
                <div className="w-full h-auto flex justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url(/service/sec3rd.png)"}}>
                    
                    <div className="w-[90%] flex flex-col gap-10 justify-center my-10 md:my-20">
                        
                        <div className="flex flex-col items-center text-center text-white">
                            <div className="flex items-center gap-2 md:gap-4">
                                <div className="bg-[#F8FF78] w-12 h-0.5"></div>
                                <h3 className="text-[16px] md:text-[20px] font-medium text-[#F8FF78]">OUR MARBLEX GALLERY </h3>
                                <div className="bg-[#F8FF78] w-12 h-0.5"></div>
                            </div>
                            <h1 className="text-[30px] mt-2 lg:mt-4 md:text-[40px] font-bold">We Specialize in Marble</h1>
                            <h5 className="text-[16px] font-normal mt-2 md:mt-1">Browse our gallery of elegant marble installations and premium stonework.</h5>
                        </div>
                       
                       <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                              breakpoints={{
                                320:{
                                    slidesPerView: 1,
                                },
                                768: { 
                                slidesPerView: 2,
                                },
                                1024: {
                                slidesPerView: 3,
                                },
                            }}
                            className="w-full"


                            >
                            <SwiperSlide>
                                <div><Image src="/service/Group 14.png" alt="image" width={547} height={484} ></Image></div>                                
                            </SwiperSlide>

                            <SwiperSlide>                              
                                   <div><Image src="/service/Group 15.png" alt="image" width={547} height={484} ></Image></div>                  
                            </SwiperSlide>

                            <SwiperSlide>
                                 <div><Image src="/service/Group 16.png" alt="image" width={547} height={484} ></Image></div>
                            </SwiperSlide>

                            <SwiperSlide>
                                     <div><Image src="/service/Group 17.png" alt="image" width={547} height={484} ></Image></div>
                            </SwiperSlide>
                       </Swiper>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec3rdservice;