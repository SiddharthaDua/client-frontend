import React from 'react';
import './Rating.css';

const Rating = () => {
    return (
        <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stats-container">

                    {/* Happy Clients */}
                    <div className="stat-item">
                        <div className="stat-number text-5xl font-bold text-sky-400 mb-2">
                            300+
                        </div>
                        <div className="text-gray-300 text-lg">
                            Happy Clients
                        </div>
                    </div>

                    {/* Success Rate */}
                    <div className="stat-item">
                        <div className="stat-number text-5xl font-bold text-sky-400 mb-2">
                            98%
                        </div>
                        <div className="text-gray-300 text-lg">
                            Success Rate
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="stat-item">
                        <div className="stat-number text-5xl font-bold text-sky-400 mb-2">
                            7+
                        </div>
                        <div className="text-gray-300 text-lg">
                            Years Experience
                        </div>
                    </div>

                    {/* Support */}
                    <div className="stat-item">
                        <div className="stat-number text-5xl font-bold text-sky-400 mb-2">
                            24/7
                        </div>
                        <div className="text-gray-300 text-lg">
                            Support Available
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Rating;