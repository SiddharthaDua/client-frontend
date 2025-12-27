import React from 'react';
import './WeProvide.css';

const WeProvide = () => {
    const features = [
        { icon: "🎨", title: "Custom Design", desc: "Unique, brand-aligned designs that stand out from the competition." },
        { icon: "📱", title: "Mobile Responsive", desc: "Perfect display on all devices, from phones to desktops." },
        { icon: "⚡", title: "Fast Loading", desc: "Optimized performance for lightning-fast page loads." },
        { icon: "🔒", title: "SSL Security", desc: "Bank-level encryption to protect your data and users." },
        { icon: "💳", title: "Payment Integration", desc: "Secure checkout with Razorpay, Stripe, and PayPal support." },
        { icon: "🚚", title: "Shipping Aggregator", desc: "Automated shipping with Shiprocket and Delhivery API integration." },
        { icon: "🔍", title: "SEO Optimized", desc: "Built-in SEO best practices to rank higher in search." },
        { icon: "📊", title: "Analytics", desc: "Track visitor behavior and measure success metrics." },
        { icon: "💬", title: "Contact Forms", desc: "Easy-to-use forms with spam protection included." },
        { icon: "🔄", title: "CMS Integration", desc: "Easy content updates without technical knowledge." }
    ];

    return (
        /* Scoped Parent Class: we-provide-wrapper */
        <section className="we-provide-wrapper py-20 px-6 bg-gradient-to-br from-sky-50 to-white">
            <div className="max-w-7xl mx-auto">
                <h2 id="features-title" className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
                    What We Provide
                </h2>
                <p className="text-center text-gray-600 mb-16 text-lg">
                    Comprehensive features to power your online success
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="provide-card bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            {/* Sirf Icon - No background box */}
                            <div className="icon-only text-4xl mb-4">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-black mb-2">
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeProvide;