import React from 'react'
import Image from 'next/image'
import { comment } from 'postcss'
const  Sec6ourteam = () => {

  const items =[
    {
      img:"/teams/Rectangle 29.png",
      date:"July 7, 2025 ",
      commentNO :"0",
      comment :"Comments",
      des:"How Granite & Marble Flooring Can Transform Your Interiors",
      text:"Stone"
    },
    {
      img:"/teams/Rectangle 30.png",
      date:"July 7, 2025 ",
      commentNO :"0",
      comment :"Comments",
      des:"Defining Your Kitchen’s Design Style with Elegant Stone Surfaces",
      text:"Tiles"
    },
    {
      img:"/teams/Rectangle 31.png",
      name:"Michael Smith",
      date:"July 7, 2025 ",
      commentNO :"0",
      comment :"Comments",
      des:"Granite & Marble Flooring Make Classy Walkways",
      text:"Marble"
    },

  ]
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] w-full flex justify-center font-sans '>
          <div className='w-full mt-10 2xl:mt-20 mb-15 2xl:mb-35 '>
              <div className='md:flex justify-between items-center px-10 lg:px-28'>
                  <div>
                      <div className='flex items-center md:pl-2  gap-3'>
                          <div className='bg-black w-18 h-0.5 hidden md:block' ></div>   
                            <h5 className='text-[18px] lg:text-[20px] font-sans font-medium'>BLOG SECTION</h5>
                      </div>
                      <h1 className='text-[22px] 2xl:text-[36px] md:text-[24px] lg:text-[26px] font-sans font-bold mt-2 lg:mt-4 xl:mt-6' >Explore Our Latest Blog Posts</h1>
                  </div>
                  <div className='text-base xl:text-base md:text-[12px]  mt-4 md:mt-0 cursor-pointer font-sans font-normal bg-black text-white px-6 py-3 rounded-md flex items-center justify-between gap-2'>
                      <button className='cursor-pointer' >VIEW MORE</button>
                      <Image src="/teams/Arrow 1.png" alt="image" width={20} height={10}></Image>
                   </div>
               </div>

               <div className='mt-10 px-10 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-15 lg:gap-4'>
                  {items.map((item,index)=>(
                    <div key={index} className='relative'>
                        <div  className='flex flex-col gap-10 '>
                            <div >
                                <Image className='w-[100%]' src={item.img} alt="image" width={540} height={600} ></Image>
                            </div>
                            <div className=''>
                                <div className='flex gap-5 h-auto'>
                                <h3 className='text-[16px] font-semibold'>{item.date}</h3>
                                <div className='bg-[#333333] w-0.5 my-0.5 '></div> 
                                <div className='flex gap-2'>
                                    <h3 className='text-[16px] font-semibold'>{item.commentNO}</h3>                           
                                    <h3 className='text-[16px] font-semibold'>{item.comment}</h3>             
                                </div>     
                                </div>
                                <h4 className='text-[16px] font-semibold  mt-5'>{item.des}</h4>
                            </div>
                            <div className='absolute top-10 xl:top-12 2xl:top-14  left-6 xl:left-8 2xl:left-10 flex flex-col gap-3 w-[60%] md:w-[50%] lg:w-[60%] xl:w-[55%]  2xl:w-[44%]  '>
                                

                            </div>

                        </div>

                        <div className='absolute cursor-pointer top-1/18 left-1/20'>
                            <h1 className='px-4 xl:px-6 py-1 xl:py-2 text-[17px] xl:text-[20px]    font-semibold bg-white'>{item.text}</h1>
                        </div>
                    </div>
                  ))}
                  
               </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sec6ourteam
