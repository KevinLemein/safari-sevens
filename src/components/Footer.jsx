import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            {/* Main Footer */}
            <div className="grid md:grid-cols-3 gap-0">
                {/* Logo Section */}
                <div className="bg-black p-8 flex flex-col items-center justify-center">
                    <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S7</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-red-500 text-2xl font-bold">SAFARI</div>
                            <div className="text-white text-2xl font-bold">SEVENS</div>
                            <div className="text-white text-lg">KENYA</div>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Instagram className="w-5 h-5 text-black" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Facebook className="w-5 h-5 text-black" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Linkedin className="w-5 h-5 text-black" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Twitter className="w-5 h-5 text-black" />
                        </a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="bg-red-600 p-8">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-red-200 transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-red-200 transition-colors">Calender</a></li>
                                <li><a href="#" className="hover:text-red-200 transition-colors">About us</a></li>
                                <li><a href="#" className="hover:text-red-200 transition-colors">News</a></li>
                                <li><a href="#" className="hover:text-red-200 transition-colors">Events</a></li>
                                <li><a href="#" className="hover:text-red-200 transition-colors">Join us</a></li>
                                <li><a href="#" className="hover:text-red-200 transition-colors">Buy tickets</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-red-200 transition-colors">Terms & conditions</a></li>
                                <li><a href="#" className="hover:text-red-200 transition-colors">Payment policy</a></li>
                                <li><a href="#" className="hover:text-red-200 transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-green-600 p-8">
                    <div className="mb-6">
                        <h4 className="font-semibold mb-2">Mombasa, Kenya</h4>
                        <p className="mb-2">+254727991993</p>
                        <p>+254704069264</p>
                    </div>
                </div>
            </div>

            {/* Sponsors Header */}
            <div className="bg-white py-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-center space-x-8 space-y-4">
                        <div className="text-black font-bold">Kenya Rugby Union</div>
                        <div className="text-black font-bold">Ministry of Youth Affairs and Sports</div>
                        <div className="text-black font-bold">Yalanta HELA</div>
                        <div className="text-black font-bold">umbro</div>
                        <div className="text-black font-bold">SportPesa</div>
                        <div className="text-black font-bold">BLOCKSPORT</div>
                        <div className="text-black font-bold">TikoHUB</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;