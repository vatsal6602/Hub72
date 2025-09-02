import React, { useContext, useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'


const Navbar = () => {

    const navGreenRef1 = useRef(null)
    const navGreenRef2 = useRef(null)
    const navGreenRef3 = useRef(null)

    const { navOpen, setNavOpen } = useContext(NavbarContext)
    const { navColor, setNavColor } = useContext(NavbarColorContext)
    const menuRef = useRef(null)
    const location = useLocation()
    useEffect(() => {
        if (menuRef.current) {
            if (location.pathname === '/projects' || location.pathname === '/agence') {
                menuRef.current.classList.remove('lg:h-13')
                menuRef.current.classList.add('lg:h-30')
            } else {
                menuRef.current.classList.remove('lg:h-30')
                menuRef.current.classList.add('lg:h-13')
            }
        }
    }, [location.pathname])

    gsap.from(".tab",{
        y:-200,
        stagger:0.2,
        duration:0.5,
        ease:"power1.inOut"
    })
    gsap.to(".tab",{
        delay: 0.8,
        y: 0,
        stagger:0.2,
        duration:0.5,
        ease:"power1.inOut"
    })



    return (
        <div className='fixed top-0 left-0 w-full z-50 flex items-start justify-between'>
            <div className='lg:p-3 p-2 cursor-pointer'>
                <Link to="/">
                    <h1
                        className="font-[font3] text-6xl"
                        style={{ color: navColor }}
                    >
                        HUB72
                    </h1>
                </Link>
            </div>
            <div className="flex">
                {/* Home (smallest) */}
                {/* Home (smallest) */}
                {location.pathname !== '/' && (
                    <Link
                        to="/"
                        onMouseEnter={() => (navGreenRef1.current.style.height = '100%')}
                        onMouseLeave={() => (navGreenRef1.current.style.height = '0%')}
                        className="tab group h-15 cursor-pointer bg-black relative lg:w-[22vw] w-32 
               overflow-hidden transition-all duration-700 ease-in-out hidden lg:block"
                    >
                        <div
                            ref={navGreenRef1}
                            className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full z-0"
                        ></div>
                        <div className="group-hover:text-black absolute bottom-1 left-3 text-white text-xl z-10 uppercase">
                            Home
                        </div>
                    </Link>
                )}

                {/* Agence (medium) */}
                {location.pathname !== '/' && (
                    <Link
                        to={location.pathname === '/agence' ? '/projects' : '/agence'}
                        onMouseEnter={() => (navGreenRef2.current.style.height = '100%')}
                        onMouseLeave={() => (navGreenRef2.current.style.height = '0%')}
                        className="tab group h-23 cursor-pointer bg-black relative lg:w-[27vw] w-36 
               overflow-hidden transition-all duration-700 ease-in-out hidden lg:block"
                    >
                        <div
                            ref={navGreenRef2}
                            className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full z-0"
                        ></div>
                        <div className="group-hover:text-black absolute bottom-1 left-3 text-white text-xl z-10 uppercase">
                            {location.pathname === '/agence'
                                ? 'Work'
                                : location.pathname === '/projects'
                                    ? 'Agence'
                                    : 'Agence'}
                        </div>
                    </Link>
                )}



                {/* Menu (biggest, your existing one) */}
                <div
                    ref={menuRef}
                    onClick={() => setNavOpen(true)}
                    onMouseEnter={() => navGreenRef3.current.style.height = '100%'}
                    onMouseLeave={() => navGreenRef3.current.style.height = '0%'}
                    className="tab group h-20 cursor-pointer bg-black relative lg:w-[16vw] w-44 
             overflow-hidden transition-all duration-700 ease-in-out"
                >
                    <div ref={navGreenRef3} className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full z-0"></div>
                    <div className="absolute lg:top-7 top-4 lg:right-8 right-6 flex flex-col items-end gap-1 z-10">
                        <div className="lg:w-14 w-10 h-0.5 bg-white group-hover:bg-black"></div>
                        <div className="lg:w-8 w-6 h-0.5 bg-white group-hover:bg-black"></div>
                    </div>
                    <div className="absolute bottom-1 left-2 text-white text-xl group-hover:text-black z-10 block uppercase">
                        Menu
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar