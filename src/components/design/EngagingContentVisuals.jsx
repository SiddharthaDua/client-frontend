import React from 'react';
import './EngagingContentVisuals.css';

const EngagingContentVisuals = () => {
    return (
        <section className="content-visuals-wrapper py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="content-badge inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        🔹 CONTENT & MEDIA DESIGN
                    </div>
                    <h2 className="content-main-title text-4xl font-bold mb-4 text-gray-800">
                        Engaging Content Visuals
                    </h2>
                </div>

                <div className="content-visuals-grid grid md:grid-cols-2 gap-8">
                    {/* Blog & Article Covers */}
                    <div className="content-visual-item bg-white p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center">
                            <div className="content-icon-box w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-3xl mr-4 shadow-md">
                                📝
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Blog & Article Covers</h3>
                                <p className="text-gray-600">Featured images that attract readers</p>
                            </div>
                        </div>
                    </div>

                    {/* Email Newsletter Design */}
                    <div className="content-visual-item bg-white p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center">
                            <div className="content-icon-box w-16 h-16 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-xl flex items-center justify-center text-white text-3xl mr-4 shadow-md">
                                ✉️
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Email Newsletter Design</h3>
                                <p className="text-gray-600">Engaging email templates</p>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp Creatives */}
                    <div className="content-visual-item bg-white p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center">
                            <div className="content-icon-box w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center text-white text-3xl mr-4 shadow-md">
                                💬
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">WhatsApp Creatives</h3>
                                <p className="text-gray-600">Mobile-first marketing designs</p>
                            </div>
                        </div>
                    </div>

                    {/* Video Thumbnails */}
                    <div className="content-visual-item bg-white p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center">
                            <div className="content-icon-box w-16 h-16 bg-gradient-to-br from-sky-600 to-cyan-600 rounded-xl flex items-center justify-center text-white text-3xl mr-4 shadow-md">
                                🎥
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Video Thumbnails</h3>
                                <p className="text-gray-600">Click-worthy thumbnail designs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngagingContentVisuals;