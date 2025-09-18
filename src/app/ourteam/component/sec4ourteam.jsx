import React from 'react'

const data =[
    {
        no:"786+",
        title:"Happy Clients"
    },
    {
        no:"656+",
        title:"Global Exports"
    },
    {
        no:"426+",
        title:"Completed Projects"
    },
    {
        no:"186+",
        title:"Production Plans"
    }   
]
const Sec4ourteam = () => {
  return (
    <div  className='flex justify-center font-sans'>
        <div className='max-w-[1900px] w-full bg-[#2A3037] flex justify-center'>
            <div className='w-full flex justify-center py-5 lg:py-10 2xl:py-12'>
                <div className='w-[88%] grid grid-cols-2 gap-y-5 md:grid-cols-4 text-white '>
                   
                   {data.map((data,i)=>(
                        <div key={i} className=' flex flex-col items-center'>
                            <h1 className='text-[24px] lg:text-[28px] xl:text-[34px] 2xl:text-[60px] font-semibold'>{data.no}</h1>
                            <h3 className='text-[14px] lg:text-[20px] xl:text-[24px] 2xl:text-[24px] font-medium'>{data.title}</h3>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sec4ourteam
