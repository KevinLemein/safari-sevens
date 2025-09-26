import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import history1 from '../images/history1.jpg';
import history2 from '../images/history2.jpg';
import history3 from '../images/history3.jpg';
import history4 from '../images/history4.jpg';
import history5 from '../images/history5.jpg';
import history6 from '../images/history6.jpg';
import history7 from '../images/history7.jpg';

const History = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const historyImages = [
        history1, // Corresponds to slide 0 (1996)
        history2, // Corresponds to slide 1 (2001-2009)
        history3, // Corresponds to slide 2 (2010-2011)
        history4, // Corresponds to slide 3 (2012-2017)
        history5, // Corresponds to slide 4 (2016)
        history6, // Corresponds to slide 5 (2024)
        history7  // Corresponds to slide 6 (2025)
    ];

    const historySlides = [
        {
            id: 1,
            year: "1996",
            title: "Tournament Founded",
            description: "Safari Sevens was established at RFUEA Ground, marking the beginning of what would become Kenya's premier rugby festival.",
            highlight: "The Beginning"
        },
        {
            id: 2,
            year: "2001-2009",
            title: "International Growth",
            description: "The tournament gained global recognition, attracting teams from around the world and establishing itself as a must-attend rugby event.",
            highlight: "Global Recognition"
        },
        {
            id: 3,
            year: "2010-2011",
            title: "Nyayo Stadium Era",
            description: "Safari Sevens moved to Nyayo National Stadium, accommodating larger crowds and enhancing the spectator experience significantly.",
            highlight: "Venue Evolution"
        },
        {
            id: 4,
            year: "2012-2017",
            title: "Kasarani Glory Days",
            description: "The tournament reached new heights at Kasarani Stadium, featuring 60,000-seat capacity and becoming a massive sporting spectacle.",
            highlight: "Peak Attendance"
        },
        {
            id: 5,
            year: "2016",
            title: "20th Anniversary",
            description: "Celebrated two decades of rugby excellence with special ceremonies honoring the tournament's incredible legacy and impact.",
            highlight: "Legacy Celebration"
        },
        {
            id: 6,
            year: "2024",
            title: "Machakos Edition",
            description: "Safari Sevens expanded to Machakos, bringing the excitement to a new region and demonstrating the tournament's continued evolution.",
            highlight: "Regional Expansion"
        },
        {
            id: 7,
            year: "2025",
            title: "The Future",
            description: "The 27th edition continues the legacy of excellence, combining traditional rugby spirit with modern entertainment for the next generation.",
            highlight: "Continuing Legacy"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % historySlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + historySlides.length) % historySlides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto-advance carousel every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const currentSlideData = historySlides[currentSlide];

    return (
        <div id="history" className="min-h-screen bg-black text-white py-12 md:py-20">
            <div className="max-w-full px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                        History
                    </h2>
                </div>

                {/* Main Carousel Container */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Carousel */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <div className="relative">
                            {/* Image Container */}
                            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] w-full bg-gray-900"> {/* Added dark background for object-contain padding */}
                                {historySlides.map((slide, index) => (
                                    <div
                                        key={slide.id}
                                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    >
                                        <img
                                            src={historyImages[index]}
                                            alt={slide.title}
                                            // 🌟 KEY CHANGE: Changed object-cover to object-contain
                                            className="w-full h-full object-contain"
                                        />

                                        {/* Gradient overlay for better text readability - positioned only at the bottom */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                        {/* Emojis removed from the center of the image. The content is now only the gradient and the text below the carousel. */}
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
                        {historySlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide
                                        ? 'bg-red-500 w-6 md:w-8'
                                        : 'bg-gray-600 hover:bg-gray-500 w-2 md:w-3'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Content Below Carousel */}
                    <div className="mt-8 md:mt-12 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 border border-gray-800">
                        <div className="text-center md:text-left">
                            {/* Year Badge */}
                            <div className="inline-flex items-center bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold mb-4 md:mb-6">
                                {currentSlideData.year}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-white">
                                {currentSlideData.title}
                            </h3>

                            {/* Highlight */}
                            <div className="inline-block bg-gradient-to-r from-red-500 to-green-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
                                {currentSlideData.highlight}
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl">
                                {currentSlideData.description}
                            </p>
                        </div>
                    </div>

                    {/* Additional Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12">
                        <div className="bg-gray-900/70 p-4 md:p-6 rounded-xl border border-gray-800 text-center">
                            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">29</div>
                            <p className="text-gray-300 text-sm md:text-base">Years of Excellence</p>
                        </div>
                        <div className="bg-gray-900/70 p-4 md:p-6 rounded-xl border border-gray-800 text-center">
                            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">27th</div>
                            <p className="text-gray-300 text-sm md:text-base">Edition in 2025</p>
                        </div>
                        <div className="bg-gray-900/70 p-4 md:p-6 rounded-xl border border-gray-800 text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">∞</div>
                            <p className="text-gray-300 text-sm md:text-base">Memories Created</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;