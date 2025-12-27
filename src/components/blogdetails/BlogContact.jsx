import React from 'react';
import './BlogContact.css';

const BlogContact = ({ onGetStarted }) => {
    return (
        <section className="px-6 py-16 bg-white font-sans">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                <h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: '#000000' }}
                >
                    Ready to Achieve Similar Results?
                </h2>

                <p
                    className="text-lg mb-8"
                    style={{ color: '#000000', opacity: 0.7 }}
                >
                    Let's discuss how we can transform your digital marketing strategy and drive exceptional growth for your business.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <button onClick={onGetStarted}
                        className="px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 cursor-pointer"
                        style={{ backgroundColor: '#0ea5e9', color: '#ffffff' }}
                    >
                        Start Your Project
                    </button>


                </div>
            </div>
        </section>
    );
};

export default BlogContact;