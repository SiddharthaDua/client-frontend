import React, { useEffect, useRef } from 'react';
import './OurProvenProcess.css';

const OurProvenProcess = () => {
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

    const steps = [
        {
            number: "1",
            title: "Discovery & Research",
            desc: "Deep dive into your business, audience, and competitors",
            delay: "0s",
            hasPing: true
        },
        {
            number: "2",
            title: "Strategy Development",
            desc: "Create custom campaign strategy and creative brief",
            delay: "0.1s",
            hasPing: false
        },
        {
            number: "3",
            title: "Launch & Testing",
            desc: "Deploy campaigns with systematic A/B testing",
            delay: "0.2s",
            hasPing: false
        },
        {
            number: "4",
            title: "Optimize & Scale",
            desc: "Continuous optimization and strategic scaling",
            delay: "0.3s",
            hasPing: false
        }
    ];

    return (
        <div id="proven-process-wrapper">
            <section ref={sectionRef} className="w-full px-6 py-20 bg-gradient-to-b from-sky-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Proven Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">A systematic approach to Meta advertising success</p>
                    </div>

                    <div className="relative grid md:grid-cols-4 gap-8">
                        {/* Connecting Line (Desktop Only) */}
                        <div className="process-connector hidden md:block"></div>

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="process-step text-center relative z-10 animate-on-scroll"
                                style={{ animationDelay: step.delay }}
                            >
                                <div className="step-circle w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl relative">
                                    <span className="text-3xl font-black text-white">{step.number}</span>
                                    {step.hasPing && (
                                        <div className="absolute inset-0 bg-sky-400 rounded-full animate-ping opacity-20"></div>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurProvenProcess;