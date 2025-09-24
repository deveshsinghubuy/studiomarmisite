import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Sec2portfolio = () => {

  const team =[
    {
      img:"/portfolio/Rectangle 59.png",
      name:"Stone cladding",
      des:"FLOORING"
    },
    {
      img:"/portfolio/Rectangle 60.png",
      name:"Ceramic",
      des:"LAMINATE"
    },
    {
      img:"/portfolio/Rectangle 61.png",
      name:"Wall Carpeting",
      des:"STONE"
    },
    {
      img:"/portfolio/Rectangle 62.png",
      name:"Indore Court",
      des:"LAMINATE"
    },
        {
      img:"/portfolio/Rectangle 63.png",
      name:"Industrial Flooring",
      des:"FLOORING"
    },

  ]
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] w-full flex justify-center'>
          <div className='w-full mt-10 2xl:mt-20 mb-15 2xl:mb-25'>
             
              <div className='grid grid-cols-2 text-center  md:flex justify-center items-center pb-6 xl:pb-8 2xl:pb-10 px-10 lg:px-28 gap-4'>
                  <Link href="#" className='bg-[#F4F4F5] hover:bg-[#333333] hover:text-white text-[#333333]'><button className=' p-4 text-[16px] font-semibold   cursor-pointer'>All</button></Link>
                  <Link href="#" className='bg-[#F4F4F5] hover:bg-[#333333] hover:text-white text-[#333333]'><button className=' p-4 text-[16px] font-semibold   cursor-pointer'>Flooring</button></Link>
                  <Link href="#" className='bg-[#F4F4F5] hover:bg-[#333333] hover:text-white text-[#333333]'><button className=' p-4 text-[16px] font-semibold   cursor-pointer'>Laminate</button></Link>
                  <Link href="#" className='bg-[#F4F4F5] hover:bg-[#333333] hover:text-white text-[#333333]'><button className=' p-4 text-[16px] font-semibold   cursor-pointer'>Marble</button></Link>
                  <Link href="#" className='bg-[#F4F4F5] hover:bg-[#333333] hover:text-white text-[#333333]'><button className=' p-4 text-[16px] font-semibold   cursor-pointer'>Stone</button></Link>
                  <Link href="#" className='bg-[#F4F4F5] hover:bg-[#333333] hover:text-white text-[#333333]'><button className=' p-4 text-[16px] font-semibold   cursor-pointer'>Tiles</button></Link>
                  <Link href="#" className='bg-[#F4F4F5] hover:bg-[#333333] hover:text-white text-[#333333]'><button className=' p-4 text-[16px] font-semibold   cursor-pointer'>Wooden</button></Link>
               </div>

               <div className='px-10 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 lg:gap-4'>
                  {team.map((team,index)=>(
                        <div key={index} className={`flex flex-col gap-10 relative ${index == 0 || index == 3 || index == 4 ? "md:col-span-2":""} `}>
                          <div >
                            <Image className='w-[100%]' src={team.img} alt="image" width={540} height={600} ></Image>
                          </div> 

                          <div className='absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between p-5 md:p-10    '>
                                <div>
                                    <h1 className='text-[16px] md:text-[22px] text-white'>{team.name}</h1>
                                    <h3 className='text-[14px] md:text-[20px] text-amber-400/70'>{team.des}</h3>
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

export default Sec2portfolio
