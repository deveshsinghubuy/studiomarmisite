import React from 'react'
import Image from 'next/image'

const Sec2nd = () => {
  return (
    <div className='flex justify-center mb-10 bg-white'>
        <div className='max-w-[1900px] w-full flex justify-center'>
          <div className='w-[88%] mt-10 flex flex-col gap-2 xl:gap-4'>
              <h1 className='text-[22px] 2xl:text-[40px] xl:text-[34px] lg:text-[30px] font-semibold'>Hardness Scale</h1>
              <p className='text-[14px] 2xl:text-[16px] xl:text-[14px] font-normal text-[#666666] text-justify md:text-left leading-5.5 2xl:leading-7 xl:leading-6'>For a more accurate choice in your projects, understanding the durability of ornamental stones is essential. Below, we present a scale that classifies stones according to their hardness, helping in the selection of the material.</p>
              <div className='flex justify-center'>
                <Image className='w-[80%]' src="/images/marbelCircles.png" alt="image" width={1200} height={456} ></Image>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Sec2nd
