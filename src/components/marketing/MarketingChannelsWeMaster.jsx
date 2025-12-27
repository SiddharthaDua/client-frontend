import React, { useEffect } from 'react';
import './MarketingChannelsWeMaster.css';

const MarketingChannelsWeMaster = () => {
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

        const elements = document.querySelectorAll('.mcwm-wrapper .animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const channels = [
        {
            icon: "💬",
            title: "WhatsApp Business Marketing",
            desc: "Reach your customers where they spend most of their time",
            tags: ["Bulk Messaging", "Automation", "Chatbots", "API Integration", "Catalog Sharing", "Payment Links"]
        },
        {
            icon: "📧",
            title: "Email Campaign Management",
            desc: "Build lasting relationships with personalized email strategies",
            tags: ["Newsletter Design", "Segmentation", "Drip Campaigns", "A/B Testing", "Automation", "Analytics"]
        },
        {
            icon: "🔍",
            title: "Google Advertising Suite",
            desc: "Dominate search results and display networks",
            tags: ["Search Ads", "Display Ads", "Shopping Ads", "YouTube Ads", "Remarketing", "Local Campaigns"]
        },
        {
            icon: "📱",
            title: "SMS & Text Messaging",
            desc: "Instant delivery with 98% open rates",
            tags: ["Bulk SMS", "Transactional", "Promotional", "OTP Services", "2-Way SMS", "Scheduling"]
        },
        {
            icon: "📝",
            title: "Content Creation & Strategy",
            desc: "Compelling content that converts and engages",
            tags: ["Blog Posts", "SEO Content", "Copywriting", "Video Scripts", "Social Posts", "Infographics"]
        },
        {
            icon: "📊",
            title: "Social Media Management",
            desc: "Build communities and drive organic growth",
            tags: ["Profile Setup", "Content Planning", "Community Mgmt", "Engagement", "Analytics", "Reporting"]
        },
        {
            icon: "🎯",
            title: "Search Engine Optimization",
            desc: "Improve visibility and organic traffic",
            tags: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO", "SEO Audits"]
        },
        {
            icon: "📈",
            title: "Analytics & Tracking",
            desc: "Data-driven insights for better decisions",
            tags: ["Google Analytics", "Conversion Tracking", "Custom Reports", "Dashboards", "Attribution", "ROI Analysis"]
        }
    ];

    return (
        <div className="mcwm-wrapper">
            <section className="mcwm-mesh-bg">
                <div className="mcwm-container">
                    <div className="mcwm-header animate-on-scroll">
                        <h2 className="mcwm-main-title">Marketing Channels We Master</h2>
                        <p className="mcwm-sub-desc">Comprehensive solutions across every major digital marketing platform</p>
                    </div>

                    <div className="mcwm-grid">
                        {channels.map((channel, index) => (
                            <div
                                key={index}
                                className="service-breakdown animate-on-scroll"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="breakdown-content">
                                    <div className="breakdown-icon">{channel.icon}</div>
                                    <div className="breakdown-text">
                                        <h3 className="breakdown-title">{channel.title}</h3>
                                        <p className="breakdown-desc">{channel.desc}</p>
                                    </div>
                                </div>
                                <div className="breakdown-tags">
                                    {channel.tags.map((tag, i) => (
                                        <span key={i} className="feature-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MarketingChannelsWeMaster;