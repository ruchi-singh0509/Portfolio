import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div id='home' className='w-full text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 relative overflow-x-hidden py-32 px-4 sm:px-8 md:px-[12%]'>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}>
                {/* Profile image without animated glow and border */}
                <div className="relative flex items-center justify-center">
                    <Image src={assets.profile_img} alt='profile' className='rounded-full w-44 h-44 border-4 border-accent shadow-2xl' />
                </div>
            </motion.div>
            <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className='flex items-end gap-2 text-lg md:text-xl mb-2 font-Ovo justify-center text-accent drop-shadow-lg'>
                Hello, I'm Ruchi Singh <Image src={assets.hand_icon} alt='waving hand' className='w-6' />
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-xl sm:text-3xl lg:text-5xl font-Ovo drop-shadow-xl text-text-light dark:text-text-dark px-4'>
                As a full-stack developer, I deliver robust, scalable, and user-focused web applications using modern technologies.
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto font-Ovo text-base text-text-light/80 dark:text-text-dark/80 px-4'>
                I am dedicated to solving complex challenges and creating seamless digital experiences.
            </motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 mb-8 justify-center'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ruchisinghmech0509@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='btn flex items-center justify-center gap-2 bg-gradient-to-r from-secondary via-accent to-pink-400 text-white shadow-2xl border-2 border-white/30 hover:from-accent hover:to-secondary focus:ring-4 focus:ring-accent/40 focus:outline-none animate-gradient-move text-lg px-8 py-3 rounded-full font-semibold min-w-[160px]'>
                    Email
                </motion.a>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/Resume Ruchi Singh.fs.__.pdf"
                    download
                    className='btn flex items-center justify-center gap-2 bg-gradient-to-r from-secondary via-accent to-pink-400 text-white shadow-2xl border-2 border-white/30 hover:from-accent hover:to-secondary focus:ring-4 focus:ring-accent/40 focus:outline-none animate-gradient-move text-lg px-8 py-3 rounded-full font-semibold min-w-[160px]'>
                    Resume <Image src={assets.download_icon} alt='download resume' className='w-4' />
                </motion.a>
            </div>
        </div>
    )
}

export default Header
