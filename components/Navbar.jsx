import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    const [activeSection, setActiveSection] = useState('home');

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > 50) setIsScroll(true)
            else setIsScroll(false)

            // Active section highlight
            const sections = ['home', 'about', 'services', 'work', 'contact'];
            for (let sec of sections) {
                const el = document.getElementById(sec);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom > 120) {
                        setActiveSection(sec);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10  translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='header background' className='w-full' />
            </div>
            <nav className={`fixed top-0 left-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500
                ${isScroll ? "bg-gradient-to-r from-accent via-pink-400 to-secondary shadow-2xl dark:from-accent-dark dark:via-darkHover dark:to-background-dark" : "bg-white/60 dark:bg-darkTheme/80 shadow-glass backdrop-blur-md"}
            `} role="navigation" aria-label="Main Navigation">
                <a href="#home">
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='site logo' className='w-28 h-14 object-cover rounded-2xl cursor-pointer' />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${isScroll ? "" : "bg-white/70 shadow-glass dark:border dark:border-white/50 dark:bg-darkTheme/70"} `}>
                    <li><a className={`font-Ovo hover:text-accent transition-colors ${activeSection === 'home' ? 'text-accent underline underline-offset-8 decoration-4 decoration-pink-400' : ''}`} href="#home">Home</a></li>
                    <li><a className={`font-Ovo hover:text-accent transition-colors ${activeSection === 'about' ? 'text-accent underline underline-offset-8 decoration-4 decoration-pink-400' : ''}`} href="#about">About</a></li>
                    <li><a className={`font-Ovo hover:text-accent transition-colors ${activeSection === 'services' ? 'text-accent underline underline-offset-8 decoration-4 decoration-pink-400' : ''}`} href="#services">Services</a></li>
                    <li><a className={`font-Ovo hover:text-accent transition-colors ${activeSection === 'work' ? 'text-accent underline underline-offset-8 decoration-4 decoration-pink-400' : ''}`} href="#work">My Work</a></li>
                    <li><a className={`font-Ovo hover:text-accent transition-colors ${activeSection === 'contact' ? 'text-accent underline underline-offset-8 decoration-4 decoration-pink-400' : ''}`} href="#contact">Contact</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)} className="border border-border-light dark:border-border-dark w-12 h-12 flex items-center justify-center shadow-none bg-white/70 dark:bg-darkTheme/70 rounded-full p-0">
                        {isDarkMode ? (
                            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
                            </svg>
                        )}
                    </button>
                    <a className='hidden lg:flex items-center justify-center btn bg-gradient-to-r from-secondary via-accent to-pink-400 text-white hover:from-accent hover:to-secondary border-none ml-4 font-Ovo shadow-xl animate-gradient-move rounded-full px-7 py-3 text-lg font-semibold text-center' href="#contact">
                        Contact
                    </a>
                    <button className={`block md:hidden ml-3 transition-transform duration-500 ${isScroll ? 'scale-110 rotate-90' : ''}`} onClick={openMenu} aria-label="Open menu">
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menu button' className='w-6' />
                    </button>
                </div>
                {/*-- ----- mobile menu ----- --*/}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/90 dark:bg-darkHover dark:text-white shadow-xl transition-transform duration-500'>
                    <div className='absolute right-6 top-6 cursor-pointer' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='close icon' className='w-5' />
                    </div>
                    <li><a className='font-Ovo hover:text-accent transition-colors' onClick={closeMenu} href="#home">Home</a></li>
                    <li><a className='font-Ovo hover:text-accent transition-colors' onClick={closeMenu} href="#about">About</a></li>
                    <li><a className='font-Ovo hover:text-accent transition-colors' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo hover:text-accent transition-colors' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-Ovo hover:text-accent transition-colors' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
