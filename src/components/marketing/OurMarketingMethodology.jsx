import React, { useEffect } from 'react';
import './OurMarketingMethodology.css';

const OurMarketingMethodology = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.omm-wrapper .animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const steps = [
        {
            number: "01",
            title: "Discovery & Audit",
            description: "We analyze your current marketing efforts, identify opportunities, understand your target audience, and assess competitor strategies to create a comprehensive baseline."
        },
        {
            number: "02",
            title: "Strategy Development",
            description: "Based on insights, we create a customized multi-channel marketing strategy with clear objectives, KPIs, budget allocation, and detailed implementation roadmap."
        },
        {
            number: "03",
            title: "Execution & Launch",
            description: "Our team implements campaigns across all selected channels, creates compelling content, sets up tracking systems, and launches with precision timing and coordination."
        },
        {
            number: "04",
            title: "Optimize & Scale",
            description: "Continuous monitoring, A/B testing, performance optimization, and strategic scaling to maximize ROI while providing transparent reporting and actionable insights."
        }
    ];

    return (
        <div className="omm-wrapper">
            <section className="omm-section">
                <div className="omm-container">
                    <div className="omm-header animate-on-scroll">
                        <h2 className="omm-main-title">Our Marketing Methodology</h2>
                        <p className="omm-sub-desc">A proven 4-step process that delivers consistent results</p>
                    </div>

                    <div className="omm-timeline">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="timeline-step animate-on-scroll"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="step-card">
                                    <div className="step-content-header">
                                        <span className="step-number">{step.number}</span>
                                        <h3 className="step-title">{step.title}</h3>
                                    </div>
                                    <p className="step-description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurMarketingMethodology;