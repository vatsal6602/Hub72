import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <p className='absolute lg:w-[18vw] w-67 lg:right-10 right-5 leading-relaxed lg:bottom-40 bottom-28 font-[font1] lg:text-sm text-xs'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HUB72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
      <div className='text-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center border-2 lg:border-3 border-white rounded-full px-4 lg:px-9 pt-2 lg:pt-0 uppercase'>
        <Link className='lg:mt-6' to='/projects'>Work</Link>
      </div>
      <div className='text-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center border-2 lg:border-3 border-white rounded-full px-4 lg:px-9 pt-2 lg:pt-0 uppercase'>
        <Link className='lg:mt-6' to='/agence'>Agency</Link>
      </div>
    </div>
  )
}
 
export default HomeBottomText