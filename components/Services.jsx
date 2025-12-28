import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services'
            className='w-full px-4 sm:px-8 md:px-[12%] py-16 scroll-mt-20 relative flex flex-col items-center'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo text-white  drop-shadow-lg'>What I Offer</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo mb-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-pink-400 to-secondary dark:from-accent-dark dark:via-accent dark:to-white animate-gradient-move'>My Services</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-lg text-text-light/80 dark:text-text-dark/80'>
                I provide comprehensive development, integration, and deployment services for both backend and frontend applications.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-auto gap-8 my-10 w-full'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        className='card p-10 cursor-pointer border border-white/20 hover:border-accent hover:shadow-lg hover:-translate-y-1 duration-500 bg-white/40 dark:bg-white/5 backdrop-blur-md flex flex-col items-center text-center rounded-2xl shadow-md'>
                        <Image src={icon} alt={title + ' icon'} className='w-10 mb-4' />
                        <h3 className='text-lg my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80 mb-6'>
                            {description}
                        </p>

                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services
