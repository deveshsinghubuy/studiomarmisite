'use client'
import React from 'react'
import Image from 'next/image'
import {useState} from 'react'

const Sec3rd = () => {

    const[menu,setMenu]= useState(false);
    const[menu2,setMenu2]= useState(false);
    const[menu3,setMenu3]= useState(false);

    const[value,setValue]= useState('All');
    const[value2,setValue2]= useState('Red');
    const[value3,setValue3]= useState('All');


    const tiles = [
           
            { title: "Bianco Carrara C", heading2: "Marble Italy", image:"/tiles/Rectangle 49.svg" },
            { title: "Bianco Carrara Venato", heading2: "Marble Italy",image:"/tiles/Rectangle 50.svg" },
            { title: "Bianco Carrara CD", heading2: "Marble Italy",image:"/tiles/Rectangle 51.svg"  },
            { title: "Biancospino", heading2: "Marble Italy",image:"/tiles/Rectangle 52.svg"  },
            { title: "Bianco Venatino", heading2: "Marble Italy",image:"/tiles/Rectangle 53.svg"  },
            { title: "Bianco Pencilvein", heading2: "Marble Italy",image:"/tiles/Rectangle 54.svg"  },
            { title: "Bianco Gioia", heading2: "Marble Italy",image:"/tiles/Rectangle 55.svg"  },
            { title: "Bianco Venato Gioia", heading2: "Marble Italy",image:"/tiles/Rectangle 56.svg"  },
            { title: "Bianco Arni", heading2: "Marble Italy",image:"/tiles/Rectangle 57.svg"  },
            { title: "Bianco Bruille", heading2: "Marble Italy",image:"/tiles/Rectangle 58.svg"  },
            { title: "Statuario Classico", heading2: "Marble Italy",image:"/tiles/Rectangle 59.svg"  },
            { title: "Statuario Vena Fine", heading2: "Marble Italy",image:"/tiles/Rectangle 60.svg"  },
            { title: "Statuario Vena Grande", heading2: "Marble Italy",image:"/tiles/Rectangle 61.svg"  },
            { title: "Statuario Venato", heading2: "Marble Italy",image:"/tiles/Rectangle 62.svg"  },
            { title: "Statuarietto", heading2: "Marble Italy",image:"/tiles/Rectangle 63.svg"  },
        ];

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
    <div className='flex justify-center min-h-screen'>
        <div className='max-w-[1900px] w-full flex justify-center bg-no-repeat bg-cover' style={{backgroundImage:"url('/images/sec3BG.svg')"}} >
            <div className='w-[95%] md:w-[90%] lg:w-[88%] mt-6 md:mt-10'>
                
                <div className='flex justify-center'>
                    <div className='flex md:flex-nowrap flex-wrap gap-6 md:gap-7 lg:gap-10 shadow-2xl p-4 md:p-6 lg:p-5 border border-[#FFCD9B] bg-white rounded-lg'>
                        
                        <div className='flex-none basis-40 sm:basis-40 lg:basis-35 md:basis-25'>
                            <h1 className='text-sm md:text-base text-[#1C1C1C] font-normal'>Type</h1>
                            <div className='mt-1'>
                                <ul>
                                    <li>
                                        <span onClick={()=>handletype()} className='flex justify-between items-center text-[#1C1C1C99] text-[14px] border-b border-[#999999]'>
                                            <h1 >{value}</h1>
                                            
                                            <button className='cursor-pointer'><Image  src="/images/downArrow.png" alt='images' width={15} height={20}></Image></button>
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
                        <div className='flex-none basis-40 sm:basis-40 lg:basis-35 md:basis-25'>
                            <h1 className='text-sm md:text-base text-[#1C1C1C] font-normal'>Color</h1>
                             <div className='mt-1'>
                                <ul>
                                    <li>
                                        <span onClick={()=>handlecolor()} className='flex justify-between items-center text-[#1C1C1C99] text-[14px] border-b border-[#999999]'>
                                            <h1 >{value2}</h1>
                                            
                                            <button className='cursor-pointer'><Image  src="/images/downArrow.png" alt='images' width={15} height={20}></Image></button>
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
                        <div className='flex-none basis-40 sm:basis-40 lg:basis-35 md:basis-25'>
                            <h1 className='text-sm md:text-base text-[#1C1C1C] font-normal'>Origin</h1>
                             <div className='mt-1'>
                                <ul>
                                    <li>
                                        <span onClick={()=>handleorigin()} className='flex justify-between items-center text-[#1C1C1C99] text-[14px] border-b border-[#999999]'>
                                            <h1 >{value3}</h1>
                                            
                                            <button className='cursor-pointer'><Image  src="/images/downArrow.png" alt='images' width={15} height={20}></Image></button>
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
                        <div  className='px-15 lg:px-15 md:px-10 py-4 lg:py-4 md:py-3 bg-black text-white rounded-md'>
                            <button className='cursor-pointer'>Search</button>
                        </div>
                    </div>
                </div>
                
                <div className='mt-10 md:mt-15'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 gap-y-9'>
                        
                        {tiles.map((t,index)=>(
                            <div key={index} className='flex flex-col gap-1 text-center md:text-left'>
                                <h2 className='text-base font-semibold'>{t.title}</h2>
                                <h5 className='text-sm font-normal'>{t.heading2}</h5>
                                <div className='mt-5 mb-10 flex justify-center md:justify-start'>
                                    <Image className='w-[70%] md:w-[90%] rounded-lg shadow-md shadow-black/40' src={t.image} alt="imagetiles" width={510} height={523}></Image>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sec3rd
