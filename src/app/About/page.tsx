import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EmailSection from '../(Home_Page_Component)/EmailSection'
import HowWeWork from './(About_Page_Components)/HowWeWork'

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

]
  return (
    <main className=' flex flex-col items-center'>
      <div className='w-full h-full container flex flex-col items-center mb-12'>
      <span className='text-[#666666] text-base font-bold mt-12'>ABOUT US</span>
      <h1 className='text-4xl font-bold text-black mt-4 text-center'>Creative Blog Writting and <br /> publishing site</h1>
      <p className='max-w-[65rem] text-center mt-4'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
      </div>
      <div className='w-full h-[400px] relative container'>
      <Image alt='about us page photo' className='object-cover rounded-lg' fill src="/aboutuspagephoto.svg"/> 
      </div>
      <HowWeWork />


    </main>
  )
}

export default BlogPage