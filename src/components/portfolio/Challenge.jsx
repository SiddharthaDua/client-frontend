import React from 'react';
import './Challenge.css';

const Challenge = () => {
    const obstacles = [
        "Low engagement rates (under 1%)",
        "Limited brand recognition",
        "Inconsistent content strategy"
    ];

    return (
        <section className="px-6 py-12">
            <div className="max-w-7xl mx-auto">
                <div
                    className="card-hover p-8 md:p-12 rounded-3xl animate-fade-in-up"
                    style={{
                        background: 'linear-gradient(135deg, #0ea5e9 0%, #000000 100%)'
                    }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-white">
                        The Challenge
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-lg leading-relaxed text-white opacity-95">
                                The client faced several obstacles including low brand awareness,
                                minimal social media presence, inconsistent posting schedule,
                                and difficulty reaching their target demographic. They needed a
                                comprehensive strategy to transform their digital footprint.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {obstacles.map((text, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="#ffffff" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-white opacity-90">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenge;