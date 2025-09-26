import React from 'react';
// import { ChevronRight } from 'lucide-react';
import entertainmentimg from '../images/experience1.jpeg'; // Assuming you have this image, or uncomment the others
import womenrugby from '../images/womenrugby.jpeg'; // Assuming you have this image
import fans1 from '../images/fans1.jpg';
import fans2 from '../images/fans2.jpg';

import Navbar from '../layouts/Navbar';

// Inline font styles - you can adjust paths as needed
const fontStyles = `
@font-face {
    font-family: 'Clash Display';
    src: url('./fonts/ClashDisplay-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Akira Expanded';
    src: url('./fonts/AkiraExpanded-SuperBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'LemonMilk';
    src: url('./fonts/LemonMilk-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
`;

// Define the styles based on your text content for easy reuse
const titleStyle = {
    fontFamily: 'LemonMilk, sans-serif',
    fontSize: '24px', // Increased size slightly for card titles
    fontWeight: 400,
    fontStyle: 'Regular',
    color: '#000000' // Black text
};

const descriptionStyle = {
    fontFamily: 'LemonMilk, sans-serif',
    fontSize: '16px', // Adjusted size for description
    fontWeight: 400,
    fontStyle: 'Regular',
    color: '#000000',
    lineHeight: '130%' // Adjusted line height for readability
};

const Experience = () => {
    return (
        <>
            {/* Inject font styles */}
            <style>{fontStyles}</style>

            <Navbar />
            <div id="experience" className="min-h-screen bg-black text-white py-12 md:py-20">
                <div className="min-h-screen bg-white flex items-center py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-12 items-center">
                            {/* Left side - Text content */}
                            <div className="lg:col-span-1">
                                <h1 className="mb-8 leading-tight">
                                    {/* EXPERIENCE - Clash Display, Medium, 45px, Weight 500 */}
                                    <span
                                        className="block text-black"
                                        style={{
                                            fontFamily: 'Clash Display, sans-serif',
                                            fontSize: '45px',
                                            fontWeight: 500,
                                            fontStyle: 'medium'
                                        }}
                                    >
                                        EXPERIENCE
                                    </span>

                                    {/* KENYA SAFARI SEVENS - Akira Expanded, Super Bold, 64px, Weight 800 */}
                                    <span
                                        className="block"
                                        style={{
                                            fontFamily: 'Akira Expanded, sans-serif',
                                            fontSize: '64px',
                                            fontWeight: 800,
                                            fontStyle: 'Super Bold'
                                        }}
                                    >
                                        <span className="text-black">KENYA<br />SAFARI<br /></span>
                                        <span className="text-red-500">SEVENS</span>
                                    </span>
                                </h1>

                                <div className="space-y-6 text-black">
                                    {/* THE BIGGEST SPORTS... - LemonMilk, Regular, 20px, Weight 400 */}
                                    <p
                                        style={{
                                            fontFamily: 'LemonMilk, sans-serif',
                                            fontSize: '20px',
                                            fontWeight: 400,
                                            fontStyle: 'Regular'
                                        }}
                                    >
                                        THE BIGGEST SPORTS AND ENTERTAINMENT FESTIVAL IN{' '}
                                        <span className="text-red-500">KENYA</span> IS BACK FOR 2025.
                                    </p>

                                    {/* FROM THE CROWDS... - LemonMilk, Regular, Weight 400, Line Height 100% */}
                                    <p
                                        style={{
                                            fontFamily: 'LemonMilk, sans-serif',
                                            fontWeight: 400,
                                            fontStyle: 'Regular',
                                            lineHeight: '100%'
                                        }}
                                    >
                                        FROM THE CROWDS SINGING ON PITCHES TO THE PERFORMANCES FROM OUR LOCAL DJS AND
                                        ARTISTS, THERE IS SOMETHING FOR EVERYONE AT{' '}
                                        <span className="text-green-500 font-semibold">KENYA SAFARI SEVENS</span>.
                                    </p>
                                </div>
                            </div>

                            {/* Right side - Photo grid */}
                            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

                                {/* Entertainment Card Container (Image + Text) */}
                                <div className="group cursor-pointer">
                                    {/* Image */}
                                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                                        <div className="aspect-[4/3]">
                                            <img
                                                src={fans1}
                                                alt="Entertainment"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                    {/* Text Content Below Image */}
                                    <div className="mt-4 p-0">
                                        <h3 className="uppercase mb-1" style={titleStyle}>
                                            ENTERTAINMENT
                                        </h3>
                                        <p style={descriptionStyle}>
                                            Live music, performances, and festivities
                                        </p>
                                    </div>
                                </div>

                                {/* World Class Sport Card Container (Image + Text) */}
                                <div className="group cursor-pointer">
                                    {/* Image */}
                                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                                        <div className="aspect-[4/3]">
                                            <img
                                                src={fans2}
                                                alt="World Class Sport"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                    {/* Text Content Below Image */}
                                    <div className="mt-4 p-0">
                                        <h3 className="uppercase mb-1" style={titleStyle}>
                                            WORLD CLASS SPORT
                                        </h3>
                                        <p style={descriptionStyle}>
                                            International rugby teams competing at the highest level
                                        </p>
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