import React, { useEffect } from "react";
import "./AboutHero.css";
import { useNavigate } from "react-router-dom";

const AboutHero = ({ onGetStarted }) => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("hidden-initial");
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll(".hidden-initial");
        animatedElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    const navigate = useNavigate();

    return (
        <section className="hero-container hero-mobile-fix relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">

            {/* Background Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="blob blob-1 animate-float"></div>
                <div className="blob blob-2 animate-float"></div>
                <div className="blob blob-3 animate-float"></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-sky-100"></div>

            {/* Animated Circles */}
            <div className="circle circle-1 animate-pulse-custom"></div>
            <div className="circle circle-2 animate-pulse-custom"></div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <div className="hidden-initial animate-slide-up">
                    <div className="badge">
                        ✨ Award-Winning Digital Marketing Agency
                    </div>
                </div>

                <h1 className="hidden-initial animate-slide-up delay-100 hero-title">
                    We Create <span className="gradient-text">Digital Magic</span> That
                    Drives Results
                </h1>

                <p className="hidden-initial animate-slide-up delay-200 hero-subtitle">
                    Transform your brand's digital presence with innovative strategies,
                    creative excellence, and measurable success
                </p>

                <div className="hidden-initial animate-slide-up delay-300 hero-actions">
                    <button className="primary-btn cursor-pointer" onClick={onGetStarted}>
                        Start Your Journey
                    </button>
                    <button
                        className="secondary-btn cursor-pointer"
                        onClick={() => navigate("/portfolio")}
                    >
                        View Our Work
                    </button>

                </div>
            </div>
        </section>
    );
};

export default AboutHero;
