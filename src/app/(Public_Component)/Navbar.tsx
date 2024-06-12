'use client'
import Image from 'next/image'
import React from 'react'
import { nav } from './navLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type Props = {}

const Navbar = (props: Props) => {
    const pathname = usePathname().split('/')[1] as string
  return (
    <nav className='h-[60px] w-full bg-white flex flex-row justify-between container'>
    <Link href="/"> <Image  src="/Logo.svg" width={120} height={100} alt='Logo photo' /></Link>
        <div className='flex flex-row items-center gap-4'>
            <div className='flex flex-row items-center gap-4'>
                {nav.map((link) => (
                    <Link className={`text-base font-bold ${pathname === link.linkTitle ? "text-primary" : "text-black"}`} key={link.id} href={link.link}>{link.title}</Link>
                ))}
            </div>
        </div>
    </nav>
  )
}

export default Navbar