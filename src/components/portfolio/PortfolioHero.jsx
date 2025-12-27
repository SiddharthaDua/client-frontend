import React, { useEffect, useState } from "react";
import "./PortfolioHero.css";
import portfolioVideo from "../../assets/portfolio.mp4";

const PortfolioHero = ({ onGetStarted }) => {
    const fullText = "Our Work. Real Results.";
    const [displayText, setDisplayText] = useState("");

    // ✍️ Typing effect (refresh par ek baar)
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 80);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[550px] w-full overflow-hidden flex items-center justify-center">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 w-full h-full object-cover"
            >
                <source src={portfolioVideo} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute z-10 w-full h-full bg-black/40"></div>

            {/* Content */}
            <div className="relative z-20 text-center px-4">
                {/* Heading */}
                <h1 className="typing-heading text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                    {displayText}
                    <span className="cursor">|</span>
                </h1>

                {/* Paragraph */}
                <p className="portfolio-para text-base md:text-xl font-light max-w-2xl mx-auto">
                    We design and deliver high-impact websites, marketing campaigns, and
                    digital experiences that help brands grow, engage, and lead in the
                    digital world.
                </p>

                {/* Button */}
                <button onClick={onGetStarted} className="portfolio-btn mt-6 px-6 py-2 font-semibold rounded-full transition duration-300 cursor-pointer">
                    Join Us
                </button>
            </div>
        </section>
    );
};

export default PortfolioHero;
