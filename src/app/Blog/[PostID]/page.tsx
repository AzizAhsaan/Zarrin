import PopularPosts from '@/app/(Home_Page_Component)/PopularPosts'
import Image from 'next/image'
import React from 'react'

const SinglePost = () => {
  return (
   <section className='flex flex-col container'>
    <div className='flex flex-row items-start gap-4 mt-12'>
        <h1 className='text-sm font-bold'>DEVELOPMENT</h1>
        <span className='text-sm text-[#999999]'>16 March 2023</span>
    </div>
    <h1 className='font-bold text-5xl my-8 leading-tight'>
    How to make a Game look more attractive <br /> with New VR & AI Technology
    </h1>

    <div className='h-[500px] w-full relative'>
        <Image src="/SectionSectionContainerImage.svg" alt="photo" fill className='object-cover rounded-xl' />
    </div>

    <div className='p-12 h-full'>
        <p className='text-lg'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
        </p>
        <p className='text-lg mt-4'>
        We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products. Today, we’re excited to share our early progress. Developers and businesses can now try new APIs and products that make it easy, safe and scalable to start building with Google’s best AI models through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace, we’re introducing new features that help people harness the power of generative AI to create, connect and collaborate.
        </p>
        <div className='p-8'>
            <div className='flex flex-row items-first'>
                <div className='w-[8px] h-[5rem] bg-primary'></div>
                <p className='italic text-3xl ml-8 text-[#666666]'>“People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.”</p>
            </div>
            <h1 className='ml-4 font-semibold mt-2'>– Pedro Domingos</h1>
            
        </div>
        <p className='text-lg mt-4'>More than 3 billion people already benefit from AI-powered features in Google Workspace, whether it’s using Smart Compose in Gmail or auto-generated summaries in Google Docs. Now, we’re excited to take the next step and bring a limited set of trusted testers a new set of features that makes the process of writing even easier. In Gmail and Google Docs, you can simply type in a topic you’d like to write about, and a draft will be instantly generated for you. So if you’re a manager onboarding a new employee, Workspace saves you the time and effort involved in writing that first welcome email. From there, you can elaborate upon or abbreviate the message or adjust the tone to be more playful or professional — all in just a few clicks. We’ll be rolling out these new experiences to testers in the coming weeks.</p>
        <div className='h-[500px] w-full relative rounded-lg'>
            <Image fill alt='' className='object-cover p-20 rounded-lg' src="/SinglePostImage.svg"/>
        </div>
        <p className='text-lg mt-2 font-semibold'>We’re so excited by the potential of generative AI, and the opportunities it will unlock — from helping people express themselves creatively, to helping developers build brand new types of applications, to transforming how businesses and governments engage their customers and constituents. Stay tuned for more to come in the weeks and months ahead.</p>
    </div>
    <PopularPosts cols={3} />
   </section>
  )
}

export default SinglePost