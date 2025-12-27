import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./BlogHeading.css";

import { BlogDetailsContext } from "../../context/BlogDetailsContext";

const BlogHeading = () => {
    const { slug } = useParams(); // /blog/:slug
    const blogData = useContext(BlogDetailsContext);

    const data = blogData?.[slug];

    // safety check
    if (!data) return null;

    return (
        <section className="px-6 py-12 bg-white font-sans">
            <div className="max-w-4xl mx-auto">

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up delay-100 text-black leading-tight">
                    {data.heading}
                </h1>

                {/* Subtitle */}
                <p className="text-xl mb-8 animate-fade-in-up delay-200 text-black opacity-70">
                    {data.subHeading}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pb-8 mb-8 animate-fade-in-up delay-300 border-b-2 border-slate-100">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold bg-[#0ea5e9] text-white">
                        <span>{data.authorImageLetter}</span>
                    </div>
                    <div>
                        <div className="font-bold text-lg text-black">
                            {data.authorName}
                        </div>
                        <div className="text-sm text-black opacity-60">
                            {data.autherRole}
                        </div>
                    </div>
                </div>

                {/* Featured Image Section */}
                <div className="blog-image-container rounded-3xl mb-12 animate-scale-in delay-400 h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden shadow-2xl relative">
                    <img
                        src={data.firstImg}
                        alt={data.heading}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>

            </div>
        </section>
    );
};

export default BlogHeading;
