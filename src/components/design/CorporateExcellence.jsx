import React from 'react';
import './CorporateExcellence.css';

const CorporateExcellence = () => {
    return (
        <section className="corporate-excellence-wrapper py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="corporate-badge inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        🔹 CORPORATE & PROFESSIONAL DESIGN
                    </div>
                    <h2 className="corporate-title text-4xl font-bold mb-4 text-gray-800">
                        Corporate Excellence
                    </h2>
                </div>

                <div className="corporate-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Company Profile */}
                    <div className="corporate-item bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
                        <div className="corporate-icon text-5xl mb-3">
                            📋
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">Company Profile</h3>
                        <p className="text-sm text-gray-600">Professional documentation</p>
                    </div>

                    {/* Pitch Deck Design */}
                    <div className="corporate-item bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
                        <div className="corporate-icon text-5xl mb-3">
                            📊
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">Pitch Deck Design</h3>
                        <p className="text-sm text-gray-600">Winning presentations</p>
                    </div>

                    {/* Annual Reports */}
                    <div className="corporate-item bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
                        <div className="corporate-icon text-5xl mb-3">
                            📈
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">Annual Reports</h3>
                        <p className="text-sm text-gray-600">Comprehensive reporting</p>
                    </div>

                    {/* Profile Brochure */}
                    <div className="corporate-item bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
                        <div className="corporate-icon text-5xl mb-3">
                            📑
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">Profile Brochure</h3>
                        <p className="text-sm text-gray-600">Brand storytelling</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateExcellence;