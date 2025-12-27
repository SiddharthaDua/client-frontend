import React, { useEffect, useRef } from 'react';
import './Ecosystem.css';

const Ecosystem = () => {
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

        // Scope the query to only elements inside this wrapper
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const platforms = [
        {
            name: 'Facebook',
            users: '2.9B+ Monthly Users',
            colorClass: 'bg-blue-600',
            gradientClass: 'from-blue-50',
            borderClass: 'border-blue-100',
            icon: <span className="text-4xl font-black text-white">f</span>,
            delay: '0s',
        },
        {
            name: 'Instagram',
            users: '2B+ Monthly Users',
            colorClass: 'bg-gradient-to-br from-purple-600 to-pink-600',
            gradientClass: 'from-pink-50',
            borderClass: 'border-pink-100',
            icon: (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                </svg>
            ),
            delay: '0.1s',
        },
        {
            name: 'WhatsApp',
            users: '2B+ Monthly Users',
            colorClass: 'bg-green-500',
            gradientClass: 'from-green-50',
            borderClass: 'border-green-100',
            icon: (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            delay: '0.2s',
        },
        {
            name: 'Messenger',
            users: '1B+ Monthly Users',
            colorClass: 'bg-sky-500',
            gradientClass: 'from-sky-50',
            borderClass: 'border-sky-100',
            icon: (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-10 4.23-10 9.45 0 2.97 1.45 5.6 3.73 7.33v3.78l3.53-1.94c0.88 0.24 1.8 0.38 2.74 0.38 5.5 0 10-4.23 10-9.45S17.5 2.04 12 2.04zm1.1 12.03-2.14-2.28-4.17 2.28 4.58-4.88 2.21 2.28 4.1-2.28-4.58 4.88z" />
                </svg>
            ),
            delay: '0.3s',
        },
    ];

    return (
        <div id="meta-ecosystem-wrapper">
            <section ref={sectionRef} className="w-full px-6 py-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Advertise Across Meta's Ecosystem
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Reach your audience wherever they are with integrated campaigns across all Meta platforms
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {platforms.map((platform, index) => (
                            <div
                                key={index}
                                className={`platform-badge bg-gradient-to-br ${platform.gradientClass} to-white p-8 rounded-2xl text-center shadow-lg border-2 ${platform.borderClass} animate-on-scroll`}
                                style={{ animationDelay: platform.delay }}
                            >
                                <div className={`w-20 h-20 ${platform.colorClass} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md`}>
                                    {platform.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                                <p className="text-gray-600">{platform.users}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ecosystem;