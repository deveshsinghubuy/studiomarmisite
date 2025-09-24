"use client"
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const card = [
    {img:"/list/Rectangle 51.png", title:"Bianco Carrara" },
    {img:"/list/Rectangle 51 (1).png", title:"Bianco Carrara" },
    {img:"/list/Rectangle 51 (2).png", title:"Bianco Carrara" },
    {img:"/list/Rectangle 51 (3).png", title:"Bianco Carrara" },
    {img:"/list/Rectangle 51 (4).png", title:"Bianco Carrara" },
    {img:"/list/Rectangle 51 (5).png", title:"Bianco Carrara" },
    {img:"/list/Rectangle 51 (6).png", title:"Bianco Carrara" },
    {img:"/list/Rectangle 51 (7).png", title:"Bianco Carrara" },
    {img:"/list/Rectangle 51 (8).png", title:"Bianco Carrara" },

]
const Sec2list = () => {

    const[menu,setMenu]= useState(false);
    const[menu2,setMenu2]= useState(false);
    const[menu3,setMenu3]= useState(false);

    const[value,setValue]= useState('All');
    const[value2,setValue2]= useState('Red');
    const[value3,setValue3]= useState('All');



    const handletype = ()=>{
        setMenu(!menu)
    }
    const handlecolor = ()=>{
        setMenu2(!menu2)
    }
      const handleorigin = ()=>{
        setMenu3(!menu3)
    }
    const handeldrop= (e)=>{
        setValue(e);
        setMenu(false);
    }
     const handeldrop2= (e)=>{
        setValue2(e);
        setMenu2(false);
    }
     const handeldrop3= (e)=>{
        setValue3(e);
        setMenu3(false);
    }



  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] w-full flex justify-center font-sans '>
            <div className='w-full'>
                <div className=' flex justify-center md:flex-nowrap flex-wrap gap-6 bg-[#F4F4F5] md:gap-5 p-4 md:p-6 lg:p-10'>
                                        
                    <div className='flex-none basis-40 sm:basis-40 lg:basis-60 md:basis-25'>
                        <h1 className='text-sm text-[#1C1C1C] font-normal'>Type</h1>
                        <div className='mt-2'>
                            <ul>
                                <li>
                                    <span onClick={()=>handletype()} className='p-1 px-2 flex justify-between items-center bg-white text-[#1C1C1C99] text-[14px] border border-[#A6A6A6] rounded-sm'>
                                        <h1 >{value}</h1>
                                        
                                        <button className='cursor-pointer'><Image  src="/images/downArrow.png" alt='images' width={12} height={20}></Image></button>
                                    </span>
                                        
                                    {menu==1 && <ul className='absolute bg-white w-[24%] xl:w-[8%] md:w-[13%] py-2 rounded-md'>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop("one")}>one</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop("two")}>two</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop("three")}>three</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop("All")}>All</li>
                                    
                                    </ul>}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex-none basis-40 sm:basis-40 lg:basis-60 md:basis-25'>
                        <h1 className='text-sm  text-[#1C1C1C] font-normal'>Color</h1>
                        <div className='mt-2'>
                            <ul>
                                <li>
                                    <span onClick={()=>handlecolor()} className='p-1 px-2 flex justify-between items-center bg-white text-[#1C1C1C99] text-[14px] border border-[#A6A6A6] rounded-sm'>
                                        <h1 >{value2}</h1>
                                        
                                        <button className='cursor-pointer'><Image  src="/images/downArrow.png" alt='images' width={12} height={20}></Image></button>
                                    </span>
                                        
                                    {menu2==1 && <ul className='absolute bg-white w-[24%] xl:w-[8%] md:w-[13%] py-2 rounded-md'>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop2("Pink")}>Pink</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop2("Blue")}>Blue</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop2("Green")}>Green</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop2("Red")}>Red</li>
                                    
                                    </ul>}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex-none basis-40 sm:basis-40 lg:basis-60 md:basis-25'>
                        <h1 className='text-sm text-[#1C1C1C] font-normal'>Origin</h1>
                        <div className='mt-2'>
                            <ul>
                                <li>
                                    <span onClick={()=>handleorigin()} className='p-1 px-2 flex justify-between items-center bg-white text-[#1C1C1C99] text-[14px] border border-[#A6A6A6] rounded-sm'>
                                        <h1 >{value3}</h1>
                                        
                                        <button className='cursor-pointer'><Image  src="/images/downArrow.png" alt='images' width={12} height={20}></Image></button>
                                    </span>
                                        
                                    {menu3==1 && <ul className='absolute bg-white w-[24%]  xl:w-[8%] md:w-[13%] py-2 rounded-md'>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop3("one")}>one</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop3("two")}>two</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop3("three")}>three</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handeldrop3("All")}>All</li>
                                    
                                    </ul>}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <div className='flex gap-2'>
                            <div className='cursor-pointer'><Image src="/list/plus.svg" alt='images' width={38} height={38}></Image></div>
                            <div className='cursor-pointer'><Image src="/list/minus.svg" alt='images' width={38} height={38}></Image></div>
                        </div>
                    </div>
                </div>
                <div className='p-20 py-10'>
                    <div className='flex justify-between items-center'>
                        <h2>Showing 1–10 of 17 result</h2>
                        <div className='flex justify-between items-center border border-[#A6A6A6] rounded-sm px-2 py-1'>
                            <input className='outline-none w-40' type='text' placeholder='Default...' />
                            <Image src="/images/downArrow.png" alt='images' width={12} height={20}></Image>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-5 text-center mt-5
                    '>
                        {card.map((data,i)=>(
                            <div key={i}>
                                <div><Image src={data.img} alt='images' width={547} height={547}></Image></div>
                                <h4 className='mt-2 xl:text-[20px]'>{data.title}</h4>
                            </div>  
                        ))}
                                       
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Sec2list
