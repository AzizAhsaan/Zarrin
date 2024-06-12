import Image from 'next/image'
import React from 'react'

const EmailSection = () => {
  return (
    <section className='w-full h-[450px] flex flex-col items-center  relative bg-primary overflow-hidden mt-6'>
        
                    <Image src="/vectorHeroSection.svg" width={460} height={460} className="absolute left-0 top-[-45px] rotate-[5deg]" alt="" />

        <div className='w-full h-full  container'>
        <div className='flex flex-col items-center justify-center size-full gap-4'>
            <p className='text-center text-5xl font-bold text-white'>Get our stories delivered From <br /> us to your inbox weekly.</p>
            <div className='flex flex-row items-center gap-2 mt-3'>
                <input className='h-[50px] bg-white  placeholder:p-3 w-[300px] rounded-lg' placeholder='Your email' />
                <div className='border border-white text-center text-white py-3 px-5  rounded-lg '>Get started</div>
            </div>
        <p className="text-[#BBBBBB] max-w-[600px] text-center ">Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>

            </div>
        </div>

            <Image src="/vectorHeroSection.svg" width={400} height={400} className="absolute right-0 bottom-[-45px] rotate-[5deg]" alt="" />

    </section>
  )
}

export default EmailSection