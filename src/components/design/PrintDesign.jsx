import React from 'react';
import './PrintDesign.css';

const PrintDesign = () => {
    return (
        <section className="print-design-wrapper py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="print-badge inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        🔹 PRINT DESIGN
                    </div>
                    <h2 className="print-main-title text-4xl font-bold mb-4 text-gray-800">
                        Professional Print Solutions
                    </h2>
                </div>

                <div className="print-grid grid md:grid-cols-3 gap-8">
                    {/* Card 01 */}
                    <div className="print-card text-center p-8 bg-gradient-to-b from-sky-50 to-white rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="feature-number text-sky-200">
                            01
                        </div>
                        <div className="print-icon text-6xl mb-4">
                            📄
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Flyer & Brochure</h3>
                        <p className="text-gray-600">Professional marketing materials</p>
                    </div>

                    {/* Card 02 */}
                    <div className="print-card text-center p-8 bg-gradient-to-b from-cyan-50 to-white rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="feature-number text-cyan-200">
                            02
                        </div>
                        <div className="print-icon text-6xl mb-4">
                            🪧
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Poster & Hoarding</h3>
                        <p className="text-gray-600">Large format print designs</p>
                    </div>

                    {/* Card 03 */}
                    <div className="print-card text-center p-8 bg-gradient-to-b from-slate-50 to-white rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="feature-number text-slate-200">
                            03
                        </div>
                        <div className="print-icon text-6xl mb-4">
                            🎴
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Cards & Menus</h3>
                        <p className="text-gray-600">Visiting cards & menu design</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrintDesign;