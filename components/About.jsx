import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

function About({ isDarkMode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about'
            className='w-full px-4 sm:px-8 md:px-[12%] py-16 scroll-mt-20 relative flex flex-col items-center'
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo text-white drop-shadow-lg'>
                Introduction
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo mb-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-pink-400 to-secondary dark:from-accent-dark dark:via-accent dark:to-white animate-gradient-move'>
                About Me
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='w-full flex justify-center my-10'
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='w-full'>
                    <p className='mb-10 w-full font-Ovo text-lg text-white/90 text-center'>
                        <span className="font-bold text-accent">I am an enthusiastic full-stack developer</span> with expertise in web and mobile applications. I specialize in building scalable solutions using React, Node.js, Flutter, and cloud platforms. I excel at solving complex problems, optimizing performance, and ensuring exceptional user experiences. In addition to coding, I mentor peers, contribute to team success, and embrace new challenges in the dynamic tech industry.
                    </p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className='card p-6 cursor-pointer border border-white/20 hover:border-accent hover:shadow-xl hover:-translate-y-1 duration-500 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-xl shadow-lg'
                                key={index}
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title + ' icon'} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-white '>{title}</h3>
                                <p className='text-gray-800 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='my-6 text-white font-Ovo text-xl text-center drop-shadow-lg'>
                        Tools I Use
                    </motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className='flex items-center gap-3 sm:gap-5 flex-wrap justify-center'
                    >
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square card border-accent/20 dark:border-accent-dark/30 bg-gradient-to-br from-accent/10 via-pink-400/10 to-secondary/10 animate-gradient-move relative group'
                                key={index}
                            >
                                <Image src={tool.img} alt={tool.label + ' icon'} className='w-5 sm:w-7' />
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-black/80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-20">
                                    {tool.label}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
