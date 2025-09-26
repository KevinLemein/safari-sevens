import React from 'react';
import update1 from '../images/updates-safari-sevens.jpg'

const Updates = () => {
    const news = [
        {
            title: "SAFARI SEVENS 2025 RETURNS TO NAIROBI",
            date: "SEPTEMBER 26, 2025 — 12:00 PM",
            excerpt: "The 27th edition of Africa's premier rugby sevens tournament confirmed for October 10-12 at Nyayo National Stadium. Mark your calendars for the biggest rugby celebration of the year!",
            tag: "Tournament Announcement",
            image: update1,
            isMainNews: true
        },
        // {
        //     title: "COACH SIMIYU: \"WE'RE FOCUSED AND HUNGRY\"",
        //     date: "JUNE 15, 2025 — 9:00 PM",
        //     excerpt: "KENYA HEAD COACH INNOCENT SIMIYU SAYS HIS SQUAD IS MENTALLY PREPARED AHEAD OF THE SEMIFINALS.",
        //     tag: "Latest News"
        // },
        // {
        //     title: "WHERE TO WATCH: LIVE STREAMING LINKS NOW AVAILABLE",
        //     date: "JUNE 15, 2025 — 4:00 PM",
        //     excerpt: "Don't miss any action with our comprehensive viewing guide",
        //     tag: "Fixtures"
        // },
        // {
        //     title: "Record Breaking Attendance Expected",
        //     date: "JUNE 14, 2025 — 2:00 PM",
        //     excerpt: "Ticket sales indicate this could be our biggest tournament yet",
        //     tag: "Latest News"
        // },
        // {
        //     title: "Team Profiles: Meet the International Squads",
        //     date: "JUNE 13, 2025 — 10:00 AM",
        //     excerpt: "Get to know the teams competing in Kenya Safari Sevens 2025",
        //     tag: "Teams"
        // }
    ];

    return (
        <div id="updates" className="min-h-screen bg-black text-white py-12 md:py-20">
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
                                    <div className={`${index === 0 ? 'md:w-1/2' : 'h-48'} relative`}>
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="bg-red-600 w-full h-full"></div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        {item.isMainNews && (
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                    OFFICIAL ANNOUNCEMENT
                                                </span>
                                            </div>
                                        )}
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
                                                <span className="text-red-500 text-sm font-semibold">[GET TICKETS NOW]</span>
                                            </div>
                                        )}
                                        {index === 1 && (
                                            <div className="mt-4">
                                                <span className="text-red-500 text-sm">[Full Interview]</span>
                                            </div>
                                        )}
                                        {index === 2 && (
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
        </div>
    );
};

export default Updates;