import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[310px] w-full bg-white flex flex-col justify-center gap-8 items-center container'>
        <Image src="/Logo.svg" width={150} height={150} className='mt-3' alt='logo' />
        <div className='flex flex-row items-center gap-12'>
            <span>Home</span>
            <span>Blog</span>
            <span>About</span>
            <span>Contact us</span>
        </div>
        <div className='flex flex-row items-center gap-6'>
            <div className='w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg'>
                FB
            </div>
            <div className='w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg'>
                IG
            </div>
            <div className='w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg'>
                LN
            </div>
            <div className='w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg'>
                YT
            </div>
        </div>
        <div className='h-[1px] w-full bg-primary'></div>
        <p>Copyright Ideapeel Inc © 2023. All Right Reserved</p>
    </footer>
  )
}

export default Footer