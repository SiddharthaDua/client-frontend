import React from 'react';
import './PricingPlans.css';

const PricingPlans = ({ onGetStarted }) => {
    return (
        /* Scoped Parent Class added here */
        <section className="pricing-plans-wrapper py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 id="pricing-title" className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
                    Pricing Plans
                </h2>
                <p className="text-center text-gray-600 mb-16 text-lg">
                    Flexible packages to suit every business need and budget
                </p>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Starter Plan */}
                    <div className="price-card bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
                        <div className="text-sky-500 font-semibold mb-2">STARTER</div>
                        <div className="text-5xl font-bold text-black mb-4">₹1999</div>
                        <p className="text-gray-600 mb-6">Perfect for small businesses and startups</p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> Up to 5 Pages</li>
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> Mobile Responsive</li>
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> Contact Form</li>
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> Basic SEO Setup</li>
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> 2 Weeks Delivery</li>
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> 1 Month Support</li>
                        </ul>
                        <button onClick={onGetStarted} className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition-all duration-300 cursor-pointer">
                            Contact Us
                        </button>
                    </div>

                    {/* Professional Plan (Most Popular) */}
                    <div className="price-card bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-8 shadow-2xl transform md:scale-105 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-sm font-semibold">
                            MOST POPULAR
                        </div>
                        <div className="text-white font-semibold mb-2">PROFESSIONAL</div>
                        <div className="text-5xl font-bold text-white mb-4">₹4,499</div>
                        <p className="text-sky-100 mb-6">Ideal for growing businesses</p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-white"><span className="checkmark mr-3 text-xl">✓</span> Up to 15 Pages</li>
                            <li className="flex items-center text-white"><span className="checkmark mr-3 text-xl">✓</span> Advanced Animations</li>
                            <li className="flex items-center text-white"><span className="checkmark mr-3 text-xl">✓</span> CMS Integration</li>
                            <li className="flex items-center text-white"><span className="checkmark mr-3 text-xl">✓</span> Advanced SEO</li>
                            <li className="flex items-center text-white"><span className="checkmark mr-3 text-xl">✓</span> 4 Weeks Delivery</li>
                            <li className="flex items-center text-white"><span className="checkmark mr-3 text-xl">✓</span> 3 Months Support</li>
                            <li className="flex items-center text-white"><span className="checkmark mr-3 text-xl">✓</span> Analytics Setup</li>
                        </ul>
                        <button onClick={onGetStarted} className="w-full bg-white text-sky-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                            Contact Us
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="price-card bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
                        <div className="text-sky-500 font-semibold mb-2">ENTERPRISE</div>
                        <div className="text-5xl font-bold text-black mb-4">₹9,999+</div>
                        <p className="text-gray-600 mb-6">Full-scale solutions for large organizations</p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> Unlimited Pages</li>
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> Custom Features</li>
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> E-commerce Ready</li>
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> Premium SEO Package</li>
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> 8+ Weeks Delivery</li>
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> 12 Months Support</li>
                            <li className="flex items-center text-gray-700"><span className="checkmark text-sky-500 mr-3 text-xl">✓</span> Dedicated Manager</li>
                        </ul>
                        <button onClick={onGetStarted} className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition-all duration-300 cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;