import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EmailSection from '../(Home_Page_Component)/EmailSection'

const BlogPage = () => {
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
    {
      id:7,
      category:"DEVELOPMENT",
      date:"16 March 2023",
      title:"How to make a Game look more attractive with New VR & AI Technology",
      paragraph:"Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
      image:"/SectionSectionContainerImage.svg"
  },
  {
      id:8,
      category:"DEVELOPMENT",
      date:"16 March 2023",
      title:"How to make a Game look more attractive with New VR & AI Technology",
      paragraph:"Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
      image:"/SectionSectionContainerImage.svg"
  },
  {
      id:9,
      category:"DEVELOPMENT",
      date:"16 March 2023",
      title:"How to make a Game look more attractive with New VR & AI Technology",
      paragraph:"Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
      image:"/SectionSectionContainerImage.svg"
  },
]
  return (
    <main className='min-h-screen flex flex-col items-center'>
      <div className='w-full h-full container flex flex-col items-center mb-12'>
      <span className='text-[#666666] text-base font-bold mt-12'>OUR BLOGS</span>
      <h1 className='text-4xl font-bold text-black mt-4'>Find our all blogs from here</h1>
      <p className='max-w-[45rem] text-center mt-4'>our blogs are written from very research research and well known writers writers so that  we can provide you the best blogs and articles articles for you to read them all along</p>
      <div className='grid grid-cols-3 grid-rows-3 gap-5 mt-4'>
            {posts.map((post) => (
                            <div key={post.id} className='h-[500px] w-full  flex flex-col gap-4'>
                            <div className='h-[50%] w-full relative'>
                            <Image src={post.image}  alt='photo' className='object-cover rounded-lg' fill />
                            </div>
                            <div className='flex flex-col items-start h-[50%] gap-3'>
                            <div className='flex flex-row items-center gap-4'>
                                <h1 className='text-sm text-black font-bold'>{posts[0].category}</h1>
                                <h1 className='text-[#999999]'>{posts[0].date}</h1>
                            </div>
                            <h1 className='text-lg font-bold text-black leading-[30px]'>{posts[0].title}</h1>
                            <p className='text-sm max-w-[calc(100%-20px)] text-[#999999]'>{posts[0].paragraph}</p>
                            <Link href="" className='text-primary underline font-bold'>Read more...</Link> 
            
                            </div>
                        </div>
            ))}
        </div>

      </div>

    </main>
  )
}

export default BlogPage