import React from 'react';
import './Maintenance.css';

const Maintenance = () => {
    return (
        /* Scoped Parent Class added here */
        <section className="maintenance-wrapper py-20 px-6 bg-gradient-to-br from-black to-gray-900">
            <div className="max-w-7xl mx-auto">
                <h2 id="maintenance-title" className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
                    Maintenance & Support
                </h2>
                <p className="text-center text-gray-300 mb-16 text-lg">
                    Keep your website running smoothly with our maintenance packages
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Basic Maintenance Card */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-sky-500 hover-glow">
                        <h3 className="text-3xl font-bold text-white mb-2">Basic Maintenance</h3>
                        <div className="text-4xl font-bold text-sky-400 mb-6">₹1,999/month</div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start"><span className="text-sky-400 mr-3 mt-1">✓</span> <span>Security updates and patches</span></li>
                            <li className="flex items-start"><span className="text-sky-400 mr-3 mt-1">✓</span> <span>Weekly backups</span></li>
                            <li className="flex items-start"><span className="text-sky-400 mr-3 mt-1">✓</span> <span>Performance monitoring</span></li>
                            <li className="flex items-start"><span className="text-sky-400 mr-3 mt-1">✓</span> <span>Minor content updates (up to 2 hours/month)</span></li>
                            <li className="flex items-start"><span className="text-sky-400 mr-3 mt-1">✓</span> <span>Email support (48-hour response)</span></li>
                            <li className="flex items-start"><span className="text-sky-400 mr-3 mt-1">✓</span> <span>Monthly performance report</span></li>
                        </ul>
                    </div>

                    {/* Premium Maintenance Card */}
                    <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-8 border-2 border-white shadow-2xl hover-lift-premium">
                        <h3 className="text-3xl font-bold text-white mb-2">Premium Maintenance</h3>
                        <div className="text-4xl font-bold text-white mb-6">₹9,999/month</div>
                        <ul className="space-y-4 text-white">
                            <li className="flex items-start"><span className="mr-3 mt-1">✓</span> <span>Everything in Basic Plan</span></li>
                            <li className="flex items-start"><span className="mr-3 mt-1">✓</span> <span>Daily backups with instant recovery</span></li>
                            <li className="flex items-start"><span className="mr-3 mt-1">✓</span> <span>24/7 uptime monitoring</span></li>
                            <li className="flex items-start"><span className="mr-3 mt-1">✓</span> <span>Content updates (up to 5 hours/month)</span></li>
                            <li className="flex items-start"><span className="mr-3 mt-1">✓</span> <span>Priority support (24-hour response)</span></li>
                            <li className="flex items-start"><span className="mr-3 mt-1">✓</span> <span>Monthly SEO audit</span></li>
                            <li className="flex items-start"><span className="mr-3 mt-1">✓</span> <span>Advanced analytics reporting</span></li>
                        </ul>
                    </div>
                </div>

                {/* Additional Services Box */}
                <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 max-w-5xl mx-auto border border-sky-500">
                    <h3 className="text-3xl font-bold text-white mb-6 text-center">Additional Services Available</h3>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div className="service-item">
                            <h4 className="text-sky-400 font-semibold mb-2">Emergency Support</h4>
                            <p>24/7 urgent fixes - ₹2000/hour</p>
                        </div>
                        <div className="service-item">
                            <h4 className="text-sky-400 font-semibold mb-2">Feature Development</h4>
                            <p>Custom features - Starting at ₹5000</p>
                        </div>
                        <div className="service-item">
                            <h4 className="text-sky-400 font-semibold mb-2">SEO Optimization</h4>
                            <p>Advanced SEO package - ₹4,999/month</p>
                        </div>
                        <div className="service-item">
                            <h4 className="text-sky-400 font-semibold mb-2">Content Writing</h4>
                            <p>Professional copywriting - ₹599/page</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Maintenance;