import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {

    const fullScreenRef = useRef(null)
    const fullNavLinksRef = useRef(null)
    const { navOpen, setNavOpen } = useContext(NavbarContext)
    
    useEffect(() => {
  if (navOpen) {
    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
  } else {
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  }

  return () => {
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  };
}, [navOpen]);

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.01,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }

    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

    function handleLinkClick() {
        setNavOpen(false)
    }

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fixed inset-0 z-50 w-screen h-screen overflow-hidden text-white fullscreennav'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className='navlink flex w-full justify-between p-3 items-start'>
                    <Link onClick={() => {
                        handleLinkClick()
                    }} to="/" className='cursor-pointer'>
                        <h1
                            className="font-[font3] text-6xl" 
                            style={{ color: 'white' }}
                        >
                            HUB72
                        </h1>
                    </Link>
                    <div onClick={() => {
                        handleLinkClick()
                    }} className='lg:h-28 lg:w-27 h-22 w-24 relative cursor-pointer group'>
                        <div className='lg:h-38 h-32 w-0.5 lg:-rotate-44 -rotate-47 origin-top absolute bg-white group-hover:bg-[#D3FD50]'></div>
                        <div className='lg:h-38 h-32 w-0.5 right-0 lg:rotate-44 rotate-47 origin-top absolute bg-white group-hover:bg-[#D3FD50]'></div>
                    </div>
                </div>
                <div className='py-12 mt-15 lg:mt-0 cursor-pointer'>
                    <div className='link origin-top relative border-gray-500 border-t-1 '>
                        <h1 className='font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>work</h1>
                        <Link onClick={() => {
                            handleLinkClick()
                        }} to="/projects">
                            <div className='moveLink w-full overflow-hidden absolute text-black flex top-0 bg-[#D3FD50]'>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>see everything</h2>
                                    <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>see everything</h2>
                                    <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>see everything</h2>
                                    <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>see everything</h2>
                                    <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='link origin-top relative border-gray-500 border-t-1 '>
                        <h1 className='font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>agency</h1>
                        <Link onClick={() => {
                            handleLinkClick()
                        }} to="/agence">
                            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>know us</h2>
                                    <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>know us</h2>
                                    <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>know us</h2>
                                    <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>know us</h2>
                                    <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='link origin-top relative border-gray-500 border-t-1 '>
                        <h1 className='font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>contact</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>send us a fax</h2>
                                <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>send us a fax</h2>
                                <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>send us a fax</h2>
                                <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>send us a fax</h2>
                                <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-gray-500 border-y-1 '>
                        <h1 className='font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>blog</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>read articles</h2>
                                <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>read articles</h2>
                                <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>read articles</h2>
                                <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[14vw] text-center leading-[0.8] lg:pt-6 pt-3 uppercase'>read articles</h2>
                                <img className='lg:h-22 h-13 rounded-full shrink-0 lg:w-60 w-35 object-cover' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav