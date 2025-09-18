import React from 'react'
import Image from 'next/image'

const Sec3ourteam = () => {
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] relative w-full flex justify-center bg-[url("/teams/sec3rdTeams.png")] bg-center bg-cover bg-no-repeat '>
            <div className='w-[80%] my-10 lg:my-20 z-10  font-sans'>
                   
                    <div className='md:flex justify-between items-center border-b border-[#D9D9D9] pb-6 xl:pb-8 2xl:pb-10'>
                      <div>
                          <div className='flex items-center md:pl-2  gap-3'>
                              <div className='bg-black w-18 h-0.5 hidden md:block' ></div>   
                                <h5 className='text-[18px] lg:text-[20px] font-sans font-medium'>WHAT WE OFFER</h5>
                          </div>
                          <h1 className='text-[22px] 2xl:text-[36px] md:text-[24px] lg:text-[30px] font-sans font-bold mt-2 lg:mt-6' >We Provide the Best Services</h1>
                      </div>
                      <div className='text-base xl:text-base md:text-[12px]  mt-4 md:mt-0 cursor-pointer font-sans font-normal bg-black text-white px-6 py-3 rounded-md flex items-center justify-between gap-2'>
                          <button className='cursor-pointer' >READ MORE</button>
                          <Image src="/teams/Arrow 1.png" alt="image" width={20} height={10}></Image>
                       </div>
                   </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-7 lg:mt-15 gap-5 '>
                        {/* 1 */}
                        <div className=' flex flex-col bg-white gap-1 lg:gap-3 rounded-2xl p-8 2xl:p-16 2xl:py-10 py-5 lg:py-10 '>
                            <div className='py-5'>
                                <Image className='w-[22%]' src="/teams/Vector-4.png" alt="image" width={50} height={50}></Image>
                            </div>
                            <h1 className='text-[24px] font-medium'>Carpets & Rugs</h1>
                            <div className='border-b border-[#D9D9D9] pb-2 lg:pb-3'>
                                <h5 className='text-[15px] font-normal mb-4 w-[98%]' >Add warmth and comfort with our collection of modern and traditional rugs, perfectly suited for any space.</h5>
                            </div>
                            <div className='cursor-pointer mt-4'>
                                <div className='relative'><Image className='w-[30%] custom-width custom-width2 2xl:w-[18%] md:w-[35%] lg:w-[20%] top-4 md:top-4 absolute' src="/teams/Arrow2.svg" alt='image' width={40} height={40}></Image></div>
                                <div className='w-10 h-10 relative left-13 md:left-15 xl:left-8 2xl:left-9 rounded-full border border-[#333333]'></div>
                            </div>
                        </div>
                        {/* 2 */}
                         <div className=' flex flex-col bg-white gap-1 lg:gap-3 rounded-2xl p-8 2xl:p-16 2xl:py-10 py-5 lg:py-10  '>
                            <div className='py-5'>
                                <Image className='w-[21%]' src="/teams/Vector-5.png" alt="image" width={50} height={50}></Image>
                            </div>
                            <h1 className='text-[24px] font-medium'>Laminate Flooring</h1>
                            <div className='border-b border-[#D9D9D9] pb-2 lg:pb-3'>
                                <h5 className='text-[15px] font-normal mb-4 w-[98%]' >Get the look of hardwood or stone with a cost-effective and easy-to-maintain alternative</h5>
                            </div>
                            <div className='cursor-pointer mt-4'>
                                <div className='relative'><Image className='w-[30%] custom-width custom-width2 2xl:w-[18%] md:w-[35%] lg:w-[20%] top-4 md:top-4 absolute' src="/teams/Arrow2.svg" alt='image' width={40} height={40}></Image></div>
                                <div className='w-10 h-10 relative left-13 md:left-15 xl:left-8 2xl:left-9 rounded-full border border-[#333333]'></div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className=' flex flex-col bg-white gap-1 lg:gap-3 rounded-2xl p-8 2xl:p-16 2xl:py-10 py-5 lg:py-10 '>
                            <div className='py-5'>
                                <Image className='w-[26%]' src="/teams/Vector-6.png" alt="image" width={50} height={50}></Image>
                            </div>
                            <h1 className='text-[24px] font-medium'>Vinyl Flooring</h1>
                            <div className='border-b border-[#D9D9D9] pb-2 lg:pb-3'>
                                <h5 className='text-[15px] font-normal mb-4 w-[98%]' >Durable, waterproof, and stylish—ideal for both residential and commercial areas.</h5>
                            </div>
                            <div className='cursor-pointer mt-4'>
                                <div className='relative'><Image className='w-[30%] custom-width custom-width2 2xl:w-[18%] md:w-[35%] lg:w-[20%] top-4 md:top-4 absolute' src="/teams/Arrow2.svg" alt='image' width={40} height={40}></Image></div>
                                <div className='w-10 h-10 relative left-13 md:left-15 xl:left-8 2xl:left-9 rounded-full border border-[#333333]'></div>
                            </div>
                        </div>
                        {/* 4 */}
                         <div className='flex flex-col bg-white gap-1 lg:gap-3 rounded-2xl p-8 2xl:p-16 2xl:py-10 py-5 lg:py-10 '>
                            <div className='py-5'>
                                <Image className='w-[22%]' src="/teams/Vector-7.png" alt="image" width={50} height={50}></Image>
                            </div>
                            <h1 className='text-[24px] font-medium'>Marble Flooring</h1>
                            <div className='border-b border-[#D9D9D9] pb-2 lg:pb-3'>
                                <h5 className='text-[15px] font-normal mb-4 w-[98%]' >Timeless elegance with natural marble—perfect for luxury interiors and grand spaces.</h5>
                            </div>
                            <div className='cursor-pointer mt-4'>
                                <div className='relative'><Image className='w-[30%] custom-width custom-width2 2xl:w-[18%] md:w-[35%] lg:w-[20%] top-4 md:top-4 absolute' src="/teams/Arrow2.svg" alt='image' width={40} height={40}></Image></div>
                                <div className='w-10 h-10 relative left-13 md:left-15 xl:left-8 2xl:left-9 rounded-full border border-[#333333]'></div>
                            </div>
                        </div>
                        {/* 5 */}
                         <div className='flex flex-col bg-white gap-1 lg:gap-3 rounded-2xl p-8 2xl:p-16 2xl:py-10 py-5 lg:py-10 '>
                            <div className='py-2.5'>
                                <Image className='w-[18%]' src="/teams/Vector-8.png" alt="image" width={50} height={50}></Image>
                            </div>
                            <h1 className='text-[24px] font-medium'>Industrial Flooring</h1>
                            <div className='border-b border-[#D9D9D9] pb-2 lg:pb-3'>
                                <h5 className='text-[15px] font-normal mb-4 w-[98%]' >Built tough for heavy use, our industrial flooring is ideal for factories, warehouses, and commercial areas.</h5>
                            </div>
                            <div className='cursor-pointer mt-4'>
                                <div className='relative'><Image className='w-[30%] custom-width custom-width2 2xl:w-[18%] md:w-[35%] lg:w-[20%] top-4 md:top-4 absolute' src="/teams/Arrow2.svg" alt='image' width={40} height={40}></Image></div>
                                <div className='w-10 h-10 relative left-13 md:left-15 xl:left-8 2xl:left-9 rounded-full border border-[#333333]'></div>
                            </div>
                        </div>
                        {/* 6 */}
                         <div className=' flex flex-col bg-white gap-1 lg:gap-3 rounded-2xl p-8 2xl:p-16 2xl:py-10 py-5 lg:py-10 '>
                            <div className='py-2.5'>
                                <Image className='w-[18%]' src="/teams/Vector-9.png" alt="image" width={50} height={50}></Image>
                            </div>
                            <h1 className='text-[24px] font-medium'>Oak Flooring</h1>
                            <div className='border-b border-[#D9D9D9] pb-2 lg:pb-3'>
                                <h5 className='text-[15px] font-normal mb-4 w-[98%]' >Bring natural beauty indoors with our solid oak flooring, available in a range of finishes.</h5>
                            </div>
                            <div className='cursor-pointer mt-4'>
                                <div className='relative'><Image className='w-[30%] custom-width custom-width2 2xl:w-[18%] md:w-[35%] lg:w-[20%] top-4 md:top-4 absolute' src="/teams/Arrow2.svg" alt='image' width={40} height={40}></Image></div>
                                <div className='w-10 h-10 relative left-13 md:left-15 xl:left-8 2xl:left-9 rounded-full border border-[#333333]'></div>
                            </div>
                        </div>
                        
                    </div>
                
            </div>
            <div className='absolute inset-0 bg-[#DFD8D4]/50'></div>
        </div>
    </div>
  )
}

export default Sec3ourteam
