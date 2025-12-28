import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-2.5 rounded-full bg-white/80 dark:bg-darkTheme/80 backdrop-blur-md border border-accent/20 dark:border-accent-dark/30 shadow-xl hover:scale-110 transition-all duration-300 group"
                    aria-label="Back to Top"
                >
                    <Image
                        src={assets.arrow_icon_dark}
                        alt="Back to top"
                        className="w-4 h-4 rotate-180 dark:invert group-hover:-translate-y-1 transition-transform"
                    />
                </button>
            )}
        </>
    );
};

export default BackToTop;
