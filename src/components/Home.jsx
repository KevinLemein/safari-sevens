import React, { useState, useEffect } from 'react';
import backgroundImage from '../images/backgroundimg.jpg';

// A simple hook to get window width, useful for conditional inline styles
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
};

const Home = () => {
    const { width } = useWindowSize();
    const isDesktop = width >= 1024;

    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2025-10-10T08:00:00').getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;
            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleBuyTickets = () => {
        window.open('https://tikohub.com/events/325', '_blank');
    };

    return (
        <>
            {/* Add Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Akira+Expanded:wght@800&display=swap" rel="stylesheet" />

            <div className="min-h-screen relative bg-white"
                 style={{
                     backgroundImage: `url(${backgroundImage})`,
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     backgroundAttachment: isDesktop ? "fixed" : "scroll",
                 }}>

                <main className="relative min-h-screen">
                    <div className="absolute bottom-0 w-full lg:static">

                        {/* Black Trapezoid/Block */}
                        <div
                            className="w-full bg-black bg-opacity-90 flex flex-col justify-center items-start p-8 sm:p-12
                                       lg:absolute lg:top-[55vh] lg:left-0 lg:w-full lg:h-[45vh] lg:pl-24 z-10"
                            style={isDesktop ? { clipPath: 'polygon(0 0, 75% 0, 60% 100%, 0% 100%)' } : {}}
                        >
                            <h1
                                className="mb-3 leading-none"
                                style={{
                                    fontFamily: "'Baguede Free', serif",
                                    fontWeight: 400,
                                    fontSize: isDesktop ? '64px' : width >= 640 ? '48px' : '36px',
                                    lineHeight: '100%',
                                    color: '#D71F27',
                                    letterSpacing: '0%'
                                }}
                            >
                                Kenya Safari 7s
                            </h1>
                            <p
                                className="text-white mb-6 opacity-90"
                                style={{
                                    fontFamily: "'Clash Display', sans-serif",
                                    fontSize: isDesktop ? '20px' : width >= 640 ? '18px' : '16px',
                                }}
                            >
                                10th - 12th October 2025 • Nyayo Stadium
                            </p>
                            <button
                                onClick={handleBuyTickets}
                                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300 font-medium cursor-pointer"
                                style={{
                                    fontFamily: "'Clash Display', sans-serif",
                                    fontSize: isDesktop ? '18px' : '16px',
                                }}
                            >
                                Buy tickets
                            </button>
                        </div>

                        {/* Red Trapezoid/Block */}
                        <div
                            className="w-full flex flex-col justify-center items-center p-8 lg:absolute lg:top-[60vh] lg:right-0 lg:w-[70%] lg:h-[30vh] z-20"
                            style={{
                                backgroundColor: '#D71F27',
                                clipPath: isDesktop ? 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' : 'none'
                            }}
                        >
                            <div className="flex flex-col items-center transform -translate-y-4 lg:-translate-y-6">
                                <div className="flex items-center gap-2 sm:gap-4 mb-5">
                                    <div className="text-center">
                                        <div
                                            className="text-black"
                                            style={{
                                                fontFamily: "'Akira Expanded', sans-serif",
                                                fontWeight: 800,
                                                fontSize: isDesktop ? '60px' : width >= 640 ? '36px' : '24px',
                                                lineHeight: '100%'
                                            }}
                                        >
                                            {timeLeft.days.toString().padStart(2, '0')}
                                        </div>
                                        <div
                                            className="text-white uppercase tracking-wider"
                                            style={{
                                                fontFamily: "'Clash Display', sans-serif",
                                                fontWeight: 700,
                                                fontSize: isDesktop ? '14px' : '12px'
                                            }}
                                        >
                                            DAYS
                                        </div>
                                    </div>

                                    <div
                                        className="text-black mb-6"
                                        style={{
                                            fontFamily: "'Akira Expanded', sans-serif",
                                            fontWeight: 800,
                                            fontSize: isDesktop ? '60px' : width >= 640 ? '36px' : '24px',
                                            lineHeight: '100%'
                                        }}
                                    >
                                        :
                                    </div>

                                    <div className="text-center">
                                        <div
                                            className="text-black"
                                            style={{
                                                fontFamily: "'Akira Expanded', sans-serif",
                                                fontWeight: 800,
                                                fontSize: isDesktop ? '60px' : width >= 640 ? '36px' : '24px',
                                                lineHeight: '100%'
                                            }}
                                        >
                                            {timeLeft.hours.toString().padStart(2, '0')}
                                        </div>
                                        <div
                                            className="text-white uppercase tracking-wider"
                                            style={{
                                                fontFamily: "'Clash Display', sans-serif",
                                                fontWeight: 700,
                                                fontSize: isDesktop ? '14px' : '12px'
                                            }}
                                        >
                                            HOURS
                                        </div>
                                    </div>

                                    <div
                                        className="text-black mb-6"
                                        style={{
                                            fontFamily: "'Akira Expanded', sans-serif",
                                            fontWeight: 800,
                                            fontSize: isDesktop ? '60px' : width >= 640 ? '36px' : '24px',
                                            lineHeight: '100%'
                                        }}
                                    >
                                        :
                                    </div>

                                    <div className="text-center">
                                        <div
                                            className="text-black"
                                            style={{
                                                fontFamily: "'Akira Expanded', sans-serif",
                                                fontWeight: 800,
                                                fontSize: isDesktop ? '60px' : width >= 640 ? '36px' : '24px',
                                                lineHeight: '100%'
                                            }}
                                        >
                                            {timeLeft.minutes.toString().padStart(2, '0')}
                                        </div>
                                        <div
                                            className="text-white uppercase tracking-wider"
                                            style={{
                                                fontFamily: "'Clash Display', sans-serif",
                                                fontWeight: 700,
                                                fontSize: isDesktop ? '14px' : '12px'
                                            }}
                                        >
                                            MINS
                                        </div>
                                    </div>

                                    <div
                                        className="text-black mb-6"
                                        style={{
                                            fontFamily: "'Akira Expanded', sans-serif",
                                            fontWeight: 800,
                                            fontSize: isDesktop ? '60px' : width >= 640 ? '36px' : '24px',
                                            lineHeight: '100%'
                                        }}
                                    >
                                        :
                                    </div>

                                    <div className="text-center">
                                        <div
                                            className="text-black"
                                            style={{
                                                fontFamily: "'Akira Expanded', sans-serif",
                                                fontWeight: 800,
                                                fontSize: isDesktop ? '60px' : width >= 640 ? '36px' : '24px',
                                                lineHeight: '100%'
                                            }}
                                        >
                                            {timeLeft.seconds.toString().padStart(2, '0')}
                                        </div>
                                        <div
                                            className="text-white uppercase tracking-wider"
                                            style={{
                                                fontFamily: "'Clash Display', sans-serif",
                                                fontWeight: 700,
                                                fontSize: isDesktop ? '14px' : '12px'
                                            }}
                                        >
                                            SECS
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Green Trapezoid/Block */}
                        <div
                            className="w-full h-[10vh] lg:absolute lg:top-[80vh] lg:right-0 lg:w-[70%] lg:h-[20vh] z-15"
                            style={{
                                backgroundColor: '#7BC24A',
                                clipPath: isDesktop ? 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' : 'none'
                            }}
                        ></div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Home;