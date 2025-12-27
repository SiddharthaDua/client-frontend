import React, { useEffect } from 'react';
import './OurCoreValues.css';

const OurCoreValues = () => {
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

    const values = [
        {
            id: 1,
            title: "Innovation First",
            desc: "We stay ahead of digital trends and continuously explore breakthrough technologies to deliver cutting-edge solutions that set you apart.",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            delay: "delay-100"
        },
        {
            id: 2,
            title: "Total Integrity",
            desc: "Transparency and honesty are the foundation of every partnership. We build trust through authentic relationships and ethical practices.",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            delay: "delay-200"
        },
        {
            id: 3,
            title: "Team Synergy",
            desc: "We believe in the power of collaboration. Working closely with clients as true partners to achieve extraordinary outcomes together.",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            delay: "delay-300"
        },
        {
            id: 4,
            title: "Results Obsessed",
            desc: "Every strategy is data-backed and laser-focused on delivering measurable ROI. Your success is our ultimate benchmark.",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            delay: "delay-400"
        }
    ];

    return (
        <section className="relative py-24 px-6 bg-gradient-to-b from-white to-sky-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="hidden-initial animate-scale-in inline-block mb-4 px-4 py-2 bg-sky-100 rounded-full text-sky-700 font-semibold text-sm">
                        What Drives Us
                    </div>
                    <h2 className="hidden-initial animate-slide-up delay-100 text-5xl font-black text-gray-900 mb-4">
                        Our Core Values
                    </h2>
                    <div className="hidden-initial animate-slide-up delay-200 w-32 h-2 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item) => (
                        <div key={item.id} className={`hidden-initial animate-slide-up ${item.delay} card-hover bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden group`}>
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-sky-50 transition-colors leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurCoreValues;