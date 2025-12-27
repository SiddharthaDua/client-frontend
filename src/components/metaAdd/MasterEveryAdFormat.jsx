import React, { useEffect, useRef } from 'react';
import './MasterEveryAdFormat.css';

const MasterEveryAdFormat = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const formats = [
        "📸 Image Ads",
        "🎥 Video Ads",
        "📱 Stories Ads",
        "🎬 Reels Ads",
        "🎠 Carousel Ads",
        "🛍️ Collection Ads",
        "📊 Slideshow Ads",
        "🎮 Playable Ads",
        "💬 Messenger Ads",
        "📢 Lead Form Ads",
        "🏪 Dynamic Product Ads",
        "🔄 Instant Experience Ads"
    ];

    return (
        <div id="master-ad-formats-wrapper">
            <section ref={sectionRef} className="w-full px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Master Every Ad Format
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We create high-performing ads across all Meta formats
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
                        {formats.map((format, index) => (
                            <div key={index} className="service-tag">
                                {format}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MasterEveryAdFormat;