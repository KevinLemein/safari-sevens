import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const XIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-black"
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
                        <div className="h-16 flex items-center justify-center">
                            <div className="text-black font-bold text-sm">Kenya Rugby Union</div>
                        </div>
                        <div className="h-16 flex items-center justify-center">
                            <div className="text-black font-bold text-sm text-center">Ministry of Youth Affairs</div>
                        </div>
                        <div className="h-16 flex items-center justify-center">
                            <div className="text-black font-bold text-sm">Talanta HELA</div>
                        </div>
                        <div className="h-16 flex items-center justify-center">
                            <div className="text-black font-bold text-sm">umbro</div>
                        </div>
                        <div className="h-16 flex items-center justify-center">
                            <div className="text-black font-bold text-sm">SportPesa</div>
                        </div>
                        <div className="h-16 flex items-center justify-center">
                            <div className="text-black font-bold text-sm">BLOCKSPORT</div>
                        </div>
                        <div className="h-16 flex items-center justify-center">
                            <div className="text-black font-bold text-sm">TikoHUB</div>
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
                            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">S7</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-red-500 text-3xl font-bold tracking-wide">SAFARI</div>
                            <div className="text-white text-3xl font-bold tracking-wide">SEVENS</div>
                            <div className="text-white text-xl mt-1">KENYA</div>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Instagram className="w-6 h-6 text-black" />
                        </a>
                        <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Facebook className="w-6 h-6 text-black" />
                        </a>
                        <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Linkedin className="w-6 h-6 text-black" />
                        </a>
                        <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors transform hover:scale-110">
                            <XIcon />
                        </a>
                    </div>
                </div>

                {/* Links Section - Red */}
                {/*<div className="bg-red-600 p-8 text-white min-h-[500px] relative clip-red">*/}
                <div className="bg-red-600 pt-24 px-8 pb-8 text-black min-h-[500px] relative clip-red">

                <div className="grid grid-cols-2 gap-8 mb-16">
                        <div className="flex flex-col space-y-4">
                            <a href="#" className="hover:text-red-200 transition-colors text-lg">Home</a>
                            <a href="#" className="hover:text-red-200 transition-colors text-lg">Calendar</a>
                            <a href="#" className="hover:text-red-200 transition-colors text-lg">About us</a>
                            <a href="#" className="hover:text-red-200 transition-colors text-lg">News</a>
                            <a href="#" className="hover:text-red-200 transition-colors text-lg">Events</a>
                            <a href="#" className="hover:text-red-200 transition-colors text-lg">Join us</a>
                            <a href="#" className="hover:text-red-200 transition-colors text-lg">Buy tickets</a>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <a href="#" className="hover:text-red-200 transition-colors text-lg">Terms & conditions</a>
                            <a href="#" className="hover:text-red-200 transition-colors text-lg">Payment policy</a>
                            <a href="#" className="hover:text-red-200 transition-colors text-lg">FAQ</a>
                        </div>
                    </div>

                    {/* Copyright for desktop */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
                        <p className="text-black text-center">© 2025 Safari sevens. All Rights Reserved.</p>
                    </div>
                </div>

                {/* Contact Section - Green */}
                {/*<div className="bg-green-600 p-8 text-white min-h-[500px] relative clip-green">*/}
                <div className="bg-green-600 pt-32 px-8 pb-8 text-black min-h-[500px] relative clip-green">
                <div className="space-y-2">
                        <h4 className="font-bold text-xl mb-4">Mombasa, Kenya</h4>
                        <p className="text-lg">+254727991993</p>
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
