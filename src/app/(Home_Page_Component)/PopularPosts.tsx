import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface Props{
    cols:number

}
const PopularPosts = (props:Props) => {
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
        {
            id:5,
            category:"DEVELOPMENT",
            date:"16 March 2023",
            title:"How to make a Game look more attractive with New VR & AI Technology",
            paragraph:"Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
            image:"/SectionSectionContainerImage.svg"
        },
        {
            id:6,
            category:"DEVELOPMENT",
            date:"16 March 2023",
            title:"How to make a Game look more attractive with New VR & AI Technology",
            paragraph:"Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
            image:"/SectionSectionContainerImage.svg"
        },

    ]
  return (
    <section className='flex flex-col items-center  relative  overflow-hidden container'>
        <div className='w-full flex flex-row justify-between'>
            <h1 className='text-3xl font-bold text-black'>Popular posts</h1>
            <button className='bg-primary text-white px-6 py-3 rounded-lg'>View all</button>
        </div>
        <div className='h-full grid grid-cols-3 gap-5 mt-4'>
            {posts.slice(0,props.cols).map((post) => (
                            <div key={post.id} className='h-[550px] w-full  flex flex-col gap-4'>
                            <div className='h-[50%] w-full relative'>
                            <Image src={post.image}  alt='photo' className='object-cover rounded-lg' fill />
                            </div>
                            <div className='flex flex-col items-start h-[50%] gap-3'>
                            <div className='flex flex-row items-center gap-4'>
                                <h1 className='text-sm text-black font-bold'>{post.category}</h1>
                                <h1 className='text-[#999999]'>{post.date}</h1>
                            </div>
                            <h1 className='text-lg font-bold text-black leading-[30px]'>{post.title}</h1>
                            <p className='text-sm max-w-[calc(100%-20px)] text-[#999999]'>{post.paragraph}</p>
                            <Link href={`/Blog/${post.id}`} className='text-primary underline font-bold'>Read more...</Link> 
            
                            </div>
                        </div>
            ))}
        </div>

    </section>
  )
}

export default PopularPosts