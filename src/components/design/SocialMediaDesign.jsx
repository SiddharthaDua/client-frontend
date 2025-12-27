import React from 'react';
import './SocialMediaDesign.css';

const SocialMediaDesign = () => {
    return (
        <section className="social-media-design-wrapper py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="social-zigzag-section">
                    {/* Left Icon Grid Side */}
                    <div className="social-media-visuals flex-1 flex justify-center">
                        <div className="social-icon-grid grid grid-cols-2 gap-4">
                            <div className="social-box w-32 h-32 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-5xl shadow-lg">
                                📱
                            </div>
                            <div className="social-box w-32 h-32 bg-gradient-to-br from-cyan-400 to-sky-600 rounded-2xl flex items-center justify-center text-white text-5xl shadow-lg">
                                📸
                            </div>
                            <div className="social-box w-32 h-32 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-5xl shadow-lg">
                                ▶️
                            </div>
                            <div className="social-box w-32 h-32 bg-gradient-to-br from-cyan-500 to-sky-700 rounded-2xl flex items-center justify-center text-white text-5xl shadow-lg">
                                💼
                            </div>
                        </div>
                    </div>

                    {/* Right Content Side */}
                    <div className="social-media-content flex-1">
                        <div className="social-badge inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            🔹 SOCIAL MEDIA DESIGN
                        </div>
                        <h2 className="social-main-title text-4xl font-bold mb-4 text-gray-800">
                            Dominate Social Platforms
                        </h2>
                        <div className="social-list-grid grid grid-cols-2 gap-3 text-gray-600">
                            <p>• Facebook Post Design</p>
                            <p>• Instagram Post Design</p>
                            <p>• Instagram Story Design</p>
                            <p>• YouTube Thumbnail</p>
                            <p>• LinkedIn Post Design</p>
                            <p>• Twitter / X Post Design</p>
                            <p>• Social Media Banner</p>
                            <p>• Instagram Reel Cover</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaDesign;