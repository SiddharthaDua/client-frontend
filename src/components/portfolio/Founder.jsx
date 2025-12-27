import React from 'react';
import './Founder.css';

const Founder = () => {
    const founders = [
        {
            initials: 'PD',
            quote: "The team’s expertise and creativity transformed our social media presence beyond our expectations.",
            name: "Pravat Das",
            role: "Founder.",
            delay: 'delay-300'
        },
        {
            initials: 'SD',
            quote: "Our vision was to build something truly unique, and this partnership helped turn that vision into reality.",
            name: "Siddhartha Dua",
            name: "Siddhartha Dua",
            role: "Co-Founder .",
            delay: 'delay-500'
        }
    ];

    return (
        <section className="px-6 py-12">
            <div className="max-w-7xl mx-auto flex justify-center">
                {/* Desktop par 2 column, mobile par 1 column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {founders.map((founder, index) => (
                        <div
                            key={index}
                            className={`card-hover p-8 md:p-10 rounded-3xl animate-scale-in ${founder.delay}`}
                            style={{
                                background: 'linear-gradient(135deg, #000000 0%, #0ea5e9 100%)'
                            }}
                        >
                            <div className="flex flex-col items-center md:items-start text-center md:text-left h-full">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 flex-shrink-0"
                                    style={{ background: '#ffffff', color: '#0ea5e9' }}
                                >
                                    {founder.initials}
                                </div>
                                <div className="flex flex-col justify-between h-full">
                                    <p className="text-lg md:text-xl leading-relaxed mb-6 text-white italic">
                                        "{founder.quote}"
                                    </p>
                                    <div>
                                        <div className="font-bold text-lg text-white">
                                            {founder.name}
                                        </div>
                                        <div className="text-white opacity-80 text-sm">
                                            {founder.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founder;