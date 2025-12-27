import React, { useEffect } from 'react';
import './OurMarketingServices.css';

const OurMarketingServices = () => {
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

        const animatedElements = document.querySelectorAll('.oms-wrapper .animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            title: "WhatsApp Marketing",
            frontDesc: "Direct customer engagement",
            backTitle: "WhatsApp Solutions",
            icon: (
                <svg className="oms-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            list: ["Bulk Messaging Campaigns", "WhatsApp Business API", "Chatbot Automation", "Broadcast Lists", "Customer Support", "Rich Media Sharing"]
        },
        {
            title: "Email Marketing",
            frontDesc: "Personalized campaigns",
            backTitle: "Email Solutions",
            icon: (
                <svg className="oms-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            list: ["Campaign Design & Strategy", "Marketing Automation", "Drip Campaigns", "Newsletter Management", "A/B Testing", "Analytics & Reporting"]
        },
        {
            title: "Google Ads",
            frontDesc: "Search & display advertising",
            backTitle: "Google Ads Services",
            icon: (
                <svg className="oms-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            list: ["Search Ads Campaigns", "Display Network Ads", "Shopping Ads", "YouTube Advertising", "Remarketing Campaigns", "PPC Management"]
        },
        {
            title: "SMS Marketing",
            frontDesc: "Instant mobile reach",
            backTitle: "SMS Solutions",
            icon: (
                <svg className="oms-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ),
            list: ["Bulk SMS Campaigns", "Transactional SMS", "Promotional Messages", "OTP & Verification", "SMS Automation", "Delivery Reports"]
        },
        {
            title: "Content Marketing",
            frontDesc: "Engaging content creation",
            backTitle: "Content Services",
            icon: (
                <svg className="oms-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
            list: ["Blog Writing", "SEO Content", "Social Media Posts", "Infographics", "Video Scripts", "Content Strategy"]
        }
    ];

    return (
        <div className="oms-wrapper">
            <section className="oms-section">
                <div className="oms-container">
                    <div className="oms-header animate-on-scroll">
                        <h2 className="oms-title">Our Marketing Services</h2>
                        <p className="oms-description">Complete digital marketing solutions tailored to your business goals</p>
                    </div>

                    <div className="oms-grid">
                        {services.map((service, index) => (
                            <div key={index} className="hexagon-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="hexagon-inner">
                                    <div className="hexagon-front">
                                        <div className="icon-circle">
                                            {service.icon}
                                        </div>
                                        <h3 className="service-name">{service.title}</h3>
                                        <p className="service-desc-short">{service.frontDesc}</p>
                                    </div>
                                    <div className="hexagon-back">
                                        <h3 className="back-title">{service.backTitle}</h3>
                                        <ul className="back-list">
                                            {service.list.map((item, i) => (
                                                <li key={i}>✓ {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurMarketingServices;