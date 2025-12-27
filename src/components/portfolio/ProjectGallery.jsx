import React from 'react';
import './ProjectGallery.css';
import Pg1 from "../../assets/pg1.jpeg";
import Pg2 from "../../assets/pg2.jpeg";
import Pg3 from "../../assets/pg3.jpeg";
import Pg4 from "../../assets/pg4.jpeg";
import Pg5 from "../../assets/pg5.jpeg";
import Pg6 from "../../assets/pg6.jpeg";
import Pg7 from "../../assets/pg7.jpeg";
import Pg8 from "../../assets/pg8.jpeg";
import Pg9 from "../../assets/pg9.jpeg";
import Pg10 from "../../assets/pg10.jpeg";
import Pg11 from "../../assets/pg11.jpeg";
import Pg12 from "../../assets/pg12.jpeg";
import Pg13 from "../../assets/pg13.jpeg";
import Pg14 from "../../assets/pg14.jpeg";
import Pg15 from "../../assets/pg15.jpeg";
import Pg16 from "../../assets/pg16.jpeg";

const ProjectGallery = () => {
    // Sabhi imported images ko array mein rakha
    const images = [Pg1, Pg2, Pg3, Pg4, Pg5, Pg6, Pg7, Pg8, Pg9, Pg10, Pg11, Pg12, Pg13, Pg14, Pg15, Pg16];

    return (
        <section className="gallery-section py-16">
            <div className="max-w-7xl mx-auto mb-10 text-center px-6">
                <h2 className="text-4xl font-bold text-black animate-fade-in-up">Project Gallery</h2>
                <p className="text-black opacity-60 mt-2">Explore our latest campaign visual assets</p>
            </div>

            {/* Infinite Scroll Wrapper */}
            <div className="infinite-container">
                <div className="infinite-scroll-track">
                    {/* First set of images */}
                    {images.map((img, index) => (
                        <div key={`first-${index}`} className="gallery-card">
                            <div className="image-wrapper rounded-2xl overflow-hidden">
                                <img src={img} alt={`Gallery ${index}`} className="gallery-img" />
                                <div className="overlay">
                                    <span className="text-white font-medium text-sm">View Work</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {images.map((img, index) => (
                        <div key={`second-${index}`} className="gallery-card">
                            <div className="image-wrapper rounded-2xl overflow-hidden">
                                <img src={img} alt={`Gallery duplicate ${index}`} className="gallery-img" />
                                <div className="overlay">
                                    <span className="text-white font-medium text-sm">View Work</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;