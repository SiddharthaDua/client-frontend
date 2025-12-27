import React, { useEffect } from 'react';
import './OurImpact.css';

const OurImpact = () => {
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

    const stats = [
        { id: 1, number: "300+", label: "Clients Served", delay: "delay-100" },
        { id: 2, number: "250%", label: "Average ROI", delay: "delay-200" },
        { id: 3, number: "50+", label: "Expert Team", delay: "delay-300" },
        { id: 4, number: "25+", label: "Industry Awards", delay: "delay-400" }
    ];

    return (
        <section className="relative py-24 px-6 bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 overflow-hidden">
            {/* Background Pattern SVG */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-impact-pattern opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-sky-100 text-xl">
                        Real results that speak louder than words
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.id} className={`hidden-initial animate-scale-in ${stat.delay} text-center group`}>
                            <div className="relative inline-block mb-4">
                                {/* Glowing Background Blur */}
                                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all"></div>

                                <div className="relative text-5xl md:text-7xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {stat.number}
                                </div>
                            </div>
                            <div className="text-sky-100 text-lg md:text-xl font-semibold">
                                {stat.label}
                            </div>
                            {/* Decorative Line */}
                            <div className="mt-2 w-16 h-1 bg-white/50 mx-auto rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurImpact;