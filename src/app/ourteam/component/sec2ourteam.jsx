import React from 'react'
import Image from 'next/image'
const Sec2 = () => {

  const team =[
    {
      img:"/teams/Group 34.png",
      name:"James Thornton",
      des:"Interior Architect"
    },
    {
      img:"/teams/Group 33.png",
      name:"Sarah Johnson",
      des:"Project Manager"
    },
    {
      img:"/teams/Group 35.png",
      name:"Michael Smith",
      des:"Lead Designer"
    },
    {
      img:"/teams/Group 32.png",
      name:"Emily Davis",
      des:"Senior Architect"
    },
    {
      img:"/teams/Group 31.png",
      name:"David Wilson",
      des:"Construction Manager"
    },
    {
      img:"/teams/Group 30.png",
      name:"Olivia Brown",
      des:"Interior Designer"
    }

  ]
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] w-full flex justify-center'>
          <div className='w-full my-20 '>
              <div className='md:flex justify-between items-center border-b border-[#D9D9D9] pb-10 px-10 lg:px-20'>
                  <div>
                      <div className='flex items-center gap-5'>
                          <div className='bg-black w-30 h-0.5 hidden md:block' ></div>   
                            <h5 className='text-[20px] font-medium'>Our team</h5>
                      </div>
                      <h1 className='text-[24px] 2xl:text-[36px] md:text-[26px] lg:text-[30px] font-semibold mt-2 lg:mt-5' >Meet Our Professional Team</h1>
                  </div>
                  <div className='text-[16px]  mt-4 md:mt-0 cursor-pointer font-semibold bg-black text-white px-7 py-4 rounded-md flex items-center gap-2'>
                      <button >Read More</button>
                      <Image src="/teams/Arrow 1.png" alt="image" width={20} height={10}></Image>
                   </div>
               </div>

               <div className='mt-10 px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-15 lg:gap-10'>
                  {team.map((team,index)=>(
                        <div key={index} className='flex flex-col gap-10 relative '>
                          <div >
                            <Image className='w-[100%]' src={team.img} alt="image" width={540} height={600} ></Image>
                          </div>
                          <div className='text-center'>
                            <h3 className='text-[20px] font-semibold'>{team.name}</h3>
                            <h4 className='text-[16px] font-normal'>{team.des}</h4>
                          </div>
                          <div className='absolute top-14 left-10 flex flex-col gap-3 w-[44%] '>
                              <div className='bg-black rounded-lg p-2 cursor-pointer flex justify-center w-[16%]'><Image className=' w-[100%]' src="/teams/Vector-3.svg" alt='image' width={100} height={100}></Image></div>
                              <div className='bg-black rounded-lg p-2 cursor-pointer flex justify-center w-[16%]'><Image className=' w-[100%]' src="/teams/Vector-2.svg" alt='image' width={100} height={100}></Image></div>
                              <div className='bg-black rounded-lg p-2 cursor-pointer flex justify-center w-[16%]'><Image className=' w-[100%]' src="/teams/Vector-1.svg" alt='image' width={100} height={100}></Image></div>
                         </div>

                        </div>
                  ))}
                  
               </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sec2
