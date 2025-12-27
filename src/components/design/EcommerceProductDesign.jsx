import React from 'react';
import './EcommerceProductDesign.css';
import designS31Img from '../../assets/designS31.jpeg';
import designS32Img from '../../assets/designS32.jpeg';

const EcommerceProductDesign = () => {
    return (
        <section className="ecommerce-design-wrapper py-16 px-6 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="ecommerce-zigzag-section">
                    {/* Left Image Side */}
                    <div className="ecommerce-image-side flex-1 flex justify-center">
                        <div className="image-relative-container relative">
                            {/* Main Big Image Box - Fixed/No Animation */}
                            <div className="big-image-box w-72 h-72 bg-gradient-to-br from-sky-400 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                                <img
                                    src={designS32Img}
                                    alt="Product Banner"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentNode.innerHTML = '🛒';
                                        e.target.parentNode.classList.add('text-white', 'text-8xl');
                                    }}
                                />
                            </div>
                            {/* Smaller Floating Image Box - Animated */}
                            <div className="small-image-box absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                                <img
                                    src={designS31Img}
                                    alt="Small Product Icon"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentNode.innerHTML = '📦';
                                        e.target.parentNode.classList.add('text-white', 'text-5xl');
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Content Side */}
                    <div className="ecommerce-content-side flex-1">
                        <div className="ecommerce-badge inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            🔹 E-COMMERCE & PRODUCT DESIGN
                        </div>
                        <h2 className="ecommerce-main-title text-4xl font-bold mb-4 text-gray-800">
                            Boost Your Sales
                        </h2>
                        <div className="ecommerce-list space-y-3 text-gray-700">
                            <p className="text-lg flex items-center">
                                <span className="mr-2">🎯</span> Product Banner Design
                            </p>
                            <p className="text-lg flex items-center">
                                <span className="mr-2">✨</span> Product Image Editing
                            </p>
                            <p className="text-lg flex items-center">
                                <span className="mr-2">📦</span> Amazon Listing Images
                            </p>
                            <p className="text-lg flex items-center">
                                <span className="mr-2">🛍️</span> Flipkart Listing Images
                            </p>
                            <p className="text-lg flex items-center">
                                <span className="mr-2">📊</span> Product Infographics
                            </p>
                            <p className="text-lg flex items-center">
                                <span className="mr-2">💡</span> E-commerce Ads Creatives
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcommerceProductDesign;