import React from 'react';
import './Highlight.css';

const Highlight = () => {
    const stats = [
        { label: 'Impressions', value: '3M+', delay: 'delay-300' },
        { label: 'Engagement Growth', value: '300%', delay: 'delay-400' },
        { label: 'Client Satisfaction', value: '98%', delay: 'delay-600' },
    ];

    return (
        <section className="px-6 py-12">
            <div className="max-w-7xl mx-auto flex justify-center">
                {/* grid-cols-3 ensures all 3 stay in one line even on mobile */}
                <div className="grid grid-cols-3 gap-3 md:gap-6 w-full max-w-4xl">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`stat-card text-center p-4 md:p-6 rounded-2xl animate-scale-in ${stat.delay}`}
                            style={{
                                background: 'rgba(14, 165, 233, 0.05)',
                                border: '2px solid rgba(14, 165, 233, 0.2)',
                            }}
                        >
                            <div className="text-xl md:text-4xl font-bold mb-1 md:mb-2" style={{ color: '#0ea5e9' }}>
                                {stat.value}
                            </div>
                            <div className="text-[10px] md:text-sm font-medium leading-tight" style={{ color: '#000000', opacity: 0.7 }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlight;