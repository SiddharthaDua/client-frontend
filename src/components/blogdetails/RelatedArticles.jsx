import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RelatedArticles.css";

import { BlogDetailsContext } from "../../context/BlogDetailsContext";

// same images (no change)
import webBlogImg from "../../assets/webblog.png";
import seologImg from "../../assets/seoblog.jpeg";
import metalogImg from "../../assets/metablog.png";
import graphicslogImg from "../../assets/designblog.jpeg";
import marketinglogImg from "../../assets/marketingblog.jpeg";

const RelatedArticles = () => {
    const { slug } = useParams(); // current blog
    const blogData = useContext(BlogDetailsContext);
    const navigate = useNavigate();

    // static image mapping (unchanged)
    const blogImages = {
        web: webBlogImg,
        seo: seologImg,
        meta: metalogImg,
        design: graphicslogImg,
        marketing: marketinglogImg,
    };

    // current blog remove karke baaki 4
    const relatedBlogs = Object.keys(blogData)
        .filter((key) => key !== slug)
        .slice(0, 4);

    return (
        <section className="px-6 py-12 bg-white font-sans">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-black">
                    Related Articles
                </h2>

                <div className="space-y-6">
                    {relatedBlogs.map((key, index) => {
                        const blog = blogData[key];

                        return (
                            <div
                                key={index}
                                onClick={() => navigate(`/blog/${key}`)}   // ✅ FULL CARD CLICK
                                className="related-post p-6 rounded-2xl flex flex-row-reverse justify-between items-center gap-6 bg-[#f8fafc] border-2 border-[#e2e8f0] cursor-pointer"
                            >
                                {/* Image on the Right */}
                                <div className="blog-image-small w-32 h-32 rounded-xl flex-shrink-0 overflow-hidden">
                                    <img
                                        src={blogImages[key]}
                                        alt={blog.heading}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content on the Left */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2 text-black leading-tight">
                                        {blog.heading}
                                    </h3>

                                    <p className="text-black opacity-70 mb-4 line-clamp-2">
                                        {blog.subHeading}
                                    </p>

                                    {/* Learn More (same route) */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // ❗ double trigger avoid
                                            navigate(`/blog/${key}`);
                                        }}
                                        className="learn-more flex items-center gap-1 text-[#0ea5e9] font-bold text-sm hover:underline cursor-pointer"
                                    >
                                        Learn More
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RelatedArticles;
