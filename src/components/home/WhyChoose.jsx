import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
    return (
        <div id="main-wrapper" className="w-full h-full overflow-auto">
            <section className="relative min-h-screen py-20 px-6 flex items-center justify-center overflow-hidden">

                {/* Animated Background Elements - SAME AS ORIGINAL */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 animate-pulse-slow"
                        style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)' }}
                    ></div>
                    <div
                        className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-20 animate-pulse-slow animation-delay-2000"
                        style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)' }}
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 animate-float"
                        style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)' }}
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto w-full">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#0f172a]">
                            Why Choose Us?
                        </h2>
                        <p className="text-xl md:text-2xl text-[#0ea5e9]">
                            Partner with excellence and drive your digital success
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Card 1 */}
                        <div className="stat-card card-animate-1 rounded-2xl p-8 shadow-lg hover:shadow-2xl bg-white border-2 border-[#e0f2fe]">
                            <div className="icon-wrapper mb-6 w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8]">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center text-[#0f172a]">
                                Trusted by 50+ Businesses
                            </h3>
                            <p className="text-center text-lg text-[#64748b]">
                                Building lasting partnerships with businesses across industries
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="stat-card card-animate-2 rounded-2xl p-8 shadow-lg hover:shadow-2xl bg-white border-2 border-[#e0f2fe]">
                            <div className="icon-wrapper mb-6 w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8]">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center text-[#0f172a]">
                                7+ Years Experience
                            </h3>
                            <p className="text-center text-lg text-[#64748b]">
                                Proven industry expertise and digital marketing mastery
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="stat-card card-animate-3 rounded-2xl p-8 shadow-lg hover:shadow-2xl bg-white border-2 border-[#e0f2fe]">
                            <div className="icon-wrapper mb-6 w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8]">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center text-[#0f172a]">
                                100+ Successful Campaigns
                            </h3>
                            <p className="text-center text-lg text-[#64748b]">
                                Delivering measurable results that exceed expectations
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoose;