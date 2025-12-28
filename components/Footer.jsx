import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Footer = (isDarkMode) => {
    return (
        <footer className='mt-20 relative overflow-hidden'>
            <div className='text-center'>

                <div className='flex items-center w-max gap-3 mx-auto text-lg font-semibold text-white '>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail-icon' className='w-6 drop-shadow-lg brightness-125' />
                    ruchisinghmech0509@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between px-4 sm:px-8 md:mx-[10%] mt-12 py-6 border-t-0 relative'>
                <div className="absolute left-0 right-0 top-0 h-6 bg-gradient-to-t from-border-light/60 via-transparent to-transparent dark:from-border-dark/60 pointer-events-none -z-10" />
                <p className='text-text-light/60 dark:text-text-dark/60 text-sm'> ©2025 Ruchi Singh. All rights reserved. </p>
                <ul className='flex flex-wrap items-center gap-4 sm:gap-8 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a target='_blank' href="https://github.com/ruchi-singh0509/Portfolio.git" rel="noopener noreferrer" className='hover:text-pink-500 transition-colors flex items-center gap-2 group text-white/80'>
                            <svg className='w-6 h-6 group-hover:scale-125 group-hover:text-pink-500 transition-transform duration-300' fill='currentColor' viewBox='0 0 24 24'><path d='M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.23 2.76.11 3.05.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.45 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z' /></svg>
                            Source Code
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="https://github.com/ruchi-singh0509" rel="noopener noreferrer" className='hover:text-pink-500 transition-colors flex items-center gap-2 group text-white/80'>
                            <svg className='w-6 h-6 group-hover:scale-125 group-hover:text-pink-500 transition-transform duration-300' fill='currentColor' viewBox='0 0 24 24'><path d='M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.23 2.76.11 3.05.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.45 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z' /></svg>
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ruchi-singh-100956166" target='_blank' rel="noopener noreferrer" className='hover:text-pink-500 transition-colors flex items-center gap-2 group text-white/80'>
                            <svg className='w-6 h-6 group-hover:scale-125 group-hover:text-pink-500 transition-transform duration-300' fill='currentColor' viewBox='0 0 24 24'><path d='M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z' /></svg>
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
