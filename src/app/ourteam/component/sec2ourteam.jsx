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
      img:"/teams/Group 31.png",
      name:"Emily Davis",
      des:"Senior Architect"
    },
    {
      img:"/teams/Group 30.png",
      name:"David Wilson",
      des:"Construction Manager"
    },
    {
      img:"/teams/Group 32.png",
      name:"Olivia Brown",
      des:"Interior Designer"
    }

  ]
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] w-full flex justify-center'>
          <div className='w-full mt-10 2xl:mt-20 mb-15 2xl:mb-35 '>
              <div className='md:flex justify-between items-center border-b border-[#D9D9D9] pb-6 xl:pb-8 2xl:pb-10 px-10 lg:px-28'>
                  <div>
                      <div className='flex items-center md:pl-2  gap-3'>
                          <div className='bg-black w-18 h-0.5 hidden md:block' ></div>   
                            <h5 className='text-[18px] lg:text-[20px] font-sans font-medium'>OUR TEAM</h5>
                      </div>
                      <h1 className='text-[22px] 2xl:text-[36px] md:text-[24px] lg:text-[30px] font-sans font-bold mt-2 lg:mt-6' >Meet Our Professional Team</h1>
                  </div>
                  <div className='text-base xl:text-base md:text-[12px]  mt-4 md:mt-0 cursor-pointer font-sans font-normal bg-black text-white px-6 py-3 rounded-md flex items-center justify-between gap-2'>
                      <button className='cursor-pointer' >READ MORE</button>
                      <Image src="/teams/Arrow 1.png" alt="image" width={20} height={10}></Image>
                   </div>
               </div>

               <div className='mt-10 px-10 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-15 lg:gap-4'>
                  {team.map((team,index)=>(
                        <div key={index} className='flex flex-col gap-10 relative '>
                          <div >
                            <Image className='w-[100%]' src={team.img} alt="image" width={540} height={600} ></Image>
                          </div>
                          <div className='text-center'>
                            <h3 className='text-[20px] font-semibold'>{team.name}</h3>
                            <h4 className='text-[16px] font-normal'>{team.des}</h4>
                          </div>
                          <div className='absolute top-10 xl:top-12 2xl:top-14  left-6 xl:left-8 2xl:left-10 flex flex-col gap-3 w-[60%] md:w-[50%] lg:w-[60%] xl:w-[55%]  2xl:w-[44%]  '>
                              <div className='bg-black rounded-lg p-1.5 cursor-pointer flex justify-center w-[14%]'><Image className=' w-[100%]' src="/teams/Vector-3.svg" alt='image' width={100} height={100}></Image></div>
                              <div className='bg-black rounded-lg p-1.5 cursor-pointer flex justify-center w-[14%]'><Image className=' w-[100%]' src="/teams/Vector-1.svg" alt='image' width={100} height={100}></Image></div>
                              <div className='bg-black rounded-lg p-2 cursor-pointer flex justify-center w-[14%]'><Image className=' w-[100%]' src="/teams/Vector-2.svg" alt='image' width={100} height={100}></Image></div>

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
