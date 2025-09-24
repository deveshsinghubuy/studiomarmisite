import React from 'react'
import Image from 'next/image'
import { list } from 'postcss'

const slidData = [
    {
        title:"Recent Posts",
        data:[
               {list:"how to protect a bathroom with marble surface?"},
               {list:"in home Choose a light floor if at all possible"},
               {list:"in home Choose a light floor if at all possible"},
               {list:"in home Choose a light floor if at all possible"},
               {list:"in home Choose a light floor if at all possible"},
        ],
    },
       {
        title:"Recent Comments",
        data:[
               {list:"how to protect a bathroom with marble surface?"},
               {list:"in home Choose a light floor if at all possible"},
               {list:"in home Choose a light floor if at all possible"},
               {list:"in home Choose a light floor if at all possible"},
               {list:"in home Choose a light floor if at all possible"},
        ],
    },
       {
        title:"Archives",
        data:[
               {list:"November 2022"},
               {list:"October 2022"},

        ],
    },
       {
        title:"Categories",
        data:[
               {list:"Laminate"},
               {list:"Marble"},
               {list:"Stone"},
               {list:"Laminate"},
               {list:"Uncategorized"},
               {list:"Wooden"},
        ],
    },
       {
        title:"Meta",
        data:[
               {list:"Log in"},
               {list:"Entries feed"},
               {list:"Comments feed"},
               {list:"WordPress.org"},
        ],
    }
]


const blogdata = [

    {
        img:"/blog/Group 56.png", title: "How to protect a bathroom with marble surface? ", des:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." ,tag:"STONE"
    },

    {
        img:"/blog/Group 55.png", title: "How to protect a bathroom with marble surface? ", des:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." ,tag:"LAMINATE"
    },
    {
        img:"/blog/Group 53.png", title: "How to protect a bathroom with marble surface? ", des:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", tag:"MARBLE" 
    },

    {
        img:"/blog/Group 54.png", title: "How to protect a bathroom with marble surface? ", des:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." ,tag:"MARBLE"
    },

] 
const Sec2blog = () => {
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] w-full flex justify-center font-sans my-20'>
            <div className='w-[90%] flex gap-4  xl:gap-10'>
               {/* left */}
                <div className='lg:w-[35%] 2xl:w-[25%] md:w-[70%] flex flex-col gap-5'>
                    
                    <div className='flex items-center bg-[#F4F4F5] rounded-xl xl:rounded-xl md:rounded-sm p-4 px-6 xl:p-4 xl:px-6  md:p-2 md:px-3'>
                        <input type="text" placeholder='Search...' className='xl:text-[16px] md:text-[10px] bg-white rounded-l-sm xl:p-3 md:p-2 w-full focus:outline-none'/>
                        <button className='bg-black xl:p-4 md:p-2 '><Image src="/images/Vector-3.svg" alt='iamge' width={18} height={18} /> </button>
                    </div>

                    {slidData.map((slid, index) => (
                    <div key={index} className='items-center bg-[#F4F4F5]  rounded-xl xl:rounded-xl md:rounded-sm p-3 xl:p-6 xl:py-8'>
                        <h1 className='xl:text-[20px] md:text-[12px] font-semibold'>{slid.title}</h1>
                        <ul className='xl:text-[16px] md:text-[10px] font-normal p-1 xl:p-3 flex flex-col md:gap-2 xl:gap-4'>
                            
                            {slidData[index].data.map((data, i) => (
                                <li key={i} className='flex items-start gap-2  pr-4'>
                                <Image className='mt-[5px] lg:mt-2 w-[2%]' src="/blog/leftArrow.png" alt='image' width={6} height={6}></Image>
                                <p>{data.list}</p> 
                            </li> 
                            ))}  

                        </ul>
                    </div>
                    ))}

                    <div className='items-center bg-[#F4F4F5] rounded-xl xl:rounded-xl md:rounded-sm p-3 xl:p-6 xl:py-8'>
                        <h1 className='xl:text-[20px] md:text-[12px] font-semibold'>Tags</h1>
                        <div className='lg:p-3 xl:text-[16px]  md:text-[9px] font-normal grid md:grid-cols-2 2xl:grid-cols-3 mt-2 md:gap-2 xl:gap-4'>
                             <p className='text-center content-center p-2 bg-[#D2DBDB]' >Flooring </p>
                             <p className='text-center content-center p-2  bg-[#D2DBDB]' >Laminate </p>
                             <p className='text-center content-center p-2 bg-[#D2DBDB]' >Marbles </p>  
                             <p className='text-center content-center p-2 bg-[#D2DBDB]' >Stone </p>
                        </div>
                    </div> 

                </div>
                {/* right */}
                <div className='grid gap-10'>
                    {blogdata.map((blog,i)=>(
                    <div key={i} className='bg-[#F4F4F5] relative'>
                        <div> <Image src={blog.img} alt='image' width={1253} height={485}/></div>
                        <div className='flex flex-col md:gap-2 xl:gap-6 p-3 xl:py-10  xl:p-5'>
                             <div className='flex gap-5 h-auto'>
                               <h3 className='md:text-[10px] xl:text-[16px] font-semibold'>July 7,2025 </h3>
                               <div className='bg-[#333333] w-0.5 my-0.5 '></div> 
                               <div className='flex gap-2'>
                                   <h3 className=' md:text-[10px] xl:text-[16px] font-semibold'>0</h3>                           
                                   <h3 className=' md:text-[10px] xl:text-[16px] font-semibold'>Comments</h3>             
                               </div>     
                             </div>

                             <h1 className='md:text-[20px] xl:text-[30px] 2xl:text-[40px] font-semibold leading-7'>{blog.title}</h1>
                             <p className='w-[95%] xl:w-[72%] '>{blog.des}</p>
                             <div>
                                <button className=' text-base xl:text-base md:text-[12px]  mt-4 md:mt-0 cursor-pointer font-sans font-normal bg-black text-white py-3 px-4 xl:px-6  xl:py-3 rounded-md flex items-center gap-2' >
                                <h1>READ MORE</h1>
                                <Image className='w-5 h-auto md:w-4 md:h-auto xl:w-5' src="/teams/Arrow 1.png" alt="image" width={20} height={10}></Image>
                                </button>
                             </div>
                        </div>

                        <div className='absolute cursor-pointer top-1/30 left-1/30'>
                            <h1 className='px-4 xl:px-6 py-1 xl:py-2 text-[12px] xl:text-[20px]    font-semibold bg-white'>{blog.tag}</h1>
                        </div>
                     
                    </div>
                    ))
                            
                    }
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sec2blog
