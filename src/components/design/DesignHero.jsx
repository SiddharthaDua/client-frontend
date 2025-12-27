import React from 'react';
import './DesignHero.css';
import { useNavigate } from "react-router-dom";
const DesignHero = ({ onGetStarted }) => {
    const navigate = useNavigate();
    return (
        <section className="hero-container relative bg-gradient-to-br from-sky-50 via-white to-sky-100 py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-block bg-sky-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
                        🎨 Professional Design Agency
                    </div>

                    {/* Title */}
                    <h1 id="page-title" className="text-7xl font-bold text-black mb-6 animate-fade-in-up delay-100">
                        Graphic Design Services
                    </h1>

                    {/* Subtitle */}
                    <p id="page-subtitle" className="text-2xl text-gray-700 mb-10 animate-fade-in-up delay-200 max-w-4xl mx-auto">
                        We deliver high-impact graphic design solutions — from logos and branding to social media creatives, ads, and marketing visuals.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-300">
                        <button onClick={onGetStarted} id="hero-cta" className="bg-sky-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-sky-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                            Get Started
                        </button>
                        <button onClick={() => navigate("/portfolio")} className="bg-white text-black border-2 border-black px-10 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">

                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Elements (Background Circles) */}
            <div className="absolute top-20 right-10 w-24 h-24 bg-sky-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-20 left-10 w-20 h-20 bg-black rounded-full opacity-10 animate-float delay-200"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-sky-300 rounded-full opacity-15 animate-float delay-100"></div>
        </section>
    );
};

export default DesignHero;