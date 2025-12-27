import React from 'react';
import './WebsiteUiGraphics.css';
import designS2Img from '../../assets/designS2.jpeg'
const WebsiteUiGraphics = () => {
    return (
        <section className="website-ui-wrapper py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="website-zigzag-section">
                    {/* Left Content Side */}
                    <div className="website-content-side">
                        <div className="website-badge inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            🔹 WEBSITE & UI GRAPHICS
                        </div>
                        <h2 className="website-main-title text-4xl font-bold mb-4 text-gray-800">
                            Elevate Your Digital Presence
                        </h2>
                        <div className="website-items-list space-y-3">
                            <div className="website-card bg-white p-4 rounded-xl shadow-sm">
                                <p className="font-semibold text-gray-800">🖥️ Website Banner Design</p>
                            </div>
                            <div className="website-card bg-white p-4 rounded-xl shadow-sm">
                                <p className="font-semibold text-gray-800">⭐ Hero Section Design</p>
                            </div>
                            <div className="website-card bg-white p-4 rounded-xl shadow-sm">
                                <p className="font-semibold text-gray-800">🎯 Landing Page Graphics</p>
                            </div>
                            <div className="website-card bg-white p-4 rounded-xl shadow-sm">
                                <p className="font-semibold text-gray-800">🎨 Custom Illustrations</p>
                            </div>
                            <div className="website-card bg-white p-4 rounded-xl shadow-sm">
                                <p className="font-semibold text-gray-800">📊 Infographic Design</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Side */}
                    <div className="website-image-side flex justify-center">
                        <div className="website-visual-box w-80 h-64 bg-gradient-to-br from-sky-400 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                            <img
                                src={designS2Img}
                                alt="Website and UI Graphics"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentNode.innerHTML = '💻';
                                    e.target.parentNode.classList.add('text-white', 'text-9xl');
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteUiGraphics;