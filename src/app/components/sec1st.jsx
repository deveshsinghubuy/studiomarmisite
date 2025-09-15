import React from 'react'
import { ArrowRight } from "lucide-react";

const Sec1st = () => {
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1900px] w-full flex justify-center'>
            <div className='w-full h-[800px] flex justify-center items-center bg-[url("/images/sec1BG.svg")] bg-center bg-cover bg-no-repeat '>
                <div className='flex flex-col text-center items-center text-white'>
                        <div className='flex justify-center gap-5'>
                            <div className='flex items-center'>
                                <div className='w-20 h-[1px] bg-white'></div>
                                <div className='bg-white w-2 h-2 rounded-full'></div>
                            </div>
                            <h1>Welcome to studiomarmi</h1>
                            <div className='flex items-center'>
                                <div className='bg-white w-2 h-2 rounded-full'></div>
                                <div className='w-20 h-[1px] bg-white'></div>
                            </div>
                        </div>
                        <h1 className='text-[38px] xl:text-[56px] font-medium  mb-4 md:mb-0'>Stylish Marble Slabs Designs</h1>
                         <button className="flex items-center gap-2 cursor-pointer p-3 py-2 lg:p-5 lg:py-4 rounded-sm text-[14px] lg:text-[16px] font-semibold text-black bg-white transition">
                            GET IN TOUCH
                            <ArrowRight className="w-5 h-5" />
                        </button>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sec1st
