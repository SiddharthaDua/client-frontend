import React from 'react';
import './Result.css';

const Result = () => {
    const quantSuccess = [
        "3.4M total impressions across platforms",
        "300% increase in engagement rate",
        "Five-Star Rating Achieved",
        "280% boost in website traffic"
    ];

    const qualImpact = [
        "Established strong brand identity",
        "Built engaged online community",
        "Improved brand perception",
        "Generated positive sentiment"
    ];

    return (
        <section className="px-6 py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up text-black">
                    The Results
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Quantitative Success - Slides from Left */}
                    <div className="card-hover p-8 rounded-2xl animate-slide-in-left"
                        style={{ background: 'rgba(14, 165, 233, 0.05)', borderLeft: '4px solid #0ea5e9' }}>
                        <h3 className="text-xl font-bold mb-4 text-black">Quantitative Success</h3>
                        <ul className="space-y-3">
                            {quantSuccess.map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="#0ea5e9" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-black opacity-80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Qualitative Impact - Slides from Right */}
                    <div className="card-hover p-8 rounded-2xl animate-slide-in-right"
                        style={{ background: 'rgba(14, 165, 233, 0.05)', borderLeft: '4px solid #0ea5e9' }}>
                        <h3 className="text-xl font-bold mb-4 text-black">Qualitative Impact</h3>
                        <ul className="space-y-3">
                            {qualImpact.map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="#0ea5e9" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-black opacity-80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;