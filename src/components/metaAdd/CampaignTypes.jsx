import React, { useEffect, useRef } from 'react';
import './CampaignTypes.css';

const CampaignTypes = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const campaigns = [
        { title: "🎯 Brand Awareness Campaigns", desc: "Build brand recognition and reach new audiences at scale", delay: "0s" },
        { title: "📱 Lead Generation Campaigns", desc: "Capture qualified leads with optimized lead forms and funnels", delay: "0.05s" },
        { title: "🛒 E-Commerce Sales Campaigns", desc: "Drive product sales with dynamic catalog ads and shopping features", delay: "0.1s" },
        { title: "📲 App Install Campaigns", desc: "Increase app downloads and in-app conversions", delay: "0.15s" },
        { title: "💬 Engagement Campaigns", desc: "Boost post engagement, page likes, and event responses", delay: "0.2s" },
        { title: "🎬 Video View Campaigns", desc: "Maximize video reach and completion rates", delay: "0.25s" },
        { title: "📍 Local Awareness Campaigns", desc: "Drive foot traffic to physical store locations", delay: "0.3s" },
        { title: "🔄 Retargeting Campaigns", desc: "Re-engage website visitors and past customers", delay: "0.35s" }
    ];

    return (
        <div id="campaign-types-wrapper">
            <section ref={sectionRef} className="w-full px-6 py-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Campaign Types We Specialize In</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Every business objective needs a unique approach</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {campaigns.map((item, index) => (
                            <div
                                key={index}
                                className="campaign-type rounded-xl animate-on-scroll"
                                style={{ animationDelay: item.delay }}
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CampaignTypes;