"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const Nav = () => {
    const [input, setInput] = useState('');
    const [box, setbox] = useState(false);
    const wrapperRef = useRef(null);

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

    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <div className='flex justify-center relative z-50'>
            <div className='max-w-[1900px] w-full flex justify-center fixed'>
                <nav className='bg-[#CCCCCCCC] w-full py-4 px-2 md:p-4  flex justify-center'>
                    <div className='w-[100%] lg:w-[90%]  flex gap-10 lg:gap-20'> 
                        
                        <div className='flex flex-1 items-center'>
                            <div className='w-[90%] lg:w-[80%] flex'>
                                <Image className='w-auto' src='/images/Vector-4.png' alt="image" width={40} height={40}></Image>
                                <Image className='w-auto' src='/images/Vector.svg' alt="image" width={40} height={40}></Image>
                            </div>
                        </div>

                        <div className=' flex-2' ref={wrapperRef}>
                            <div className='bg-white rounded-4xl py-1.5 px-4 flex justify-between items-center'>
                                <input className='outline-none px-4 border-r border-neutral-400 w-[90%] text-[16px]' value={input} onChange={handelinput} type='text' placeholder='Search Stones . . .'></input>
                                <button className='bg-black p-3 rounded-full'><Image src="/images/Vector-3.svg" alt='image' width={18} height={18}></Image></button>
                            </div>
                        </div>

                        {box && filteredData.length > 0 && (
                            <div className='absolute top-25 left-1/4 rounded-lg bg-white w-[51%] shadow-2xl z-50 shadow-black p-6 box-border grid grid-cols-2 gap-8'>
                                {filteredData.map((box, i) => ( 
                                    <div key={i} className='flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2'>
                                        <div>
                                            <Image src={box.img} alt="image" width={70} height={60}></Image>
                                        </div>
                                        <div>
                                            <h1 className='text-[22px]'>{box.title}</h1>
                                            <div className='flex gap-4 items-center'>
                                                <h3 className='text-yellow-400 text-[20px]'>{box.price}</h3>
                                                <h3 className='text-red-600 line-through text-[20px]'>{box.dprice}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))} 
                            </div>
                        )}
                        <div className='flex-1 flex justify-end items-center gap-4 md:gap-10'>
                            <div className='h-full flex items-center text-white text-shadow-lg font-sans gap-3 pr-4 md:p-0'>
                                <h1 className='font-bold text-[20px]'>EN</h1>
                                <div className='w-[3px] font-normal pr-2 text-[30px]'>|</div>
                                <h1 className='font-normal text-[18px]'>AR</h1>
                            </div>
                            <div className='md:flex items-center gap-4 hidden md:gap-8'>
                                <Image className='w-auto' src="/images/Vector-3.svg" alt="image" width={25} height={25}></Image>
                                <Image  className='w-auto' src="/images/Vector-1.svg" alt="image" width={25} height={25}></Image>
                                <Image  className='w-auto' src="/images/Vector-2.svg" alt="image" width={25} height={25}></Image>
                            </div>

                            <div className="md:hidden">
                                <button onClick={() => setIsOpen(!isOpen)}>
                                    <Image src="/images/downArrow.png" alt="menu" width={20} height={20}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {isOpen && (
                    <div className="absolute top-20 right-4 bg-[#CCCCCCCC] shadow-lg rounded-lg p-4 px-10 flex flex-col gap-4 md:hidden z-50">
                        <Image src="/images/Vector-3.svg" alt="image" width={25} height={25} />
                        <Image src="/images/Vector-1.svg" alt="image" width={25} height={25} />
                        <Image src="/images/Vector-2.svg" alt="image" width={25} height={25} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Nav
