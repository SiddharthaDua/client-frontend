import React, { useState, useEffect } from 'react';
import './EcommerceSeo.css';

const EcommerceSeo = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const services = [
        { id: "01", icon: "🛒", title: "E-commerce SEO", desc: "Product & category optimization to increase sales.", features: ["Product Schema", "Shopping Feed"] },
        { id: "02", icon: "📊", title: "SEO Packages", desc: "Scalable solutions for small to enterprise stores.", features: ["Custom Strategy", "ROI Tracking"] },
        { id: "03", icon: "🛍️", title: "Shopify SEO", desc: "Specialized theme and speed optimization.", features: ["Liquid Fixes", "App Audit"] },
        { id: "04", icon: "🔌", title: "WooCommerce", desc: "WordPress focused conversion optimization.", features: ["DB Cleanup", "UX Audit"] },
        { id: "05", icon: "🎯", title: "Magento SEO", desc: "Enterprise performance tuning for large scale.", features: ["M2 Migration", "Multi-store"] },
        { id: "06", icon: "💎", title: "BigCommerce", desc: "Platform specific category structure setup.", features: ["Headless SEO", "URL Mapping"] },
        { id: "07", icon: "📝", title: "WordPress SEO", desc: "Complete site hardening and content rank.", features: ["RankMath", "Security"] },
        { id: "08", icon: "🔷", title: "Drupal SEO", desc: "Module based enterprise CMS optimization.", features: ["Taxonomy", "Token Setup"] },
        { id: "09", icon: "📱", title: "ASO Services", desc: "App Store visibility for mobile commerce.", features: ["Keyword Hub", "Review Flow"] },
    ];

    const displayData = (isMobile && !showAll) ? services.slice(0, 3) : services;

    return (
        <section className="ecom-wrapper py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Unique Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
                    <div className="md:w-2/3">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-[2px] w-12 bg-sky-500"></span>
                            <span className="text-sky-600 font-bold tracking-widest text-sm uppercase">Conversion Focused</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-none">
                            E-commerce <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">SEO Lab.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 md:w-1/3 text-lg border-l-4 border-sky-100 pl-6">
                        We don't just rank pages; we build revenue engines using platform-specific data science.
                    </p>
                </div>

                {/* Professional Modern Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {displayData.map((item) => (
                        <div key={item.id} className="ecom-glass-card group">
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-5xl group-hover:scale-110 transition-transform duration-500 block">{item.icon}</span>
                                    <span className="text-sky-100 font-black text-6xl leading-none select-none group-hover:text-sky-200 transition-colors">{item.id}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 mb-6 leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.features.map((f, i) => (
                                        <span key={i} className="bg-sky-50 text-sky-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-sky-100">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-sky-50 rounded-tl-full z-0 translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 opacity-50"></div>
                        </div>
                    ))}
                </div>

                {isMobile && !showAll && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-sky-600 transition-all shadow-xl shadow-sky-100"
                        >
                            Explore All Platforms
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default EcommerceSeo;