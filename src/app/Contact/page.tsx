import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <section className='flex flex-col items-center'>
        <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-3xl font-bold'>Get in Touch</h1>
            <p className='text-center text-[#999999] mt-2'>Contact us to publish your content and show ads to our website <br /> and get a good reach.</p>
        </div>

        <div className='my-6 grid grid-cols-3 grid-rows-1 gap-x-5'>
            <div className='w-full h-[200px] bg-white rounded-xl px-12 py-6 flex flex-col items-center gap-4 justify-center'>
                <div className='size-14  bg-primary rounded-full flex items-center justify-center'>
                    <Image src="/Home.svg" width={20} height={20} alt='Home icon' />
                </div>
                <h1 className='text-primary font-semibold'>Office</h1>
                <p>Victoria Street, London, UK</p>
            </div>

            <div className='w-full h-[200px] bg-white rounded-xl px-12 py-6 flex flex-col items-center gap-4 justify-center'>
                <div className='size-14  bg-primary rounded-full flex items-center justify-center'>
                    <Image src="/email.svg" width={20} height={20} alt='Home icon' />
                </div>
                <h1 className='text-primary font-semibold'>Email</h1>
                <p>hello@zarrin.com</p>
            </div>

            <div className='w-full h-[200px] bg-white rounded-xl px-12 py-6 flex flex-col items-center gap-4 justify-center'>
                <div className='size-14  bg-primary rounded-full flex items-center justify-center'>
                    <Image src="/phone.svg" width={20} height={20} alt='Home icon' />
                </div>
                <h1 className='text-primary font-semibold'>Phone</h1>
                <p>(001) 2342 3451</p>
            </div>
        </div>

        <div className='mt-20 h-[450px] w-full relative flex flex-col items-center  justify-center'>
            <Image src="ContactPageMap.svg" alt='Contact Page Map' className='object-cover' fill/>
        </div>
        <div className='w-full relative h-[500px]'>
        <div className='bg-white  h-[500px] w-[600px] absolute  top-[-80px] p-10  left-0 right-0 m-auto rounded-xl flex flex-col items-center'>
            <div className='grid grid-cols-2 grid-rows-2 w-full gap-x-4  gap-y-6'>
                <div className='flex flex-col  items-start gap-1'>
                    <h1 className='text-sm text-black font-semibold'>Name</h1>
                    <input className='w-full h-[40px] rounded-lg border border-[#C4C4C4]' />
                </div>
                <div className='flex flex-col  items-start gap-1'>
                    <h1 className='text-sm text-black font-semibold'>Email</h1>
                    <input className='w-full h-[40px] rounded-lg border border-[#C4C4C4]' />
                </div>
                <div className='flex flex-col  items-start gap-1'>
                    <h1 className='text-sm text-black font-semibold'>Phone</h1>
                    <input className='w-full h-[40px] rounded-lg border border-[#C4C4C4]' />
                </div>
                <div className='flex flex-col  items-start gap-1'>
                    <h1 className='text-sm text-black font-semibold'>Subject</h1>
                    <input className='w-full h-[40px] rounded-lg border border-[#C4C4C4]' />
                </div>
            </div>
            <div className='flex flex-col items-start w-full mt-8'>
            <h1 className='text-sm text-black font-semibold'>Message</h1>
            <div className='w-full h-[120px] rounded-lg border border-[#C4C4C4]'></div>

            </div>

            <div className='bg-[#7C4EE4] px-8 py-4 mt-8 text-white rounded-xl'>Send Message</div>
        </div>

        </div>

    </section>
  )
}

export default ContactPage