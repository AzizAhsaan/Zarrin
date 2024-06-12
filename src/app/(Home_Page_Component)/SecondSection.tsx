import Image from 'next/image'
import React from 'react'

const SecondSection = () => {
  return (
    <section className='flex h-[650px] flex-col items-center justify-center relative overflow-hidden container'>
        <div className='w-full h-[calc(500px-50px)] relative'>
            <Image src="/SectionSectionContainerImage.svg" alt='Section section container image' fill className='object-cover rounded-xl' />
                <div className='w-[720px] h-[300px] bg-white drop-shadow-md flex flex-col gap-1 items-start p-4 absolute bottom-[-90px] rounded-xl right-0'>
                    <div className='flex flex-row items-center gap-4'>
                        <h1 className='text-sm text-black font-bold'>DEVELOPMENT</h1>
                        <h1 className='text-[999999]'>16 March 2023</h1>
                    </div>
                    <h1 className='text-3xl font-bold text-black'>
                    How to make a Game look more attractive with New VR & AI Technology
                    </h1>
                    <p className='max-w-[calc(100%-50px)]'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                    </p>

                    <button className='bg-white text-primary border border-primary p-2 rounded-lg '>Read more</button>
                </div>
        </div>
    </section>
  )
}

export default SecondSection