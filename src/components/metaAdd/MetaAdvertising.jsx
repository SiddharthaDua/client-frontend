import React, { useEffect, useRef, useState } from 'react';
import './MetaAdvertising.css';

const MetaAdvertising = () => {
    const sectionRef = useRef(null);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [showAll]); // Re-observe when more cards are revealed

    const services = [
        {
            title: "Campaign Strategy",
            description: "Data-driven strategies tailored to your business goals, target audience, and budget",
            points: ["Audience Research & Segmentation", "Competitive Analysis", "Budget Optimization"],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            delay: "0s"
        },
        {
            title: "Creative Development",
            description: "Stunning ad creatives that capture attention and drive engagement across all formats",
            points: ["Image & Video Ads", "Carousel & Collection Ads", "Story & Reels Ads"],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            delay: "0.1s"
        },
        {
            title: "Campaign Management",
            description: "Expert management and optimization to maximize your ROI and campaign performance",
            points: ["A/B Testing & Optimization", "Bid Strategy Management", "Daily Monitoring & Adjustments"],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            delay: "0.2s"
        },
        {
            title: "Audience Targeting",
            description: "Precision targeting to reach the right people at the right time with the right message",
            points: ["Custom & Lookalike Audiences", "Interest & Behavior Targeting", "Retargeting Campaigns"],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            delay: "0.3s"
        },
        {
            title: "Analytics & Reporting",
            description: "Comprehensive tracking and insights to measure success and guide decisions",
            points: ["Conversion Tracking & Attribution", "Custom Dashboard & Reports", "ROI & Performance Metrics"],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            delay: "0.4s"
        },
        {
            title: "Conversion Optimization",
            description: "Maximize conversions with landing page optimization and funnel improvements",
            points: ["Landing Page Optimization", "Conversion Funnel Analysis", "CTA & Form Optimization"],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            delay: "0.5s"
        }
    ];

    return (
        <div id="meta-ads-solutions-wrapper">
            <section ref={sectionRef} className="w-full px-6 py-20 bg-gradient-to-br from-sky-50 via-white to-sky-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Complete Meta Advertising Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">From strategy to execution, we handle every aspect of your Meta advertising campaigns</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`feature-card rounded-2xl p-8 shadow-lg border border-gray-100 animate-on-scroll ${!showAll && index >= 3 ? 'hidden md:block' : 'block'}`}
                                style={{ animationDelay: service.delay }}
                            >
                                <div className="icon-container w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                                <ul className="space-y-2 text-gray-600">
                                    {service.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-sky-500 font-bold">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Show All Link for Mobile */}
                    {!showAll && (
                        <div className="text-center md:hidden">
                            <button
                                onClick={() => setShowAll(true)}
                                className="text-sky-600 font-bold text-lg border-b-2 border-sky-600 pb-1 hover:text-sky-700 transition-colors"
                            >
                                Show All Services
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default MetaAdvertising;