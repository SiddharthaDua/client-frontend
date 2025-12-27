import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./Third.css";

import { BlogDetailsContext } from "../../context/BlogDetailsContext";

const Third = () => {
    const { slug } = useParams(); // /blog/:slug
    const blogData = useContext(BlogDetailsContext);

    const data = blogData?.[slug];

    // safety check
    if (!data) return null;

    return (
        <section className="px-6 py-8 bg-white font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="article-content text-black">

                    <div className="animate-fade-in-up delay-200">

                        {/* Heading */}
                        <h3 className="text-[1.5rem] font-bold mt-8 mb-4 text-black">
                            {data.heading3}
                        </h3>

                        {/* Paragraphs */}
                        <p className="leading-[1.8] mb-6 opacity-80 text-lg">
                            {data.heading3Paragraph1}
                        </p>

                        <p className="leading-[1.8] mb-6 opacity-80 text-lg">
                            {data.heading3Paragraph2}
                        </p>

                        {/* Image Container with Shimmer Effect */}
                        <div className="blog-image-container rounded-2xl my-8 h-[350px] flex items-center justify-center overflow-hidden">
                            <img
                                src={data.secondImg}
                                alt={data.heading3}
                                className="w-full h-full object-cover opacity-90"
                            />

                            {/* Optional placeholder icon (same as original) */}
                            {!data.secondImg && (
                                <svg
                                    className="w-24 h-24 absolute"
                                    fill="none"
                                    stroke="#ffffff"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            )}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Third;
