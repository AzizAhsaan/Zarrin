import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'

const RecentPosts = () => {
    const posts = [
        {
            id:1,
            category:"DEVELOPMENT",
            date:"16 March 2023",
            title:"How to make a Game look more attractive with New VR & AI Technology",
            paragraph:"Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
            image:"/SectionSectionContainerImage.svg"
        },
        {
            id:2,
            category:"DEVELOPMENT",
            date:"16 March 2023",
            title:"How to make a Game look more attractive with New VR & AI Technology",
            paragraph:"Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
            image:"/SectionSectionContainerImage.svg"
        },
        {
            id:3,
            category:"DEVELOPMENT",
            date:"16 March 2023",
            title:"How to make a Game look more attractive with New VR & AI Technology",
            paragraph:"Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
            image:"/SectionSectionContainerImage.svg"
        },
        {
            id:4,
            category:"DEVELOPMENT",
            date:"16 March 2023",
            title:"How to make a Game look more attractive with New VR & AI Technology",
            paragraph:"Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
            image:"/SectionSectionContainerImage.svg"
        },
    ]
  return (
    <section className='flex min-h-[500px] flex-col items-center  relative  overflow-hidden container'>
        <div className='w-full flex flex-row justify-between'>
            <h1 className='text-3xl font-bold text-black'>Our Recent Post</h1>
            <button className='bg-primary text-white px-6 py-3 rounded-lg'>View all</button>
        </div>

        <div key={posts[0].id} className='h-[300px]  flex flex-row   gap-12 mt-12'>
            <div className='w-[50%] h-full relative rounded-lg'> 
                <Image src={posts[0].image} alt='image' className='object-cover rounded-lg' fill />
            </div>
            <div className='w-[50%] flex flex-col items-start justify-start gap-6 '>
                <div className='flex flex-row items-center gap-4'>
                    <h1 className='text-sm text-black font-bold'>{posts[0].category}</h1>
                    <h1 className='text-[#999999]'>{posts[0].date}</h1>
                </div>
                <h1 className='text-3xl font-bold text-black leading-[40px]'>{posts[0].title}</h1>
            <p className='text-sm max-w-[calc(100%-10px)] text-[#999999]'>{posts[0].paragraph}</p>
            <button className=' text-primary border border-primary px-4 py-2 rounded-lg'>Read more</button>
            </div>
        </div>

        <div className='flex flex-row items-center justify-between gap-3 mt-10  w-full'>
        {posts.slice(1,).map((post) => (
            <div className='h-[600px] w-full  flex flex-col gap-4'>
                <div className='h-[50%] w-full relative'>
                <Image src={post.image}  alt='photo' className='object-cover rounded-lg' fill />
                </div>
                <div className='flex flex-col items-start h-[50%] gap-3'>
                <div className='flex flex-row items-center gap-4'>
                    <h1 className='text-sm text-black font-bold'>{posts[0].category}</h1>
                    <h1 className='text-[#999999]'>{posts[0].date}</h1>
                </div>
                <h1 className='text-xl font-bold text-black leading-[30px]'>{posts[0].title}</h1>
                <p className='text-sm max-w-[calc(100%-20px)] text-[#999999]'>{posts[0].paragraph}</p>
                <Link href={`/Blog/${posts[0].id}`} className='text-primary underline font-bold'>Read more...</Link> 

                </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default RecentPosts