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
    <div className='flex justify-center font-poppins'>
        <div className='max-w-[1900px] w-full flex justify-center'>
            <div className='w-[90%] mt-15 flex flex-col gap-3'>
                <h1 className='text-[40px] font-semibold'>Stone Finishes – Style & Texture by Studio Marmi</h1>
                <p className='text-[16px] text-[#666666] font-normal leading-6.5 '>At Studio Marmi Kuwait, we provide premium stone finishing services to enhance both beauty and functionality. Our expert techniques bring out the best in marble, granite, quartzite, dolomite, and crystals, ensuring each project is finished to perfection.</p>
                <div className='grid grid-cols-4 gap-22 py-12'>
                    {card.map((c, index)=>(

                        <div key={index} className='bg-white p-8 hover:shadow-2xl hover:scale-110 rounded-lg    duration-1000 cursor-pointer'>
                            
                            <div className='w-[60px] h-[60px] rounded-full relative left-4 mb-5' style={{backgroundColor: c.color}}>
                                <h1 className='text-[40px] font-bold absolute -left-4 '>{c.id}</h1>
                            </div>
                            <h1 className='text-[24px] font-semibold mb-5'>{c.title}</h1>
                            <p className='text-[15px] font-normal text-[#676767]'>{c.para}</p>
                            
                        </div>
                         
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sec4th
