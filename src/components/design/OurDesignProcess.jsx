import React from 'react';
import './OurDesignProcess.css';

const processSteps = [
    {
        number: 1,
        title: 'Brief & Research',
        desc: 'Understanding your vision, goals, and target audience.',
    },
    {
        number: 2,
        title: 'Concept & Design',
        desc: 'Creating initial concepts and design mockups.',
    },
    {
        number: 3,
        title: 'Revision & Refinement',
        desc: 'Incorporating feedback and perfecting the design.',
    },
    {
        number: 4,
        title: 'Final Delivery',
        desc: 'Delivering print-ready and web-optimized files.',
    },
];

const OurDesignProcess = () => {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <h2 className="text-5xl font-bold text-center text-black mb-4">
                    Our Design Process
                </h2>
                <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
                    From concept to delivery - a streamlined process for exceptional results
                </p>

                {/* Process Steps Grid */}
                <div className="grid md:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="category-card bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border-2 border-sky-200 text-center transition-all duration-400"
                        >
                            {/* Number Badge */}
                            <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 feature-badge shadow-lg">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurDesignProcess;