import React from 'react'

const HowWeWork = () => {
  return (
    <section className='flex w-full h-[500px] flex-col  mt-12  relative  overflow-hidden container !p-0'>
        <span className='text-lg font-bold text-[#666666]'>HOW WE WORK</span>
        <div className='flex flex-row items-end justify-between mt-6'>
            <h1 className='text-5xl font-bold text-black'>I will show you how <br /> our team works</h1>
            <span className='text-[#666666] text-base'>Bring to the table win-win market strategies to ensure <br /> perfect articles. </span>
        </div>

        <div className='grid grid-cols-3 grid-rows-1 gap-2 mt-8'>
            <div className='flex flex-col items-start bg-primary p-3 rounded-lg gap-6'>
                <h1 className='text-5xl font-bold text-white'>01</h1>
                <span className='text-2xl text-white font-bold'>Brainstorming</span>
                <p className='max-w-[calc(100%-20px)] text-white'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated</p>
                <div className='flex flex-col w-[8rem]'>
                    <h1 className='font-bold text-white'>Learn more</h1>
                    <div className='h-[3px] bg-white w-full'></div>
                </div>
            </div>
            <div className='flex flex-col items-start bg-transparent p-3 rounded-lg gap-6'>
                <h1 className='text-5xl font-bold text-[#666666]'>02</h1>
                <span className='text-2xl text-primary font-bold'>Analysing</span>
                <p className='max-w-[calc(100%-20px)] text-[#666666]'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated</p>

            </div>
            <div className='flex flex-col items-start bg-transparent p-3 rounded-lg gap-6'>
                <h1 className='text-5xl font-bold text-[#666666]'>03</h1>
                <span className='text-2xl text-primary font-bold'>News Publishing</span>
                <p className='max-w-[calc(100%-20px)] text-[#B3B3B3]'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated</p>

            </div>

        </div>
        </section>
  )
}

export default HowWeWork