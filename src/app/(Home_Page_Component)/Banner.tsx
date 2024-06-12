import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section className="flex h-[500px] flex-col items-center justify-between relative bg-primary overflow-hidden">
    <Image src="/vectorHeroSection.svg" width={460} height={460} className="absolute left-0 top-[-45px] rotate-[5deg]" alt="" />

<div className="w-full z-50 h-full relative container flex flex-row items-center justify-between">
<div className="size-full flex flex-col items-start justify-center gap-4">
<span className="text-xl text-white">Featured Post</span>
<h1 className="text-6xl font-bold tracking-wider text-white leading-[55px]">
How AI will  <br />Change the Future
</h1>
<p className="max-w-[400px] text-base text-white text-justify">The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>
<button className="bg-white text-black px-6 py-3 rounded-lg mt-4 font-semibold">Read more</button>
</div>
<div className="flex items-center size-full justify-center">
<Image alt="Banner image" src="/bannerImagePlaceholder.svg" width={470} height={470}  />

</div>
</div>
<Image src="/vectorHeroSection.svg" width={460} height={460} className="absolute right-0 bottom-[-45px] rotate-[5deg]" alt="" />

</section>
  )
}

export default Banner