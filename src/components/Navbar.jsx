import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex-shrink-0 flex items-center">
                    <a href="#" className={`font-display font-bold text-2xl ${scrolled ? 'text-sky-600' : 'text-white'}`}>
                        The 보리밭
                    </a>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-8">
                        <a href="#hero" className={`hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>Home</a>
                        <a href="#about" className={`hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>About</a>
                        <a href="#gallery" className={`hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>Gallery</a>
                        <a href="#contact" className={`hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>Contact</a>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button type="button" className={`inline-flex items-center justify-center p-2 rounded-md hover:text-sky-500 focus:outline-none ${scrolled ? 'text-slate-600' : 'text-white'}`} aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
