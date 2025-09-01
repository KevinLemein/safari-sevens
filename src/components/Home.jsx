// src/pages/Home.jsx (or wherever your Home.jsx is)

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
    const isDesktop = width >= 1024; // Tailwind's 'lg' breakpoint

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
        <div className="min-h-screen relative bg-cover bg-center bg-no-repeat"
             // style={{
             //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`
             // }}>

             style={{
                 backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImage})`,
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 backgroundPosition: "center",
                 imageRendering: "crisp-edges", // try "pixelated" too
             }}>


        <main className="relative min-h-screen">

                <div className="absolute bottom-0 w-full lg:static">
                    {/* Black Trapezoid/Block */}
                    <div
                        className="w-full bg-black bg-opacity-90 flex flex-col justify-center items-start p-8 sm:p-12
                                   lg:absolute lg:top-[60vh] lg:left-0 lg:w-[60%] lg:h-[40vh] lg:pl-24 z-10"
                        style={isDesktop ? { clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' } : {}}
                    >
                        <h1 className="text-red-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
                            Kenya Safari 7s
                        </h1>
                        <p className="text-white text-base sm:text-lg lg:text-xl mb-6 opacity-90">
                            10th - 12th October 2025 • Nyayo Stadium
                        </p>
                        <button
                            onClick={handleBuyTickets}
                            className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300 font-medium cursor-pointer"
                        >
                            Buy tickets
                        </button>
                    </div>

                    {/*/!* Red Trapezoid/Block *!/*/}
                    {/*<div*/}
                    {/*    className="w-full bg-red-600 flex flex-col justify-center items-center p-8*/}
                    {/*               lg:absolute lg:top-[60vh] lg:right-0 lg:w-[70%] lg:h-[30vh] z-20"*/}
                    {/*    style={isDesktop ? { clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' } : {}}*/}
                    {/*>*/}
                    {/*    /!* CHANGE 2: Countdown Position Fix*/}
                    {/*      This new wrapper uses a transform to shift the countdown and button up slightly,*/}
                    {/*      making them more visible without altering the parent red block's layout.*/}
                    {/*    *!/*/}
                    {/*    <div className="flex flex-col items-center transform -translate-y-2 lg:-translate-y-3">*/}
                    {/*        <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-5">*/}
                    {/*            <div className="text-center">*/}
                    {/*                <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-black">{timeLeft.days.toString().padStart(2, '0')}</div>*/}
                    {/*                <div className="text-white text-xs sm:text-sm uppercase tracking-wider font-black">DAYS</div>*/}
                    {/*            </div>*/}
                    {/*            <div className="text-center">*/}
                    {/*                <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-black">{timeLeft.hours.toString().padStart(2, '0')}</div>*/}
                    {/*                <div className="text-white text-xs sm:text-sm uppercase tracking-wider font-black">HOURS</div>*/}
                    {/*            </div>*/}
                    {/*            <div className="text-center">*/}
                    {/*                <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-black">{timeLeft.minutes.toString().padStart(2, '0')}</div>*/}
                    {/*                <div className="text-white text-xs sm:text-sm uppercase tracking-wider font-black">MINS</div>*/}
                    {/*            </div>*/}
                    {/*            <div className="text-center">*/}
                    {/*                <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-black">{timeLeft.seconds.toString().padStart(2, '0')}</div>*/}
                    {/*                <div className="text-white text-xs sm:text-sm uppercase tracking-wider font-black">SECS</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <button className="bg-transparent border-2 border-white text-white py-2 sm:py-3 px-6 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 cursor-pointer">*/}
                    {/*            LOCATION MAP*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* Red Trapezoid/Block */}
                    <div className="w-full bg-red-600 flex flex-col justify-center items-center p-8 lg:absolute lg:top-[60vh] lg:right-0 lg:w-[70%] lg:h-[30vh] z-20" style={isDesktop ? { clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' } : {}} >

                        <div className="flex flex-col items-center transform -translate-y-4 lg:-translate-y-6">
                            <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-5">
                                <div className="text-center">
                                    <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-black">{timeLeft.days.toString().padStart(2, '0')}</div>
                                    <div className="text-white text-xs sm:text-sm uppercase tracking-wider font-black">DAYS</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-black">{timeLeft.hours.toString().padStart(2, '0')}</div>
                                    <div className="text-white text-xs sm:text-sm uppercase tracking-wider font-black">HOURS</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-black">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                                    <div className="text-white text-xs sm:text-sm uppercase tracking-wider font-black">MINS</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-black">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                                    <div className="text-white text-xs sm:text-sm uppercase tracking-wider font-black">SECS</div>
                                </div>
                            </div>
                            <button className="bg-transparent border-2 border-white text-white py-2 sm:py-3 px-6 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 cursor-pointer">
                                LOCATION MAP
                            </button>
                        </div>
                    </div>

                    {/* Green Trapezoid/Block */}
                    <div
                        className="w-full h-[10vh] bg-green-600
                                   lg:absolute lg:bottom-0 lg:right-0 lg:w-[70%] lg:h-[20vh] z-20"
                        style={isDesktop ? { clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' } : {}}
                    ></div>
                </div>
            </main>
        </div>
    );
};

export default Home;