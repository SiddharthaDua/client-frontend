import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./Fourth.css";

import { BlogDetailsContext } from "../../context/BlogDetailsContext";

const Fourth = () => {
    const { slug } = useParams(); // /blog/:slug
    const blogData = useContext(BlogDetailsContext);

    const data = blogData?.[slug];

    // safety check
    if (!data) return null;

    return (
        <section className="px-6 py-8 bg-white font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="article-content text-black">

                    {/* Measuring Success Section */}
                    <div className="animate-fade-in-up delay-300">
                        <h3 className="text-[1.5rem] font-bold mt-8 mb-4">
                            {data.heading4}
                        </h3>

                        <p className="leading-[1.8] mb-6 opacity-80 text-lg">
                            {data.heading4Paragraph1}
                        </p>

                        <p className="leading-[1.8] mb-6 opacity-80 text-lg">
                            {data.heading4Paragraph2}
                        </p>
                    </div>

                    {/* Key Takeaways Box */}
                    <div className="my-8 p-8 rounded-2xl animate-scale-in delay-400 takeaways-box">
                        <h4 className="text-2xl font-bold mb-6 text-[#0ea5e9]">
                            Key Takeaways
                        </h4>

                        <ul className="space-y-4">
                            {data.keyTakeways?.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 flex-shrink-0 mt-1"
                                        fill="none"
                                        stroke="#0ea5e9"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="text-black opacity-80 text-lg leading-snug">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Fourth;
