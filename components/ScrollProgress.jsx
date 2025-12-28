import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1.5 bg-transparent z-[100]">
            <div 
                className="h-full bg-gradient-to-r from-accent via-pink-400 to-secondary"
                style={{ width: `${scrollTop}%`, transition: 'width 0.2s ease-out' }}
            />
        </div>
    );
};

export default ScrollProgress;
