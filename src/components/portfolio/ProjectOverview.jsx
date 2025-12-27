import React from 'react';
import './ProjectOverview.css';
import ProjectOverviewImg from "../../assets/projectOverview.jpeg";
const ProjectOverview = () => {
    return (
        <section className="px-6 py-16 overflow-hidden" style={{ background: '#f8fafc' }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Content */}
                    <div className="animate-slide-in-left">
                        <h2 className="text-4xl font-bold mb-6 text-black">
                            Projects Overview
                        </h2>
                        <p className="text-lg leading-relaxed mb-8 text-black opacity-80">
                            Our projects reflect a diverse range of industries and business goals. From high-performance e-commerce platforms and visually engaging websites to data-driven digital marketing campaigns and creative brand designs, every project is built with dedication, precision, and a clear focus on results. We approach each project with the same commitment—delivering quality, scalability, and long-term impact.
                        </p>

                        {/* Platform Tags */}
                        <div className="flex flex-wrap gap-3">
                            {['Instagram', 'Facebook', 'LinkedIn', 'Google'].map((platform) => (
                                <span
                                    key={platform}
                                    className="px-5 py-2 rounded-full text-sm font-semibold transition-all hover:bg-[#0ea5e9] hover:text-white"
                                    style={{
                                        background: '#ffffff',
                                        color: '#0ea5e9',
                                        border: '2px solid #0ea5e9'
                                    }}
                                >
                                    {platform}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Animated Image */}
                    <div className="relative animate-slide-in-right">
                        <div className="image-container rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={ProjectOverviewImg}
                                alt="Project Overview"
                                className="w-full h-[400px] object-cover hover-scale"
                            />
                            {/* Overlay Shimmer Effect */}
                            <div className="shimmer-overlay"></div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#0ea5e9] rounded-2xl -z-10 opacity-20 animate-pulse"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;