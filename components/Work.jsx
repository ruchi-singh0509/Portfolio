import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const SkeletonCard = () => (
    <div className="aspect-square card bg-gray-200 dark:bg-gray-700 animate-pulse border-accent/20 dark:border-accent-dark/30" />
);

const Work = (isDarkMode) => {
    const [imgLoaded, setImgLoaded] = useState(Array(workData.length).fill(false));
    const handleImgLoad = idx => {
        setImgLoaded(prev => {
            const arr = [...prev];
            arr[idx] = true;
            return arr;
        });
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-16 scroll-mt-20 relative'>
            {/* Background gradient for visual interest */}
            <div className="absolute -top-32 right-0 w-[700px] h-[420px] bg-gradient-to-br from-accent/10 via-secondary/10 to-accent-dark/10 dark:from-black/60 dark:via-darkTheme/60 dark:to-background-dark/60 rounded-full blur-2xl opacity-60 -z-10" />
            {/* Subtle background pattern */}
            <div className="absolute left-0 bottom-0 w-1/2 h-32 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-accent/5 via-secondary/5 to-transparent -z-10" />
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo text-accent drop-shadow-lg'>Portfolio</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className='text-center text-5xl font-Ovo mb-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-pink-400 to-secondary dark:from-accent-dark dark:via-accent dark:to-white animate-gradient-move'>Recent Projects</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-lg text-text-light/80 dark:text-text-dark/80'>
                Explore my portfolio to see a selection of projects demonstrating my expertise in frontend, backend, and AI/ML development.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-10'>
                {workData.map((project, index) => (
                    <motion.div
                        whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(236,72,153,0.15)' }}
                        transition={{ duration: 0.3 }}
                        className='aspect-square card bg-cover bg-center relative cursor-pointer group border-accent/20 dark:border-accent-dark/30 overflow-hidden animate-gradient-move'
                        key={index}
                        style={{ backgroundImage: 'none' }}>
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-br from-accent/30 via-secondary/20 to-accent-dark/30" />
                        <Image
                            src={project.bgImage}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover', zIndex: 0 }}
                            placeholder='blur'
                            blurDataURL='/work-1.png'
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className='bg-white/90 dark:bg-darkTheme/90 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex flex-col items-center justify-between duration-500 group-hover:bottom-7 shadow-xl z-20'>
                            <div>
                                <h2 className='font-semibold text-accent'>{project.title}</h2>
                                <p className='text-sm text-gray-700 dark:text-white/80'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-accent w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#7C3AED] group-hover:bg-gradient-to-br group-hover:from-accent group-hover:via-pink-400 group-hover:to-secondary group-hover:shadow-xl transition group-hover:scale-110 animate-gradient-move'>
                                <a href={project.link || 'https://github.com/ruchi-singh0509?tab=repositories'}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={`View ${project.title} project`}>
                                    <Image src={assets.send_icon} alt='external link icon' className='w-5' />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Work
