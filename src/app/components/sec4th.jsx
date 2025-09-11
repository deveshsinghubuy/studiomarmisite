import React from 'react'

const Sec4th = () => {

    const card=[
        {
            id:"01", 
            title:"Polished Finish", 
            para:"A polished stone finish gives a glossy, reflective surface that highlights natural patterns and colors. It provides easy cleaning and water resistance, making it ideal for luxury interiors such as marble floors, countertops, and decorative walls.",
            color :"#e4e3f7"
        },

        {
            id:"02", 
            title:"Honed Finish", 
            para:"The honed finish creates a smooth, matte surface without excessive shine. It preserves the natural color while offering a soft, contemporary look, suitable for floors, walls, and elegant furniture tops.",color :"#fde6eb"
        },
        {
            id:"03", 
            title:"Leather Finish", 
            para:"A leather stone finish in Kuwait offers a textured, matte look with a soft touch, adding character to kitchen countertops, bathroom vanities, and wall cladding. It resists fingerprints and watermarks, making it both stylish and practical.",
            color :"#fff7ec"
        },
        {
            id:"04",
            title:"Soft Leather Finish", 
            para:"The soft leather finish provides a more subtle texture than standard leathering, offering a refined, smooth surface with gentle depth. It’s perfect for modern interiors, luxury projects, and spaces that demand uniqueness.",
            color :"#e9feeb"
        },
    ]

  return (
    <div className='flex justify-center font-poppins bg-white'>
        <div className='max-w-[1900px] w-full flex justify-center'>
            <div className='w-[90%] mt-5 2xl:mt-15 xl:mt-13 lg:mt-10 md:mt-10 flex flex-col  gap-2 2xl:gap-3 xl:gap-2 lg:gap-1.5 md:gap-3'>
                <h1 className='text-[28px] 2xl:text-[40px] xl:text-[34px] lg:text-[30px] font-semibold'>Stone Finishes – Style & Texture by Studio Marmi</h1>
               
                <p className='text-[12px] text-justify 2xl:text-[16px] xl:text-[13px]  lg:text-[11px] md:text-[12px] text-[#666666] font-normal 2xl:leading-6.5 xl:leading-5  lg:leading-4.5'>At Studio Marmi Kuwait, we provide premium stone finishing services to enhance both beauty and functionality. Our expert techniques bring out the best in marble, granite, quartzite, dolomite, and crystals, ensuring each project is finished to perfection.</p>
              
                <div className='grid gap-7 md:grid-cols-2 lg:grid-cols-4 2xl:gap-22 xl:gap-8 lg:gap-10 md:gap-10 2xl:py-12 xl:py-10 lg:py-5 md:py-2'>
                    {card.map((c, index)=>(

                        <div key={index} className='md:bg-white p-4 m-2 sm:m-0 2xl:p-8 xl:p-5 lg:p-3 md:p-6 hover:shadow-2xl hover:scale-105 md:hover:scale-110 rounded-lg duration-1000 cursor-pointer'>
                            
                            <div className='w-[60px] h-[60px] 2xl:w-[60px] 2xl:h-[60px] xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[50px] md:h-[50px] rounded-full relative left-4 mb-5' style={{backgroundColor: c.color}}>
                                <h1 className='text-[40px] 2xl:text-[40px] xl:text-[36px] lg:text-[30px] md:text-[34px] font-bold absolute -left-4 '>{c.id}</h1>
                            </div>
                            <h1 className='2xl:text-[24px] xl:text-[22px] lg:text-[18px] md:text-[20px] font-semibold mb-5'>{c.title}</h1>
                            <p className='2xl:text-[15px] xl:text-[12px] lg:text-[10px] md:text-[14px] font-normal text-[#676767]'>{c.para}</p>
                            
                        </div>
                         
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sec4th
