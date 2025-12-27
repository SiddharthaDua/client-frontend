import React, { useEffect } from 'react';
import './OurJourney.css';

const OurJourney = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden-initial');
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.hidden-initial');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative py-32 px-6 bg-gradient-to-br from-white via-sky-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="hidden-initial animate-scale-in inline-block mb-4 px-4 py-2 bg-sky-100 rounded-full text-sky-700 font-semibold text-sm">
                        🚀 Our Journey
                    </div>
                    <h2 className="hidden-initial animate-slide-up delay-100 text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
                        Building Dreams Since 2018
                    </h2>
                </div>

                {/* Timeline Style Layout */}
                <div className="relative">
                    {/* Decorative Timeline SVG */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5">
                        <svg className="w-full h-full" viewBox="0 0 4 800" preserveAspectRatio="none">
                            <line className="timeline-line" x1="2" y1="0" x2="2" y2="800" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="10,10" />
                        </svg>
                    </div>

                    {/* Story Content with Alternating Layout */}
                    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-16">
                        {/* Left Side - Text */}
                        <div className="hidden-initial animate-slide-left md:text-right relative">
                            <div className="inline-block md:float-right">
                                {/* Year Badge */}
                                <div className="mb-6">
                                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-3 rounded-full shadow-lg">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-bold text-lg">2018</span>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                                    What started as a passion project in a small garage has evolved into a powerhouse digital marketing agency. We've helped over 500+ brands transform their digital presence, driving millions in revenue and creating lasting impact. Our journey is fueled by innovation, dedication, and an obsession with results.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Visual Elements */}
                        <div className="hidden-initial animate-slide-right relative">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Top Left Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                                    <div className="text-4xl mb-3">📊</div>
                                    <div className="text-2xl font-bold text-gray-900">300+</div>
                                    <div className="text-sm text-gray-600">Projects</div>
                                </div>
                                {/* Top Right Card */}
                                <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 mt-8">
                                    <div className="text-4xl mb-3">🎯</div>
                                    <div className="text-2xl font-bold text-white">98%</div>
                                    <div className="text-sm text-sky-100">Success Rate</div>
                                </div>
                                {/* Bottom Left Card */}
                                <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                                    <div className="text-4xl mb-3">⚡</div>
                                    <div className="text-2xl font-bold text-white">24/7</div>
                                    <div className="text-sm text-sky-100">Support</div>
                                </div>
                                {/* Bottom Right Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 mt-8">
                                    <div className="text-4xl mb-3">🌟</div>
                                    <div className="text-2xl font-bold text-gray-900">Expert</div>
                                    <div className="text-sm text-gray-600">Team</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Statement */}
                    <div className="hidden-initial animate-scale-in delay-300 max-w-5xl mx-auto">
                        <div className="relative bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500 rounded-3xl p-1 shadow-2xl overflow-hidden">
                            {/* Animated Background Pattern */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl animate-wave"></div>
                                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl animate-wave" style={{ animationDelay: '1.5s' }}></div>
                            </div>
                            <div className="relative bg-white rounded-3xl p-10 md:p-16">
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-sky-400 to-sky-600 rounded-3xl flex items-center justify-center shadow-xl transform hover:rotate-12 transition-transform">
                                            <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <h3 className="text-3xl md:text-4xl font-black text-gray-900">Our Mission</h3>
                                            <div className="hidden md:block flex-1 h-1 bg-gradient-to-r from-sky-300 to-transparent rounded-full"></div>
                                        </div>
                                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                            To empower businesses with cutting-edge digital strategies that drive exponential growth, meaningful engagement, and transformative results in the ever-evolving digital landscape.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurJourney;