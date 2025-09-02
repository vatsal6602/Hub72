import React from 'react'
import Video from '../home/Video'

const HomeHeroText = () => {
  return (
    <div className=' w-screen font-[font1] mt-72 lg:mt-0 pt-5 text-center'>
      <div className='lg:text-[9vw] text-[11vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>The spark for</div>
      <div className='lg:text-[9vw] text-[11vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>all<div className='lg:h-[7vw] lg:w-[16vw] h-[9vw] w-[20vw] rounded-full lg:-mt-2 -mt-1 overflow-hidden' ><Video /></div>things</div>
      <div className='lg:text-[9vw] text-[11vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>creative</div>
    </div>
  )
}

export default HomeHeroText