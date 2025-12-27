import React, { useEffect, useRef } from 'react';
import './WhyChooseOurMetaAdsServices.css';

const WhyChooseOurMetaAdsServices = () => {
    const sectionRef = useRef(null);

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
    }, []);

    const benefits = [
        { title: "Meta Business Partner", desc: "Official Meta partnership with direct support and beta features access" },
        { title: "Certified Experts", desc: "Team of Meta Blueprint certified advertising professionals" },
        { title: "Proven Track Record", desc: "500+ successful campaigns with average 3.5x ROI" },
        { title: "Transparent Reporting", desc: "Real-time dashboards with complete visibility into performance" },
        { title: "Dedicated Account Manager", desc: "Personal point of contact for strategy and support" },
        { title: "No Long-Term Contracts", desc: "Flexible engagement with month-to-month options" }
    ];

    const stats = [
        { value: "3.5x", label: "Return on Ad Spend" },
        { value: "-45%", label: "Cost Per Acquisition" },
        { value: "2.8M", label: "Average Monthly Reach" },
        { value: "4.2%", label: "Click-Through Rate" }
    ];

    return (
        <div id="why-choose-wrapper">
            <section ref={sectionRef} className="w-full px-6 py-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Side: Benefits List */}
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Why Choose Our Meta Ads Services</h2>
                            <div className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="benefit-item">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                        <p className="text-gray-600">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Stats Dashboard (Fixed Colors) */}
                        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                            <div className="results-dashboard-card rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-3xl font-black mb-8 text-white !text-white">Average Campaign Results</h3>
                                <div className="space-y-6">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="stat-card-glass rounded-2xl p-6 transition-transform hover:scale-[1.02]">
                                            <div className="dashboard-stat-number">
                                                {stat.value}
                                            </div>
                                            <div className="text-lg font-semibold text-white opacity-90">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseOurMetaAdsServices;