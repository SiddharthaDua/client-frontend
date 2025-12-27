import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./Fifth.css";

import { BlogDetailsContext } from "../../context/BlogDetailsContext";

const Fifth = () => {
    const { slug } = useParams(); // /blog/:slug
    const blogData = useContext(BlogDetailsContext);

    const data = blogData?.[slug];

    // safety check
    if (!data) return null;

    return (
        <section className="px-6 py-8 bg-white font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="article-content text-black">

                    {/* Conclusion Section */}
                    <div className="animate-fade-in-up delay-500">
                        <h3 className="text-[1.5rem] font-bold mt-8 mb-4 text-black">
                            {data.heading5}
                        </h3>

                        <p className="leading-[1.8] mb-6 opacity-80 text-lg">
                            {data.heading5Paragraph1}
                        </p>

                        <p className="leading-[1.8] mb-6 opacity-80 text-lg">
                            {data.heading5Paragraph2}
                        </p>
                    </div>

                    {/* Tags Section */}
                    <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t-2 border-[#e2e8f0]">
                        {data.keywords?.map((tag, index) => (
                            <span
                                key={index}
                                className="tag-badge px-4 py-2 rounded-full text-sm font-medium bg-[#0ea5e91a] text-[#0ea5e9]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Fifth;
