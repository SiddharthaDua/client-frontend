import React from 'react';
import './MarketingAdCreatives.css';

const MarketingAdCreatives = () => {
    return (
        <section className="marketing-ads-wrapper py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="marketing-badge inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        🔹 MARKETING & AD CREATIVES
                    </div>
                    <h2 className="marketing-title text-4xl font-bold mb-4 text-gray-800">
                        Drive Conversions with Stunning Ads
                    </h2>
                </div>

                <div className="marketing-service-grid">
                    {/* Facebook Ads */}
                    <div className="marketing-service-item bg-gradient-to-br from-sky-50 to-sky-100 p-6 rounded-2xl">
                        <div className="marketing-icon-circle bg-sky-500 text-white">
                            📢
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Facebook Ads</h3>
                        <p className="text-gray-600">Eye-catching creatives that stop the scroll</p>
                    </div>

                    {/* Instagram Ads */}
                    <div className="marketing-service-item bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl">
                        <div className="marketing-icon-circle bg-cyan-500 text-white">
                            📲
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Instagram Ads</h3>
                        <p className="text-gray-600">Visually stunning feed & story ads</p>
                    </div>

                    {/* Google Display Ads */}
                    <div className="marketing-service-item bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl">
                        <div className="marketing-icon-circle bg-slate-600 text-white">
                            🌐
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Google Display Ads</h3>
                        <p className="text-gray-600">Banner ads that drive clicks</p>
                    </div>

                    {/* YouTube Ads */}
                    <div className="marketing-service-item bg-gradient-to-br from-sky-50 to-sky-100 p-6 rounded-2xl">
                        <div className="marketing-icon-circle bg-sky-600 text-white">
                            🎬
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">YouTube Ads</h3>
                        <p className="text-gray-600">Compelling video ad creatives</p>
                    </div>

                    {/* Campaign Creatives */}
                    <div className="marketing-service-item bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl">
                        <div className="marketing-icon-circle bg-cyan-600 text-white">
                            🎯
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Campaign Creatives</h3>
                        <p className="text-gray-600">Full campaign design solutions</p>
                    </div>

                    {/* Offer Banners */}
                    <div className="marketing-service-item bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl">
                        <div className="marketing-icon-circle bg-slate-700 text-white">
                            💰
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Offer Banners</h3>
                        <p className="text-gray-600">Sale & promotional designs</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingAdCreatives;