import React from 'react';

const Updates = () => {
    const news = [
        {
            title: "COACH SIMIYU: \"WE'RE FOCUSED AND HUNGRY\"",
            date: "JUNE 15, 2025 — 9:00 PM",
            excerpt: "KENYA HEAD COACH INNOCENT SIMIYU SAYS HIS SQUAD IS MENTALLY PREPARED AHEAD OF THE SEMIFINALS.",
            tag: "Latest News"
        },
        {
            title: "WHERE TO WATCH: LIVE STREAMING LINKS NOW AVAILABLE",
            date: "JUNE 15, 2025 — 4:00 PM",
            excerpt: "Don't miss any action with our comprehensive viewing guide",
            tag: "Fixtures"
        },
        {
            title: "Record Breaking Attendance Expected",
            date: "JUNE 14, 2025 — 2:00 PM",
            excerpt: "Ticket sales indicate this could be our biggest tournament yet",
            tag: "Latest News"
        },
        {
            title: "Team Profiles: Meet the International Squads",
            date: "JUNE 13, 2025 — 10:00 AM",
            excerpt: "Get to know the teams competing in Kenya Safari Sevens 2025",
            tag: "Teams"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex mb-12 border-b border-gray-700">
                    <button className="text-red-500 font-semibold text-xl pb-4 border-b-2 border-red-500 mr-8">
                        Latest News
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {news.map((item, index) => (
                        <div key={index} className={`relative group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}>
                            <div className={`bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors ${index === 0 ? 'md:flex' : ''}`}>
                                <div className={`bg-red-600 ${index === 0 ? 'md:w-1/2' : 'h-48'} relative`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                <div className={`p-6 ${index === 0 ? 'md:w-1/2' : ''}`}>
                                    <div className="text-red-500 text-sm font-semibold mb-2">{item.tag}</div>
                                    <h3 className={`font-bold mb-3 group-hover:text-red-500 transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-3">{item.date}</p>
                                    <p className="text-gray-300 leading-relaxed">{item.excerpt}</p>
                                    {index === 0 && (
                                        <div className="mt-4">
                                            <span className="text-red-500 text-sm">[Full Interview]</span>
                                        </div>
                                    )}
                                    {index === 1 && (
                                        <div className="mt-4">
                                            <span className="text-red-500 text-sm">[WATCH LIVE]</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Updates;