import React from 'react'

const Sec2contact = () => {
  return (
    <div className='flex justify-center'>
        <div className='max-w-[2050px] w-full flex justify-center'>
            <div className='w-[95%] lg:flex justify-center m-5 md:m-10 xl:m-20 gap-10'>
               <div className='lg:w-[45%]'> 
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-3 md:gap-5 text-[14px] md:text-[16px]'>
                          <div className='w-7 md:w-13 h-[2px] bg-[#c5c1c1]'></div>
                          <h4 className='text-[#383636]' >OUR CONTACT</h4>
                        </div>
                        <h1 className='text-[22px] md:text-[24px] xl:text-[26px] 2xl:text-[30px] font-semibold'>Get in touch with us</h1>
                        <p className='text-[#383636] text-[16px]'>Have questions or need assistance? Feel free to get in touch with our team — we’re here to help with any queries about our products, services, or appointments.</p>
                    </div>
                    <div className='mt-2'>
                        <div className='border-b-2 border-[#D9D9D9] py-4 2xl:py-7 '>
                            <div className='flex items-start gap-4 md:gap-6 text-[16px]'>
                                <img src="https://d2ati23fc66y9j.cloudfront.net/studiomarmi/contact-us/home-icon.svg" alt="home" />
                                <div>
                                     <h3>Visit A Office</h3>   
                                     <p className='text-[#383636] text-[16px] mt-2'>Shuwaikh Industrial-2 - Block 1 - St 14 - Parcel 82 - PACI NO 90133746</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='border-b-2 border-[#D9D9D9] py-4'>
                            <div className='flex items-start gap-4 md:gap-6 text-[16px]'>
                                <img src="https://d2ati23fc66y9j.cloudfront.net/studiomarmi/contact-us/contact-us-phone-icon.svg" alt="contact"/>
                                <div>
                                     <h3>Contact-us</h3>   
                                     <p className='text-[#383636] text-[16px] mt-2'>+ (567) 1234-567-8900</p>
                                </div>
                            </div>
                        </div>
                        <div className='py-4'>
                            <div className='flex items-start gap-4 md:gap-6 text-[16px]'>
                                <img className='mt-[2px]' src="https://d2ati23fc66y9j.cloudfront.net/studiomarmi/contact-us/mail-icon.svg" alt="mail"/>
                                
                                <div>
                                  <h3>Email-us</h3>   
                                   <p className='text-[#383636] text-[16px] mt-2'>info@peacefulthemes.com</p>
                                </div>
                            </div>
                        </div>
                    </div> 
               </div> 
               
                <div className="lg:w-[60%] mt-5 md:mt-10 lg:m-0">
                   <div className="relative overflow-hidden rounded-md pb-[75%] sm:pb-[65%] 2xl:pb-[50%]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3478.6088436177984!2d47.94890008619227!3d29.323147588698493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDE5JzIzLjMiTiA0N8KwNTcnMTMuNiJF!5e0!3m2!1sen!2sin!4v1755866298453!5m2!1sen!2sin"
                            className="absolute top-0 left-0 w-full h-full rounded-md border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>               
            </div>
        </div>
    </div>
  )
}

export default Sec2contact