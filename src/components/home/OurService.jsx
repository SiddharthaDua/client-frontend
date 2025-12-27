import React, { useEffect } from 'react';
import './OurService.css';
import websiteImg from "../../assets/webside.jpeg";
import seoImg from "../../assets/seo.jpeg";
import metaImg from "../../assets/metaadd.jpeg";
import graphics from "../../assets/graphic.jpeg";
import marketing from "../../assets/marketing.jpeg";
import { useNavigate } from "react-router-dom";



const OurService = () => {
    useEffect(() => {
        // Scroll animation trigger logic can be added here if needed
    }, []);

    const navigate = useNavigate();

    useEffect(() => { }, []);
    const services = [
        {
            id: "01",
            title: "Website Development",

            img: websiteImg,
            reverse: false
        },
        {
            id: "02",
            title: "SEO Optimization",

            img: seoImg,
            reverse: true
        },
        {
            id: "03",
            title: "Meta Ads Management",

            img: metaImg,
            reverse: false
        },
        {
            id: "04",
            title: "Digital Marketing",

            img: marketing,
            reverse: true
        },
        {
            id: "05",
            title: "Graphic Design",

            img: graphics, // As per your request for the 5th image
            reverse: false
        }
    ];

    const serviceRoutes = {
        "Website Development": "/services/web",
        "SEO Optimization": "/services/seo",
        "Meta Ads Management": "/services/meta",
        "Digital Marketing": "/services/marketing",
        "Graphic Design": "/services/design",
    };



    return (
        <div className="app-container w-full min-h-screen overflow-x-hidden bg-white">

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 section-title">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive digital solutions to grow your business
                        </p>
                    </div>

                    {/* Services Container */}
                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <div key={index} className="service-card" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                                <div className="grid md:grid-cols-2 gap-12 items-center">

                                    {/* Image Column */}
                                    <div className={`relative ${service.reverse ? 'md:order-2 order-1' : ''}`}>
                                        <div className={`absolute inset-0 bg-sky-500 opacity-10 rounded-3xl transform ${service.reverse ? '-rotate-3' : 'rotate-3'}`}></div>
                                        <div className="relative bg-gradient-to-br from-sky-100 to-sky-50 rounded-3xl p-8 floating flex justify-center items-center"
                                            style={{ animationDelay: `${index * 0.5}s` }}>
                                            <div className="relative bg-gradient-to-br from-sky-100 to-sky-50 rounded-3xl overflow-hidden h-80 md:h-96 floating">
                                                <img
                                                    src={service.img}
                                                    alt={service.title}
                                                    className="service-image w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className={`absolute -bottom-6 ${service.reverse ? '-left-6' : '-right-6'} bg-sky-500 text-white text-6xl font-bold rounded-2xl w-20 h-20 flex items-center justify-center shadow-xl`}>
                                            <span className="service-number">{service.id}</span>
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className={`service-content ${service.reverse ? 'md:order-1 order-2' : ''}`}>
                                        <h3 className="text-4xl font-bold mb-6 text-black">
                                            {service.title}
                                        </h3>
                                        {service.title === "Website Development" ? (
                                            <>
                                                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                                    We build <span className="font-semibold text-sky-600">high-performance websites</span> that grow your business.
                                                    Our websites are fast, secure, and conversion-focused.
                                                </p>

                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Custom Website Design</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Fully Responsive Layout</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>High Performance & Speed</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>SEO-Friendly Structure</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Secure & Scalable</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Easy to Manage</li>
                                                </ul>
                                            </>
                                        ) : service.title === "SEO Optimization" ? (
                                            <>
                                                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                                    We help your business <span className="font-semibold text-sky-600">rank higher on Google</span> and get
                                                    consistent organic traffic that converts.
                                                </p>

                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Keyword Research & Planning</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>On-Page SEO Optimization</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Technical SEO Fixes</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>High-Quality Backlinks</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Local SEO Optimization</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Monthly SEO Reports</li>
                                                </ul>
                                            </>
                                        ) : service.title === "Meta Ads Management" ? (
                                            <>
                                                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                                    We run <span className="font-semibold text-sky-600">high-converting Facebook & Instagram ad campaigns</span>
                                                    to generate quality leads and sales.
                                                </p>

                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Facebook & Instagram Ads</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Audience Targeting & Retargeting</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Creative Ad Design</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Lead Generation Campaigns</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Conversion Tracking</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>ROI & Performance Reports</li>
                                                </ul>
                                            </>
                                        ) : service.title === "Digital Marketing" ? (
                                            <>
                                                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                                    We create <span className="font-semibold text-sky-600">complete digital marketing strategies</span>
                                                    to grow your brand, reach more customers, and increase sales.
                                                </p>

                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Social Media Marketing</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Email Marketing Campaigns</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>WhatsApp Marketing</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Content Marketing Strategy</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Brand Awareness Campaigns</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Lead Nurturing Funnels</li>
                                                </ul>
                                            </>
                                        ) : service.title === "Graphic Design" ? (
                                            <>
                                                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                                    We design <span className="font-semibold text-sky-600">eye-catching creatives</span> that strengthen your
                                                    brand identity and marketing impact.
                                                </p>

                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Logo & Brand Identity Design</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Social Media Creatives</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Banner & Poster Design</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Business Cards & Flyers</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Ad Creatives for Meta & Google</li>
                                                    <li className="flex gap-3"><span className="text-sky-500 font-bold">✔</span>Marketing Design Assets</li>
                                                </ul>
                                            </>
                                        ) : (
                                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                                {service.description}
                                            </p>
                                        )}

                                        <button
                                            onClick={() => navigate(serviceRoutes[service.title])}
                                            className="btn-primary bg-sky-500 text-white px-8 py-4 rounded-full font-semibold text-lg relative z-10 cursor-pointer"
                                        >
                                            Learn More →
                                        </button>

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

export default OurService;