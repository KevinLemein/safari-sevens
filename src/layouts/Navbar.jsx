import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/safari-sevens.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBuyTickets = () => {
        window.open('https://tikohub.com/events/325', '_blank');
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navLinks = [
        //{ id: 'home', text: 'Home', isLink: true },
        { id: 'history', text: 'History' },
        { id: 'fixtures', text: 'Fixtures' },
        { id: 'experience', text: 'Experience' },
        { id: 'updates', text: 'Updates' },
    ];

    return (
        <>
            <nav className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 ">
                <div className="flex items-center ">
                    {/* Logo - click to scroll to the top */}
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer">
                        <img src={logo} alt="Safari Sevens" className="h-16 w-20 sm:h-20 sm:w-24 lg:h-24 lg:w-28 object-contain" />
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-8">
                        {navLinks.map((link) => {
                            // if (link.isLink) {
                            //     return (
                            //         <Link
                            //             key={link.id}
                            //             to="/home"
                            //             className="text-white hover:text-[#D71F27] transition-colors duration-300 font-medium cursor-pointer"
                            //         >
                            //             {link.text}
                            //         </Link>
                            //     );
                            // }
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-white hover:text-[#D71F27] transition-colors duration-300 font-medium cursor-pointer"
                                >
                                    {link.text}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Buy Tickets button for desktop */}
                <div className="hidden lg:block">
                    <button
                        onClick={handleBuyTickets}
                        className="bg-transparent border-2 border-white text-white px-6 py-2 text-base rounded-full hover:bg-[#D71F27] hover:border-[#D71F27] transition-all duration-300 font-medium cursor-pointer"
                    >
                        Buy Tickets
                    </button>
                </div>

                {/* Mobile Menu Button */}
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
                    <button onClick={() => setIsMenuOpen(false)} className="text-white cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center space-y-6 mt-10">
                    {navLinks.map((link) => {
                        if (link.isLink) {
                            return (
                                <Link
                                    key={link.id}
                                    to="/home"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white text-xl hover:text-[#D71F27] transition-colors cursor-pointer"
                                >
                                    {link.text}
                                </Link>
                            );
                        }
                        return (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-white text-xl hover:text-[#D71F27] transition-colors cursor-pointer"
                            >
                                {link.text}
                            </button>
                        );
                    })}
                    <button
                        onClick={() => { handleBuyTickets(); setIsMenuOpen(false); }}
                        className="border-2 border-[#D71F27] text-[#D71F27] px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#D71F27] hover:text-white transition-all duration-300 cursor-pointer"
                    >
                        Buy Tickets
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;