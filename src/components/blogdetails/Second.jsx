import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./Second.css";

import { BlogDetailsContext } from "../../context/BlogDetailsContext";

const Second = () => {
    const { slug } = useParams(); // /blog/:slug
    const blogData = useContext(BlogDetailsContext);

    const data = blogData?.[slug];

    // safety check
    if (!data) return null;

    return (
        <article className="px-6 py-8 bg-white font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="article-content text-black">

                    {/* Introduction Section */}
                    <div className="animate-fade-in-up">
                        <h3 className="text-[1.5rem] font-bold mt-8 mb-4 text-black">
                            {data.heading2}
                        </h3>

                        <p className="leading-[1.8] mb-6 opacity-80 text-lg">
                            {data.heading2Paragraph1}
                        </p>

                        <p className="leading-[1.8] mb-6 opacity-80 text-lg">
                            {data.heading2Paragraph2}
                        </p>
                    </div>

                    {/* Quote Block */}
                    <div className="quote-block my-8 animate-fade-in-up delay-100 bg-[#0ea5e90d] p-8 rounded-[1rem] border-l-4 border-[#0ea5e9]">
                        <p className="text-xl italic opacity-90 text-black leading-relaxed">
                            "{data.headingStatement}"
                        </p>
                    </div>

                </div>
            </div>
        </article>
    );
};

export default Second;
