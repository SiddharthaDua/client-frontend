import React from 'react';
import './BrandingIdentity.css';
import designS1Img from '../../assets/designS1.jpeg';

const BrandingIdentity = () => {
    return (
        <section className="branding-identity-wrapper py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="zigzag-layout">
                    {/* Left Content Side */}
                    <div className="content-side">
                        <div className="badge-inline bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            🔹 BRANDING & IDENTITY
                        </div>
                        <h2 className="section-title text-4xl font-bold mb-4 text-gray-800">
                            Build Your Brand Identity
                        </h2>
                        <div className="list-items space-y-3 text-gray-600">
                            <p className="flex items-center">
                                <span className="text-sky-600 mr-3">✦</span> Logo Design
                            </p>
                            <p className="flex items-center">
                                <span className="text-sky-600 mr-3">✦</span> Brand Identity Design
                            </p>
                            <p className="flex items-center">
                                <span className="text-sky-600 mr-3">✦</span> Brand Guidelines
                            </p>
                            <p className="flex items-center">
                                <span className="text-sky-600 mr-3">✦</span> Business Card Design
                            </p>
                            <p className="flex items-center">
                                <span className="text-sky-600 mr-3">✦</span> Letterhead Design
                            </p>
                            <p className="flex items-center">
                                <span className="text-sky-600 mr-3">✦</span> Email Signature Design
                            </p>
                        </div>
                    </div>

                    {/* Right Image Side */}
                    <div className="image-side flex justify-center">
                        <div className="branding-img-container w-64 h-64 rounded-3xl bg-gradient-to-br from-sky-400 to-cyan-600 flex items-center justify-center shadow-2xl overflow-hidden">
                            <img
                                src={designS1Img}
                                alt="Branding Identity"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentNode.innerHTML = '🎨';
                                    e.target.parentNode.classList.add('text-8xl', 'text-white');
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandingIdentity;