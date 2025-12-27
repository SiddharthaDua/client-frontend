import React, { useState, useEffect } from 'react';
import './AiSeo.css';

const AiSeo = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Screen size check karne ke liye logic
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const services = [
        { id: 1, icon: "🤖", title: "AI SEO", desc: "Leverage artificial intelligence for smarter, data-driven SEO strategies.", features: ["AI-powered analysis", "Predictive insights", "Automated optimization", "Machine learning"] },
        { id: 2, icon: "🧠", title: "AI SEO Services", desc: "Comprehensive AI-driven optimization for next-generation search.", features: ["AI content optimization", "Smart keyword targeting", "Automated reporting", "Competitive intelligence"] },
        { id: 3, icon: "✨", title: "Generative AI Services", desc: "Optimize for AI-generated search results and recommendations.", features: ["AI content creation", "GPT optimization", "AI platform targeting", "Content structuring"] },
        { id: 4, icon: "🔮", title: "Google AI Mode", desc: "Optimize for Google's AI-powered search experience and SGE.", features: ["SGE optimization", "AI snapshot targeting", "Featured content", "Answer optimization"] },
        { id: 5, icon: "💡", title: "AEO Services", desc: "Answer Engine Optimization for voice and AI assistants.", features: ["Answer optimization", "Voice search optimization", "FAQ optimization", "Featured snippets"] },
        { id: 6, icon: "🌐", title: "Search Everywhere Optimization", desc: "Optimize for all search platforms and AI-powered discovery engines.", features: ["Multi-platform SEO", "Cross-platform strategy", "Universal optimization", "Omnichannel presence"] },
        { id: 7, icon: "🔎", title: "SearchGPT SEO", desc: "Optimize for OpenAI's SearchGPT and conversational search.", features: ["SearchGPT optimization", "Conversational content", "Natural language optimization", "Context optimization"] },
        { id: 8, icon: "💬", title: "ChatGPT SEO", desc: "Optimize your content to be recommended by ChatGPT and AI chatbots.", features: ["ChatGPT visibility", "AI recommendation optimization", "Citation optimization", "Authority building"] },
        { id: 9, icon: "🎓", title: "Perplexity SEO", desc: "Get featured in Perplexity AI search results and citations.", features: ["Perplexity optimization", "Source credibility", "Citation strategy", "Answer formatting"] }
    ];

    // Mobile par 3 dikhao agar showAll false hai, Desktop par hamesha sab dikhao
    const visibleServices = (isMobile && !showAll) ? services.slice(0, 3) : services;

    return (
        <section className="ai-seo-wrapper py-24 px-6 bg-gradient-to-br from-black to-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="text-sky-400 font-semibold text-lg mb-2 block animate-pulse">
                        🔹 NEXT-GEN SEARCH & AI PLATFORMS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        AI SEO Services
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Future-proof your SEO with cutting-edge AI optimization strategies
                    </p>
                </div>

                {/* AI Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleServices.map((service) => (
                        <div key={service.id} className="ai-service-card rounded-2xl p-8 border-2 border-sky-500/50">
                            <div className="ai-icon-wrapper w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-3xl">{service.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-300 mb-4">{service.desc}</p>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                {service.features.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="check-neon">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* See All Link for Mobile */}
                {isMobile && !showAll && (
                    <div className="text-center mt-10">
                        <button
                            onClick={() => setShowAll(true)}
                            className="text-sky-400 font-bold text-lg border-b-2 border-sky-400 hover:text-sky-300 transition-colors"
                        >
                            See All Services ↓
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AiSeo;