import React, { useState, useEffect } from 'react';
import './OrganicSeo.css';

const OrganicSeo = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const services = [
        { id: "01", icon: "📄", title: "On Page SEO", desc: "Optimizing content structure, meta tags, and internal architecture.", features: ["Content Audit", "Meta Strategy", "Keyword Hub", "Internal Links"] },
        { id: "02", icon: "🔗", title: "Off Page SEO", desc: "Building authority via quality backlinks and digital PR campaigns.", features: ["Link Building", "Guest Posting", "Brand Mentions", "PR Strategy"] },
        { id: "03", icon: "⚙️", title: "Technical SEO", desc: "Solid technical foundation for crawling, indexing, and performance.", features: ["Site Speed", "Mobile UX", "Schema Markup", "Core Web Vitals"] },
        { id: "04", icon: "📍", title: "Local SEO", desc: "Dominating local maps and attracting geo-targeted customers.", features: ["GBP Mastery", "Local Citations", "Review Flow", "Maps Ranking"] },
        { id: "05", icon: "🏪", title: "Small Business SEO", desc: "Growth-focused solutions specifically designed for startups.", features: ["Budget Optimization", "Quick Wins", "Market Entry", "ROI Focus"] },
        { id: "06", icon: "🌍", title: "Global SEO", desc: "Expanding reach across borders with multi-country strategies.", features: ["Multi-lingual SEO", "Global Research", "Market Analysis", "Hreflang Setup"] },
        { id: "07", icon: "📹", title: "YouTube SEO", desc: "Maximizing video views and channel growth through algorithms.", features: ["Video Ranking", "Thumbnail UX", "Engagement Hub", "Vlog Strategy"] }
    ];

    const displayData = (isMobile && !showAll) ? services.slice(0, 3) : services;

    return (
        <section className="organic-seo-wrapper py-24 px-6 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[120px] -z-10 opacity-60"></div>

            <div className="max-w-7xl mx-auto">
                {/* Minimalist Header */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-[2px] bg-sky-500"></span>
                            <span className="text-sky-500 font-bold tracking-tighter uppercase text-sm">Growth Engine</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                            Organic <br /><span className="text-slate-200">Growth.</span>
                        </h2>
                    </div>
                    <div className="flex-1">
                        <p className="text-xl text-slate-500 leading-relaxed max-w-md">
                            We don't just optimize; we engineer sustainable visibility. Every click is a step toward market dominance.
                        </p>
                    </div>
                </div>

                {/* Unique Fluid List - No Cards Concept */}
                <div className="space-y-4">
                    {displayData.map((item, index) => (
                        <div key={item.id} className="organic-row group py-10 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center gap-8 transition-all duration-500">
                            {/* Number & Icon Section */}
                            <div className="flex items-center gap-6 lg:w-1/4">
                                <span className="text-slate-300 font-black text-4xl group-hover:text-sky-500 transition-colors duration-500 italic">
                                    {item.id}
                                </span>
                                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-3xl group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-sm">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Title & Description Section */}
                            <div className="lg:w-2/4">
                                <h3 className="text-3xl font-bold text-slate-900 mb-2 group-hover:translate-x-2 transition-transform duration-500">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Features Section - Modern Tag Cloud */}
                            <div className="lg:w-1/4 flex flex-wrap gap-2">
                                {item.features.map((f, i) => (
                                    <span key={i} className="text-[11px] font-bold tracking-widest text-slate-400 uppercase border border-slate-100 px-3 py-1 rounded group-hover:border-sky-200 group-hover:text-sky-600 transition-all">
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {isMobile && !showAll && (
                    <div className="mt-20 text-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                            Show All Strategies
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default OrganicSeo;