import React from 'react'
import Image from 'next/image'
const Sec3testm = () => {

  const team =[
    {
      img:"/testimonials/Frame 56.png",
      name:"Stone cladding",
      des:"FLOORING"
    },
    {
      img:"/testimonials/Frame 57.png",
      name:"Ceramic",
      des:"LAMINATE"
    },
    {
      img:"/testimonials/Frame 58.png",
      name:"Wall Carpeting",
      des:"STONE"
    },
    {
      img:"/testimonials/Frame 59.png",
      name:"Indore Court",
      des:"LAMINATE"
    },
        {
      img:"/testimonials/Rectangle 45.png",
      name:"Industrial Flooring",
      des:"FLOORING"
    },
    {
      img:"/testimonials/Rectangle 46.png",
      name:"Eco-Friendly-Flooring",
      des:"MARBLE"
    },


  ]
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] w-full flex justify-center'>
          <div className='w-full mt-10 2xl:mt-20 mb-15 2xl:mb-35'>
              <div className='md:flex justify-between items-center border-b border-[#D9D9D9] pb-6 xl:pb-8 2xl:pb-10 px-10 lg:px-28'>
                  <div>
                      <div className='flex items-center md:pl-2  gap-3'>
                          <div className='bg-[#895740] w-18 h-0.5 hidden md:block' ></div>   
                            <h5 className='text-[18px] lg:text-[20px] text-[#895740] font-sans font-medium'>RECENT WORK</h5>
                      </div>
                      <h1 className='text-[22px] 2xl:text-[36px] md:text-[24px] lg:text-[30px] font-sans font-bold mt-2 lg:mt-6' >Recent Case Studies</h1>
                  </div>
                  <div className='text-base xl:text-base md:text-[12px]  mt-4 md:mt-0 cursor-pointer font-sans font-normal bg-black text-white px-6 py-3 rounded-md flex items-center justify-between gap-2'>
                      <button className='cursor-pointer' >DISCOVER MORE</button>
                      <Image src="/teams/Arrow 1.png" alt="image" width={20} height={10}></Image>
                   </div>
               </div>

               <div className='mt-10 px-10 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-15 lg:gap-4'>
                  {team.map((team,index)=>(
                        <div key={index} className={`flex flex-col gap-10 relative ${index >3 ? "col-span-2":""} `}>
                          <div >
                            <Image className='w-[100%]' src={team.img} alt="image" width={540} height={600} ></Image>
                          </div> 

                          <div className='absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between p-10    '>
                                <div>
                                    <h1 className='text-[22px] text-white'>{team.name}</h1>
                                    <h3 className='text-amber-400/70'>{team.des}</h3>
                                </div>
                                <div className='flex items-center'>
                                    <div className='absolute ml-2'><Image src="/teams/Arrow 1.png" alt='image' width={20} height={20}></Image></div>
                                    <div className='w-10 h-10 rounded-full bg-amber-700'></div>
                                </div>
                          </div>                      

                        </div>
                  ))}
                  
               </div>
               <div className='flex justify-center mt-10'>
                <div className='bg-black rounded-md px-6 py-3 text-white  flex items-center gap-3 cursor-pointer'>
                  <button className=''>LOAD MORE</button>
                  <Image src="/teams/Arrow 1.png" alt="image" width={20} height={10}></Image>
                </div> 
               </div>
                 
            </div>
        </div>
        
    </div>
  )
}

export default Sec3testm
