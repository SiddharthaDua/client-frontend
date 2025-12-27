import React from 'react';
import './Solution.css';

const Solution = () => {
    const steps = [
        {
            number: '01',
            title: 'Strategy Development',
            description: 'Created a comprehensive content calendar with audience-focused messaging and platform-specific strategies.',
            delay: 'delay-200'
        },
        {
            number: '02',
            title: 'Content Creation',
            description: 'Produced high-quality visual content, engaging copy, and interactive stories that resonated with the target audience.',
            delay: 'delay-300'
        },
        {
            number: '03',
            title: 'Campaign Execution',
            description: 'Launched targeted ad campaigns, influencer partnerships, and community engagement initiatives.',
            delay: 'delay-400'
        }
    ];

    return (
        <section className="px-6 py-12" style={{ background: '#f8fafc' }}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up text-black">
                    Our Solution
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`process-step card-hover p-8 rounded-2xl animate-fade-in-up ${step.delay}`}
                            style={{
                                background: '#ffffff',
                                border: '2px solid #e2e8f0'
                            }}
                        >
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6"
                                style={{
                                    background: 'rgba(14, 165, 233, 0.1)',
                                    color: '#0ea5e9'
                                }}
                            >
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-black">
                                {step.title}
                            </h3>
                            <p className="text-black opacity-70 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;