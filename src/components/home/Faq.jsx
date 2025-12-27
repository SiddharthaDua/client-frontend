import React, { useState } from "react";
import "./Faq.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
    {
        question: "What services does your marketing agency provide?",
        answer:
            "We provide website development, SEO, social media marketing, paid ads, branding, graphic design, and complete digital marketing solutions.",
    },
    {
        question: "How long does it take to see marketing results?",
        answer:
            "Results depend on the service. SEO usually takes 2–3 months, while ads and social media campaigns can show results within days or weeks.",
    },
    {
        question: "Do you offer customized marketing packages?",
        answer:
            "Yes, all our marketing packages are fully customized based on your business goals, industry, and budget.",
    },
    {
        question: "Is there any contract or minimum commitment?",
        answer:
            "No long-term contracts are required. We offer flexible monthly plans so you stay with us because of results, not obligation.",
    },
    {
        question: "Can you help with local business marketing?",
        answer:
            "Absolutely! We specialize in local SEO, Google Business Profile optimization, and targeted ads for local businesses.",
    },
    {
        question: "Do you provide regular performance reports?",
        answer:
            "Yes, we provide detailed monthly reports covering traffic, leads, conversions, and campaign performance.",
    },
    {
        question: "Will my website be mobile-friendly?",
        answer:
            "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop devices.",
    },
    {
        question: "Can you manage paid ads on Facebook and Google?",
        answer:
            "Yes, we manage Facebook, Instagram, and Google Ads with complete strategy, creatives, and optimization.",
    },
    {
        question: "How do you charge for your services?",
        answer:
            "Our pricing depends on the scope of work. We offer transparent pricing with no hidden costs.",
    },
    {
        question: "How do we get started with your agency?",
        answer:
            "Simply contact us through our website or WhatsApp, and our team will guide you through the onboarding process.",
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2 className="faq-heading">Frequently Asked Questions</h2>

            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                    >
                        <button className="faq-question" onClick={() => toggleFAQ(index)}>
                            <span>{item.question}</span>
                            {activeIndex === index ? (
                                <FaChevronUp />
                            ) : (
                                <FaChevronDown />
                            )}
                        </button>

                        <div className="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
