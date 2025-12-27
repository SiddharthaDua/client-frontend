import React from 'react';
import './WebsiteTypes.css';

const WebsiteTypes = () => {
    const services = [
        {
            title: "Business Website",
            desc: "Professional corporate sites with modern design, SEO optimization, and mobile responsiveness.",
            features: ["5-10 Pages", "Contact Forms", "Blog Section"],
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        },
        {
            title: "E-commerce Store",
            desc: "Full-featured online stores with secure payment integration and inventory management.",
            features: ["Product Catalog", "Shopping Cart", "Payment Gateway"],
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        },
        {
            title: "Portfolio Website",
            desc: "Stunning showcase sites for creatives, freelancers, and professionals.",
            features: ["Gallery System", "Project Showcase", "About Section"],
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        },
        {
            title: "Landing Page",
            desc: "High-converting single-page sites optimized for marketing campaigns.",
            features: ["Lead Capture", "CTA Optimization", "Analytics Integration"],
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        },
        {
            title: "Custom Web App",
            desc: "Tailored web applications with advanced functionality and user authentication.",
            features: ["User Dashboards", "Database Integration", "API Development"],
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        },
        {
            title: "Blog/Magazine",
            desc: "Content-rich platforms with CMS, categories, and social integration.",
            features: ["Content Management", "Multi-Author Support", "Comment System"],
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        }
    ];

    return (
        /* Scoped Parent Class added here */
        <section className="website-types-container py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
                    Website Types We Build
                </h2>
                <p className="text-center text-gray-600 mb-16 text-lg">
                    From simple portfolios to complex e-commerce platforms
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <div key={index} className="feature-card bg-white rounded-2xl p-8 shadow-lg hover-lift gradient-border">
                            <div className="feature-icon w-16 h-16 bg-sky-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {item.icon}
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.desc}</p>
                            <ul className="space-y-2 text-gray-700">
                                {item.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center">
                                        <span className="text-sky-500 mr-2">✓</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebsiteTypes;