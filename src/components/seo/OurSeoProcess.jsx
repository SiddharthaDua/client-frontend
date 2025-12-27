import React from 'react';
import './OurSeoProcess.css';

const OurSeoProcess = () => {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
                    Our SEO Process
                </h2>
                <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
                    A proven methodology that delivers measurable results
                </p>

                {/* Process Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Step 1 */}
                    <div className="process-card bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border-2 border-sky-200 text-center">
                        <div className="step-number w-20 h-20 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                            1
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-3">Research & Audit</h3>
                        <p className="text-gray-600">
                            Deep analysis of your website, competitors, and market opportunities.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="process-card bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border-2 border-sky-200 text-center">
                        <div className="step-number w-20 h-20 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                            2
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-3">Strategy Development</h3>
                        <p className="text-gray-600">
                            Custom roadmap tailored to your business goals and industry.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="process-card bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border-2 border-sky-200 text-center">
                        <div className="step-number w-20 h-20 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                            3
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-3">Implementation</h3>
                        <p className="text-gray-600">
                            Execute optimization across technical, on-page, and off-page factors.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="process-card bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border-2 border-sky-200 text-center">
                        <div className="step-number w-20 h-20 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                            4
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-3">Monitor & Optimize</h3>
                        <p className="text-gray-600">
                            Continuous tracking, reporting, and refinement for sustained growth.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurSeoProcess;