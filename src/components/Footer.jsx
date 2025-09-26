import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import krulogo from '../images/krulogo.png';
import ministry from '../images/ministry.png';
import talanta from '../images/talanta.png';
import umbro from '../images/umbro.png';
import sportpesa from '../images/sportpesa.png';
import blocksport from '../images/blocksport.png';
import tikohub from '../images/tikohub.png';
import safarisevens from '../images/safarisevens2.png';

const XIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
    >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-white">
            {/* Sponsors Section */}
            <div className="bg-white py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
                        {/* 1. Kenya Rugby Union Logo */}
                        <div className="h-16 flex items-center justify-center p-2">
                            <img src={krulogo} alt="Kenya Rugby Union" className="h-full w-auto object-contain" />
                        </div>

                        {/* 2. Ministry of Youth Affairs Logo */}
                        <div className="h-16 flex items-center justify-center p-2">
                            <img src={ministry} alt="Ministry of Youth Affairs" className="h-full w-auto object-contain" />
                        </div>

                        {/* 3. Talanta HELA Logo */}
                        <div className="h-16 flex items-center justify-center p-2">
                            <img src={talanta} alt="Talanta HELA" className="h-full w-auto object-contain" />
                        </div>

                        {/* 4. umbro Logo */}
                        <div className="h-16 flex items-center justify-center p-2">
                            <img src={umbro} alt="Umbro" className="h-full w-auto object-contain" />
                        </div>

                        {/* 5. SportPesa (Kept as text since no image was imported for it) */}
                        <div className="h-16 flex items-center justify-center">
                            <img src={sportpesa} alt="Sportpesa" className="h-full w-auto object-contain" />
                        </div>

                        {/* 6. BLOCKSPORT Logo */}
                        <div className="h-16 flex items-center justify-center p-2">
                            <img src={blocksport} alt="BlockSport" className="h-full w-auto object-contain" />
                        </div>

                        {/* 7. TikoHUB Logo */}
                        <div className="h-16 flex items-center justify-center p-2">
                            <img src={tikohub} alt="TikoHUB" className="h-full w-auto object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="grid md:grid-cols-3 gap-0 relative">
                {/* Logo Section - Black */}
                <div className="bg-black p-8 flex flex-col items-center justify-center min-h-[500px] clip-black">
                    <div className="mb-8">
                        <div className="flex items-center justify-center mb-6">
                            {/* Removed red circle background */}
                            <div className="w-20 h-20 flex items-center justify-center">
                                <img src={safarisevens} alt="Safarisevens" className="h-full w-auto object-contain" />
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-red-500 text-3xl font-bold tracking-wide">SAFARI</div>
                            <div className="text-white text-3xl font-bold tracking-wide">SEVENS</div>
                            <div className="text-white text-xl mt-1">KENYA</div>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        {/* Instagram with brand color hover */}
                        <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 transition-all duration-300 group">
                            <Instagram className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                        </a>

                        {/* Facebook with brand color hover */}
                        <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                            <Facebook className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                        </a>

                        {/* LinkedIn with brand color hover */}
                        <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 group">
                            <Linkedin className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                        </a>

                        {/* X/Twitter with brand color hover */}
                        <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 group">
                            <div className="text-black group-hover:text-white transition-colors duration-300">
                                <XIcon />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Links Section - Red */}
                <div className="bg-red-600 pt-24 px-8 pb-8 text-black min-h-[500px] relative clip-red">
                    <div className="flex flex-col items-center space-y-6 mb-16">
                        <a href="#home" className="hover:text-red-200 transition-colors text-lg font-medium">Home</a>
                        <a href="#history" className="hover:text-red-200 transition-colors text-lg font-medium">History</a>
                        <a href="#experience" className="hover:text-red-200 transition-colors text-lg font-medium">Experience</a>
                        <a href="#updates" className="hover:text-red-200 transition-colors text-lg font-medium">Updates</a>
                        <a
                            href="https://tikohub.com/events/325"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-200 transition-colors text-lg font-medium"
                        >
                            Buy Ticket
                        </a>
                    </div>

                    {/* Copyright for desktop */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
                        <p className="text-black text-center">© 2025 Safari sevens. All Rights Reserved.</p>
                    </div>
                </div>

                {/* Contact Section - Green */}
                <div className="bg-green-600 pt-32 px-8 pb-8 text-black min-h-[500px] relative clip-green">
                    <div className="space-y-2">
                        <h4 className="font-bold text-xl mb-4">Mombasa, Kenya</h4>
                        <p className="text-lg">+254704069264</p>
                    </div>

                    {/* Copyright for mobile */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:hidden">
                        <p className="text-white text-center">© 2025 Safari sevens. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;