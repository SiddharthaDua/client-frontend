import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    MessageCircle,
    Search,
    LineChart,
    Facebook,
    FileText,
} from "lucide-react";
import "./HeroSection.css";

// Note: GetStarted import ki ab yahan zaroorat nahi hai agar hum App.js wala popup use kar rahe hain
// Lekin agar aap independently manage karna chahte hain toh rehne de sakte hain.
// Best practice: App.js wala hi use karein taaki floating contact hide ho sake.

const HeroSection = ({ onGetStarted }) => { // 1. onGetStarted prop accept karein
    const fullText = "Transform Your Digital Presence";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setDisplayText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100);
        return () => clearInterval(timer);
    }, []);

    const barData = [
        { x: 50, height: 40, label: "Jan" },
        { x: 90, height: 60, label: "Feb" },
        { x: 130, height: 55, label: "Mar" },
        { x: 170, height: 85, label: "Apr" },
        { x: 210, height: 100, label: "May" },
        { x: 250, height: 125, label: "Jun" },
    ];

    const linePath = barData
        .map(
            (bar, i) =>
                `${i === 0 ? "M" : "L"} ${bar.x + 10} ${130 - bar.height - 10}`
        )
        .join(" ");

    const orbitIcons = [
        { icon: <Mail size={20} />, color: "#87CEEB", class: "d1" },
        { icon: <MessageCircle size={20} />, color: "#25D366", class: "d2" },
        { icon: <Search size={20} />, color: "#FFD700", class: "d3" },
        { icon: <LineChart size={20} />, color: "#FFA500", class: "d4" },
        { icon: <Facebook size={20} />, color: "#1877F2", class: "d5" },
        { icon: <FileText size={20} />, color: "#FFFFFF", class: "d6" },
    ];

    const renderHeading = () => {
        const parts = displayText.split(/(Digital Presence)/g);
        return parts.map((part, index) =>
            part === "Digital Presence" ? (
                <span key={index} className="skyblue-text">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <section className="hero-root">
            <div className="circuit-bg"></div>

            <main className="content-wrapper">
                <div className="hero-section">
                    <h2 className="main-heading">
                        {renderHeading()}
                        <span className="cursor">|</span>
                    </h2>
                    <p className="sub-heading">
                        Grow your business with{" "}
                        <span className="blink-text">SP TechDigital.</span>
                    </p>
                </div>

                <div className="visual-container">
                    <div className="content-left">
                        <div className="graph-card">
                            <h3 className="graph-label">
                                📈 Revenue Growth & Market Share
                            </h3>
                            <svg className="svg-chart" viewBox="0 0 300 160">
                                <line
                                    x1="30"
                                    y1="130"
                                    x2="280"
                                    y2="130"
                                    stroke="rgba(135, 206, 235, 0.2)"
                                    strokeWidth="1"
                                />
                                {barData.map((bar, i) => (
                                    <g key={i}>
                                        <motion.rect
                                            initial={{ height: 0, y: 130 }}
                                            animate={{
                                                height: bar.height,
                                                y: 130 - bar.height,
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                delay: i * 0.2,
                                                ease: "easeOut",
                                            }}
                                            x={bar.x}
                                            width="20"
                                            fill="url(#barGradient)"
                                            rx="3"
                                        />
                                        <motion.text
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: i * 0.2 + 0.5 }}
                                            x={bar.x + 10}
                                            y="150"
                                            textAnchor="middle"
                                            fill="#87CEEB"
                                            fontSize="10"
                                        >
                                            {bar.label}
                                        </motion.text>
                                    </g>
                                ))}
                                <motion.path
                                    d={linePath}
                                    fill="none"
                                    stroke="#ADFF2F"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{
                                        duration: 2.5,
                                        delay: 1,
                                        ease: "easeInOut",
                                    }}
                                />
                                <defs>
                                    <linearGradient
                                        id="barGradient"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop offset="0%" stopColor="#87CEEB" />
                                        <stop
                                            offset="100%"
                                            stopColor="rgba(135, 206, 235, 0.1)"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="content-right">
                        <div className="orbit-wrapper">
                            <div className="computer-static">
                                <svg viewBox="0 0 100 100" className="comp-svg">
                                    <rect
                                        x="10"
                                        y="20"
                                        width="80"
                                        height="50"
                                        rx="3"
                                        fill="none"
                                        stroke="#87CEEB"
                                        strokeWidth="2"
                                    />
                                    <rect
                                        x="15"
                                        y="25"
                                        width="70"
                                        height="40"
                                        fill="#1f2937"
                                    />
                                    <rect x="45" y="70" width="10" height="10" fill="#87CEEB" />
                                    <rect
                                        x="30"
                                        y="80"
                                        width="40"
                                        height="4"
                                        rx="2"
                                        fill="#87CEEB"
                                    />
                                </svg>
                            </div>

                            {orbitIcons.map((item, idx) => (
                                <div key={idx} className={`orbiting-icon ${item.class}`}>
                                    <div
                                        className="icon-box"
                                        style={{
                                            borderColor: item.color,
                                            color: item.color,
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="button-section">
                    {/* 2. onClick par onGetStarted call karein */}
                    <button className="btn-fill" onClick={onGetStarted}>
                        Get Started
                    </button>
                </div>
            </main>
        </section>
    );
};

export default HeroSection;