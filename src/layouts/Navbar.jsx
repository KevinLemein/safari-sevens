// src/layouts/Navbar.jsx

import React, { useState } from 'react';
import logo from '../images/safari-sevens.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // This function opens the ticket purchasing link in a new tab
    const handleBuyTickets = () => {
        window.open('https://tikohub.com/events/325', '_blank');
    };

    const navLinks = [
        { href: '#history', text: 'History' },
        { href: '#fixtures', text: 'Fixtures' },
        { href: '#experience', text: 'Experience' },
        { href: '#updates', text: 'Updates' },
    ];

    return (
        <>
            <nav className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center">
                    <img src={logo} alt="Safari Sevens" className="h-10 sm:h-12 lg:h-14 w-auto" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-white hover:text-red-500 transition-colors duration-300 font-medium">
                            {link.text}
                        </a>
                    ))}
                    <button
                        onClick={handleBuyTickets}
                        className="bg-transparent border-2 border-white text-white px-6 py-2 text-base rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300 font-medium cursor-pointer"
                    >
                        Buy Tickets
                    </button>
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Panel */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-95 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsMenuOpen(false)} className="text-white">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center space-y-6 mt-10">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-white text-xl hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                            {link.text}
                        </a>
                    ))}
                    <button onClick={() => { handleBuyTickets(); setIsMenuOpen(false); }} className="border-2 border-red-500 text-red-500 px-6 py-2 rounded-full text-lg font-semibold">
                        Buy Tickets
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;