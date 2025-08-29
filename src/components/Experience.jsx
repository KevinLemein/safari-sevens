import React from 'react';
// import { ChevronRight } from 'lucide-react';
// import entertainmentimg from '../images/experience1.jpeg';
// import womenrugby from '../images/womenrugby.jpeg';

import Navbar from '../layouts/Navbar';

const Experience = () => {
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-white flex items-center py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        {/* Left side - Text content */}
                        <div className="lg:col-span-1">
                            <h1 className="text-5xl lg:text-6xl font-black text-black mb-8 leading-tight">
                                EXPERIENCE<br />
                                KENYA<br />
                                <span className="text-black">SAFARI</span><br />
                                <span className="text-red-500">SEVENS</span>
                            </h1>

                            <div className="space-y-6 text-black">
                                <p className="text-lg font-semibold">
                                    THE BIGGEST SPORTS AND ENTERTAINMENT FESTIVAL IN{' '}
                                    <span className="text-red-500">KENYA</span> IS BACK FOR 2025.
                                </p>

                                <p className="text-base leading-relaxed">
                                    FROM THE CROWDS SINGING ON PITCHES TO THE PERFORMANCES FROM OUR LOCAL DJS AND
                                    ARTISTS, THERE IS SOMETHING FOR EVERYONE AT{' '}
                                    <span className="text-green-500 font-semibold">KENYA SAFARI SEVENS</span>.
                                </p>
                            </div>
                        </div>

                        {/* Right side - Photo grid */}
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                            {/* Entertainment Card */}
                            <div className="relative group cursor-pointer">
                                <div className="aspect-[4/3] bg-gradient-to-br from-red-500 to-red-600 rounded-lg overflow-hidden shadow-lg">
                                    <div className="w-full h-full bg-red-500 relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    {/* I've replaced the emoji with a clearer music note icon for better consistency */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-2xl font-bold mb-2">ENTERTAINMENT</h3>
                                            <p className="text-sm opacity-90">Live music, performances, and festivities</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* World Class Sport Card */}
                            <div className="relative group cursor-pointer">
                                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg overflow-hidden shadow-lg">
                                    <div className="w-full h-full bg-blue-500 relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    {/* I've replaced the emoji with a rugby ball icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2.003c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.522 0 10-4.477 10-10s-4.478-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c4.41 0 8 3.59 8 8s-3.59 8-8 8zm-2.4-11.402c-.295-.119-.638-.043-.865.183l-1.5 1.5c-.29.29-.29.768 0 1.058l1.5 1.5c.227.226.57.302.865.183.296-.119.5-.41.5-.733v-3c0-.323-.204-.614-.5-.733zm4.8 0c-.295-.119-.638-.043-.865.183l-1.5 1.5c-.29.29-.29.768 0 1.058l1.5 1.5c.227.226.57.302.865.183.296-.119.5-.41.5-.733v-3c0-.323-.204-.614-.5-.733z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-2xl font-bold mb-2">WORLD CLASS SPORT</h3>
                                            <p className="text-sm opacity-90">International rugby teams competing at the highest level</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;