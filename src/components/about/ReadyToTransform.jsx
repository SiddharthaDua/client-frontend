import React, { useEffect } from 'react';
import './ReadyToTransform.css';

const ReadyToTransform = ({ onGetStarted }) => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden-initial');
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.hidden-initial');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative py-32 px-6 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <div className="hidden-initial animate-scale-in">
                    <div className="inline-block mb-6 px-6 py-3 bg-sky-100 rounded-full text-sky-700 font-semibold text-sm">
                        🚀 Let's Get Started
                    </div>
                </div>

                <h2 className="hidden-initial animate-slide-up delay-100 text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                    Ready to Transform Your <span className="gradient-text">Digital Presence?</span>
                </h2>

                <p className="hidden-initial animate-slide-up delay-200 text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Let's collaborate and create something extraordinary together. Our team of experts is ready to elevate your brand and drive real, measurable results.
                </p>

                <div className="hidden-initial animate-slide-up delay-300">
                    <button onClick={onGetStarted} className="relative bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold px-12 py-5 rounded-full text-xl transition-all transform hover:scale-110 shadow-2xl hover:shadow-sky-500/50 group overflow-hidden cursor-pointer">
                        <span className="relative z-10" >Start Your Journey Today</span>
                        <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </button>
                </div>

                {/* Trust Badges */}
                <div className="hidden-initial animate-slide-up delay-400 mt-16 flex flex-wrap justify-center gap-8 items-center opacity-60">
                    <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold text-gray-700">5-Star Rated</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="font-semibold text-gray-700">Certified Partners</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="font-semibold text-gray-700">Lightning Fast Results</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadyToTransform;