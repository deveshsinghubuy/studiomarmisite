import React from 'react'
import Image from 'next/image'

const Sec5th = () => {
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] w-full flex justify-center my-10'>

                <div className='w-[88%] h-auto'>
                    <div className='md:flex justify-between items-center'>
                        <div>
                            <div className='flex items-center gap-5'>
                                <div className='bg-black w-30 h-0.5 hidden md:block' ></div>
                                <h5 className='text-[20px] font-medium'>what we offer</h5>
                            </div>
                            
                            <h1 className='text-[24px] md:text-[30px] lg:text-[40px] font-semibold mt-2' >Providing the best Service</h1>
                        </div>
                        <div>
                            <button className='text-[16px] mt-4 md:mt-0 cursor-pointer font-semibold bg-black text-white px-7 py-4 rounded-md'>Read More</button>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 md:gap-15 lg:gap-35'>
                        <div className=' flex flex-col gap-7 '>
                            <div>
                                <Image className='w-[30%]' src="/tiles/image 8.svg" alt="image" width={50} height={50}></Image>
                            </div>
                            <h1 className='text-[24px] font-medium'>Carpets & Rugs</h1>
                            <div>
                                <h5 className='text-[16px]  text-[#666666] font-normal mb-4 w-[70%] ' > Carpets and rugs are popular flooring options for their softness.</h5>
                                <div className='flex items-center '>
                                    <div className='bg-black w-2 h-2 rounded-full'></div>
                                    <div className='bg-black w-full h-0.5' ></div>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                                <div className='relative'><Image className='w-[12%] md:w-[15%] lg:w-[20%] top-4 md:top-6 absolute' src="/images/Arrow2.png" alt='image' width={40} height={40}></Image></div>
                                <div className='w-10 h-10 md:w-15 md:h-15 relative left-5 xl:left-8 rounded-full border border-black'></div>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-7 '>
                            <div>
                                <Image className='w-[30%]' src="/tiles/image 6.svg" alt="image" width={50} height={50}></Image>
                            </div>
                            <h1 className='text-[24px] font-medium'>Laminate Flooring</h1>
                            <div>
                                <h5 className='text-[16px] text-[#666666] font-normal mb-4 w-[70%]' > It is a popular choice for residential and commercial spaces.</h5>
                                <div className='flex items-center '>
                                    <div className='bg-black w-2 h-2 rounded-full'></div>
                                    <div className='bg-black w-full h-0.5' ></div>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                                <div className='relative'><Image className='w-[12%] md:w-[15%] lg:w-[20%] top-4 md:top-6 absolute' src="/images/Arrow2.png" alt='image' width={40} height={40}></Image></div>
                                <div className='w-10 h-10 md:w-15 md:h-15 relative left-5 xl:left-8 rounded-full border border-black'></div>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-7 '>
                            <div>
                                <Image className='w-[30%]' src="/tiles/image 7.svg" alt="image" width={50} height={50}></Image>
                            </div>
                            <h1 className='text-[24px] font-medium'>Vinyl Flooring</h1>
                            <div>
                                <h5 className='text-[16px] text-[#666666] font-normal mb-4 w-[70%] 2xl:w-[70%] xl:w-[92%]' > Vinyl flooring two main types: luxury vinyl flooring and vinyl sheet flooring.</h5>
                                <div className='flex items-center '>
                                    <div className='bg-black w-2 h-2 rounded-full'></div>
                                    <div className='bg-black w-full h-0.5' ></div>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                                <div className='relative'><Image className='w-[12%] md:w-[15%] lg:w-[20%] top-4 md:top-6 absolute' src="/images/Arrow2.png" alt='image' width={40} height={40}></Image></div>
                                <div className='w-10 h-10 md:w-15 md:h-15 relative left-5 xl:left-8 rounded-full border border-black'></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Sec5th
