"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Nav = () => {
    const [input, setInput] = useState('');
    const [box, setbox] = useState(false);
    const wrapperRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const router = useRouter();



    const handelinput = (e) => {
        const value = e.target.value;
        setInput(value);
        if (value.trim() === "") {
            setbox(false);
        } else {
            setbox(true);
        }
    }


    const boxdata = [
        { img: "/tiles/image 7.svg", title: "Carpets & Rugs Tiles", price: "5000.00", dprice: "7000.00" },
        { img: "/tiles/image 6.svg", title: "Laminate Flooring Tiles", price: "4000.00", dprice: "6000.00" },
        { img: "/tiles/image 8.svg", title: "Vinyl Flooring Tiles", price: "3000.00", dprice: "5000.00" },
        { img: "/tiles/image 6.svg", title: "Stone Tiles", price: "2000.00", dprice: "3500.00" },
        { img: "/tiles/image 7.svg", title: "Wooden Planks Tiles", price: "4500.00", dprice: "6500.00" },
        { img: "/tiles/image 8.svg", title: "Marble Flooring Tiles", price: "6000.00", dprice: "8000.00" },
        { img: "/tiles/image 6.svg", title: "Granite Slabs", price: "5500.00", dprice: "7500.00" },
        { img: "/tiles/image 7.svg", title: "Ceramic Tiles", price: "3500.00", dprice: "5000.00" },
        { img: "/tiles/image 8.svg", title: "Mosaic Patterns Tiles", price: "7000.00", dprice: "9500.00" },
        { img: "/tiles/image 6.svg", title: "Outdoor Pavers Tiles", price: "2500.00", dprice: "4000.00" },
        { img: "/tiles/image 7.svg", title: "Wall Cladding", price: "4800.00", dprice: "6200.00" },
        { img: "/tiles/image 8.svg", title: "Terracotta Tiles", price: "3000.00", dprice: "4500.00" }
    ];

    const filteredData = boxdata
        .filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
        .slice(0, 6);


    useEffect(() => {

        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setbox(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
    const handleScroll = () => {
        const sec = document.querySelectorAll(".sec2nd");
        const sec2 = sec[0]; 
        if (!sec2) return;

        if (window.scrollY >= sec2.offsetTop - 90) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className='flex justify-center relative z-50'>
            <div className='max-w-[2050px] w-full flex justify-center fixed'>
                <nav className={`w-full  lg:p-3 2xl:p-4  flex justify-center transition-colors  duration-500 ${scrolled ? "bg-black" : "bg-[#CCCCCCCC]"}`}>
                    <div className='w-[100%]  lg:w-[95%] flex flex-wrap gap-10 gap-y-5 lg:gap-30'> 
                        
                        <div className='flex flex-2 md:flex-1 pt-4 px-2 lg:p-0 items-center'>
                            <div className='flex w-[80%] md:w-[50%] lg:w-[65%]  2xl:w-[60%] '>
                                <Image className='w-[20%]  cursor-pointer' src='/images/Vector-4.png' alt="image" width={40} height={40} onClick={() => setOpen(!open)}></Image>
                                <Image className='w-[80%] cursor-pointer' onClick={()=>{router.push('/')}} src='/images/Vector.svg' alt="image" width={40} height={40}></Image>
                            </div>
                             <div className={` fixed top-0 left-0 h-full w-[40%] md:w-[30%] lg:w-[20%]  text-[16px] md:text-[20px] md:pl-10 text-black bg-white shadow-2xl shadow-black p-6 box-border z-50 transform transition-transform duration-300 ease-in-out ${
                                            open ? "translate-x-0" : "-translate-x-[115%]"
                                        }`}>
                                        <ul className='flex flex-col gap-5   font-semibold '>
                                            <li><Link href='/' onClick={()=>setOpen(false)}>Home</Link></li>
                                            <li><Link href='/blog' onClick={()=>setOpen(false)}>Blog</Link></li>
                                            <li><Link href='/service' onClick={()=>setOpen(false)}>Service</Link></li>
                                            <li><Link href='/gallery' onClick={()=>setOpen(false)}>Gallery</Link></li>
                                            <li><Link href='/list' onClick={()=>setOpen(false)}>List</Link></li>
                                            <li><Link href='/portfolio' onClick={()=>setOpen(false)}>Portfolio</Link></li>
                                            <li><Link href='/testimonials' onClick={()=>setOpen(false)}>Testimonials</Link></li>
                                            <li><Link href='/ourteam' onClick={()=>setOpen(false)}>Our Team</Link></li>
                                        </ul>
                                     </div>

                            {open &&<div 
                                    onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-40">
                                </div>}
                        </div>

                        <div className=' lg:flex-2 w-[100%] px-5 py-2 lg:p-0 bg-white lg:bg-transparent order-2  lg:order-none' ref={wrapperRef}>
                            <div className='bg-white gap-3 border lg:border-none rounded-4xl py-1.5 px-4 flex justify-between items-center'>
                                <input className='outline-none px-4 border-r border-neutral-400 w-[90%] text-[12px] md:text-[14px] 2xl:text-[16px]' value={input} onChange={handelinput} type='text' placeholder='Search Stones . . .'></input>
                                <button className='bg-black p-2 rounded-full w-[10%] md:w-[4%] lg:w-[6%] 2xl:w-[5%]'><Image className="w-[100%]" src="/images/Vector-3.svg" alt='image' width={15} height={15}></Image></button>
                            </div>
                        </div>

                        {box && filteredData.length > 0 && (
                            <div className='absolute h-[100px] md:h-auto overflow-y-auto xl:p-6 md:p-2 p-3 2xl:top-25 lg:top-18 md:top-33 top-35 2xl:left-[529px] xl:left-[400px] lg:left-[330px] md:left-10 left-5 rounded-sm md:rounded-lg bg-white 2xl:w-[41%] md:w-[41%] w-[90%] shadow-2xl z-50 shadow-black  box-border grid md:grid-cols-2 2xl:gap-4 xl:gap-y-1'>
                                {filteredData.map((box, i) => ( 
                                    <div key={i} className='flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2'>
                                        <div className='w-[20%]'>
                                            <Image src={box.img} alt="image" width={50} height={50}></Image>
                                        </div>
                                        <div>
                                            <h1 className='2xl:text-[20px] xl:text-[14px] md:text-[12px] text-[16px]'>{box.title}</h1>
                                            <div className='flex gap-4 items-center 2xl:text-[18px] xl:text-[14px] md:text-[10px] text-[14px]'>
                                                <h3 className='text-neutral-600 '>{box.price}</h3>
                                                <h3 className='text-neutral-300 line-through '>{box.dprice}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))} 
                            </div>
                        )}
                        <div className='flex-1 flex justify-end items-center pt-4 px-4 lg:p-0 gap-4 md:gap-3 2xl:gap-7'>
                            <div className='h-full flex items-center text-white text-shadow-lg font-sans gap-3 md:p-0'>
                                <h1 className='font-bold text-[20px] md:text-[18px] lg:text-[20px] 2xl:text-[20px]'>EN</h1>
                                <div className='w-[3px] font-normal pr-2 text-[20px] 2xl:text-[30px] hidden md:block'>|</div>
                                <h1 className='font-normal text-[14px] 2xl:text-[18px] hidden md:block'>AR</h1>
                            </div>
                            <div className='flex items-center justify-center gap-4 w-auto 2xl:w-[40%] md:gap-5 2xl:gap-8'>
                                <Image className='w-[14%] hidden md:block' src="/images/Vector-3.svg" alt="image" width={20} height={20}></Image>
                                <Image  className='w-auto md:w-[14%] ' src="/images/Vector-1.svg" alt="image" width={20} height={20}></Image>
                                <Image  className='w-auto md:w-[14%] ' src="/images/Vector-2.svg" alt="image" width={20} height={20}></Image>
                            </div>

                            {/* <div className="md:hidden">
                                <button onClick={() => setIsOpen(!isOpen)}>
                                    <Image src="/images/downArrow.png" alt="menu" width={20} height={20}/>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </nav>

                {/* {isOpen && (
                    <div className="absolute top-20 right-4 bg-[#CCCCCCCC] shadow-lg rounded-lg p-4 px-10 flex flex-col gap-4 md:hidden z-50">
                        <Image src="/images/Vector-3.svg" alt="image" width={25} height={25} />
                        <Image src="/images/Vector-1.svg" alt="image" width={25} height={25} />
                        <Image src="/images/Vector-2.svg" alt="image" width={25} height={25} />
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default Nav
