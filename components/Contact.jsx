import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        setStatus("");
        const formData = new FormData(event.target);
        formData.append("access_key", "144a9cca-48cf-450d-a3a8-8b1ee5bfb20f");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            setStatus("success");
            event.target.reset();
        } else {
            setResult(data.message);
            setStatus("error");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact' className='w-full px-4 sm:px-8 md:px-[12%] py-16 scroll-mt-20 relative'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo text-white drop-shadow-lg'>Contact</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo mb-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-pink-400 to-secondary dark:from-accent-dark dark:via-accent dark:to-white animate-gradient-move'>Get in Touch</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-lg text-text-light/80 dark:text-text-dark/80'>
                I welcome your questions, comments, and feedback. Please use the form below to reach out.
            </motion.p>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto card p-10 shadow-xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-accent-dark/20 rounded-2xl'>
                <div className='grid grid-cols-auto gap-6 mt-4 mb-8'>
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className='flex-1 p-3 outline-none border border-border-light dark:border-border-dark rounded-md bg-white text-gray-800 dark:bg-darkHover/30 dark:text-white' type="text" placeholder='Enter your name' required name='name' />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className='flex-1 p-3 outline-none border border-border-light dark:border-border-dark rounded-md bg-white text-gray-800 dark:bg-darkHover/30 dark:text-white' type="text" placeholder='Enter your email' required name='email' />
                </div>
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className='w-full p-4 outline-none border border-border-light dark:border-border-dark rounded-md bg-white text-gray-800 mb-6 dark:bg-darkHover/30 dark:text-white' rows='6' placeholder='Enter your message' required name='message'></motion.textarea>
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                    className='btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent via-pink-400 to-secondary shadow-xl border-2 border-white/30 hover:from-secondary hover:to-accent-dark focus:ring-4 focus:ring-pink-400/40 focus:outline-none animate-gradient-move'>Submit <Image src={assets.right_arrow_white} alt='arrow' className='w-4' /></motion.button>
                {result && (
                    <p className={`mt-4 text-center font-semibold text-lg ${status === 'success' ? 'text-green-500' : 'text-red-500'} animate-pulse`}>{result}</p>
                )}
            </motion.form>
        </motion.div >
    )
}

export default Contact
