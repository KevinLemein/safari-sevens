import React, { useState } from 'react';
import Navbar from '../layouts/Navbar.jsx';
import { Download } from 'lucide-react';


const pools = [
    { name: "Pool A", teams: ["Kenya Shujaa", "South Africa", "Spain", "Chile"] },
    { name: "Pool B", teams: ["Fiji", "USA", "France", "Japan"] },
    { name: "Pool C", teams: ["Argentina", "New Zealand", "Samoa", "Germany"] },
    { name: "Pool D", teams: ["Australia", "Ireland", "Uganda", "Zimbabwe"] }
];

const fixtures = [
    // Friday, 10th October 2025
    { day: "Friday", time: "10:00", team1: "Spain", team2: "Chile", pool: "Pool A" },
    { day: "Friday", time: "10:22", team1: "Kenya Shujaa", team2: "South Africa", pool: "Pool A" },
    { day: "Friday", time: "10:44", team1: "France", team2: "Japan", pool: "Pool B" },
    { day: "Friday", time: "11:06", team1: "Fiji", team2: "USA", pool: "Pool B" },
    { day: "Friday", time: "11:28", team1: "Samoa", team2: "Germany", pool: "Pool C" },
    { day: "Friday", time: "11:50", team1: "Argentina", team2: "New Zealand", pool: "Pool C" },
    { day: "Friday", time: "12:12", team1: "Uganda", team2: "Zimbabwe", pool: "Pool D" },
    { day: "Friday", time: "12:34", team1: "Australia", team2: "Ireland", pool: "Pool D" },

    // Saturday, 11th October 2025
    { day: "Saturday", time: "09:30", team1: "South Africa", team2: "Spain", pool: "Pool A" },
    { day: "Saturday", time: "09:52", team1: "Kenya Shujaa", team2: "Chile", pool: "Pool A" },
    { day: "Saturday", time: "10:14", team1: "USA", team2: "France", pool: "Pool B" },
    { day: "Saturday", time: "10:36", team1: "Fiji", team2: "Japan", pool: "Pool B" },
    { day: "Saturday", time: "10:58", team1: "New Zealand", team2: "Samoa", pool: "Pool C" },
    { day: "Saturday", time: "11:20", team1: "Argentina", team2: "Germany", pool: "Pool C" },
    { day: "Saturday", time: "11:42", team1: "Ireland", team2: "Uganda", pool: "Pool D" },
    { day: "Saturday", time: "12:04", team1: "Australia", team2: "Zimbabwe", pool: "Pool D" },
    { day: "Saturday", time: "12:26", team1: "South Africa", team2: "Chile", pool: "Pool A" },
    { day: "Saturday", time: "12:48", team1: "Kenya Shujaa", team2: "Spain", pool: "Pool A" },
    // More matches would continue here...

    // Sunday, 12th October 2025 (Knockouts)
    { day: "Sunday", time: "TBD", team1: "Cup Quarter Final 1", team2: "", pool: "Knockout" },
    { day: "Sunday", time: "TBD", team1: "Cup Quarter Final 2", team2: "", pool: "Knockout" },
    { day: "Sunday", time: "TBD", team1: "Cup Quarter Final 3", team2: "", pool: "Knockout" },
    { day: "Sunday", time: "TBD", team1: "Cup Quarter Final 4", team2: "", pool: "Knockout" },
    { day: "Sunday", time: "TBD", team1: "Cup Semi Final 1", team2: "", pool: "Knockout" },
    { day: "Sunday", time: "TBD", team1: "Cup Semi Final 2", team2: "", pool: "Knockout" },
    { day: "Sunday", time: "TBD", team1: "Cup Final", team2: "", pool: "Championship" }
];

const Fixtures = () => {
    const [activeDay, setActiveDay] = useState('Friday');

    const handleDownload = () => {
        const headers = ['Day', 'Time', 'Team 1', 'Team 2', 'Pool/Stage'];
        const csvRows = [
            headers.join(','),
            ...fixtures.map(f => [f.day, f.time, f.team1, f.team2, f.pool].join(','))
        ];
        const csvContent = csvRows.join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.href) {
            URL.revokeObjectURL(link.href);
        }
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.setAttribute('download', 'safari-sevens-2025-fixtures.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const days = ["Friday", "Saturday", "Sunday"];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* --- Header Section --- */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">Pools & Fixtures</h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            The official draw and match schedule for the Safari Sevens 2025 tournament.
                        </p>
                    </div>

                    {/* --- Download Button --- */}
                    <div className="flex justify-center mb-12">
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-lg"
                        >
                            <Download className="w-5 h-5" />
                            Download Full Schedule (CSV)
                        </button>
                    </div>

                    {/* --- Pool Draw Section --- */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Pool Draw</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pools.map(pool => (
                                <div key={pool.name} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                    <h3 className="text-xl font-bold text-red-600 mb-4">{pool.name}</h3>
                                    <ul className="space-y-3">
                                        {pool.teams.map(team => (
                                            <li key={team} className="text-gray-700 font-medium text-lg">{team}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- Match Schedule Section --- */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Match Schedule</h2>

                        {/* Day Tabs */}
                        <div className="flex justify-center mb-8 border-b border-gray-300">
                            {days.map(day => (
                                <button
                                    key={day}
                                    onClick={() => setActiveDay(day)}
                                    className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${
                                        activeDay === day
                                            ? 'border-b-4 border-red-600 text-red-600'
                                            : 'text-gray-500 hover:text-red-500'
                                    }`}
                                >
                                    {day} {day !== 'Sunday' ? `1${days.indexOf(day)}th Oct` : '12th Oct'}
                                </button>
                            ))}
                        </div>

                        {/* Fixtures List */}
                        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200">
                            <div className="space-y-2">
                                {fixtures.filter(f => f.day === activeDay).map((match, index) => (
                                    <div key={index} className="grid grid-cols-5 gap-4 items-center p-4 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div className="col-span-1 text-red-600 font-bold text-base sm:text-lg">{match.time}</div>
                                        <div className="col-span-3 text-gray-800 font-semibold text-base sm:text-lg">
                                            {match.team1} {match.team2 && `vs ${match.team2}`}
                                        </div>
                                        <div className="col-span-1 text-right">
                                            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                                                {match.pool}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fixtures;