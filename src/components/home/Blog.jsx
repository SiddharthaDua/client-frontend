import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

import webBlogImg from "../../assets/webblog.png";
import seologImg from "../../assets/seoblog.jpeg";
import metalogImg from "../../assets/metablog.png";
import graphicslogImg from "../../assets/designblog.jpeg";
import marketinglogImg from "../../assets/marketingblog.jpeg";

const blogs = [
    {
        id: 1,
        title: "Website Development",
        desc: "Modern, fast and scalable websites built for business growth.",
        img: webBlogImg,
        slug: "web",
    },
    {
        id: 2,
        title: "SEO Optimization",
        desc: "Rank higher on Google with smart and proven SEO strategies.",
        img: seologImg,
        slug: "seo",
    },
    {
        id: 3,
        title: "Digital Marketing",
        desc: "Grow your brand online with result-driven digital campaigns.",
        img: marketinglogImg,
        slug: "marketing",
    },
    {
        id: 4,
        title: "Meta Ads",
        desc: "High-converting Facebook & Instagram ad campaigns.",
        img: metalogImg,
        slug: "meta",
    },
    {
        id: 5,
        title: "Graphic Design",
        desc: "Creative designs that build strong brand identity.",
        img: graphicslogImg,
        slug: "design",
    },
];


const Blog = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const next = () => setIndex((prev) => (prev + 1) % blogs.length);
    const prev = () => setIndex((prev) => (prev - 1 + blogs.length) % blogs.length);

    /* =====================================
       🔄 AUTO SLIDE (1 SECOND GAP)
    ===================================== */
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % blogs.length);
        }, 3000); // 1 second

        return () => clearInterval(interval);
    }, []);

    const getPosition = (i) => {
        if (i === index) return "active";
        if (i === (index + 1) % blogs.length) return "right1";
        if (i === (index + 2) % blogs.length) return "right2";
        if (i === (index - 1 + blogs.length) % blogs.length) return "left1";
        if (i === (index - 2 + blogs.length) % blogs.length) return "left2";
        return "hidden";
    };

    return (
        <div>
            <h1 className="headblog">Blogs</h1>
            <p className="blogparagraph">
                Read our latest blogs and industry insights
            </p>

            <div className="blog-wrapper">
                <button className="nav left" onClick={prev}>❮</button>

                <div className="carousel">
                    {blogs.map((blog, i) => (
                        <div key={blog.id} className={`card ${getPosition(i)}`}>

                            {/* TOP IMAGE */}
                            <div className="blog-img">
                                <img src={blog.img} alt={blog.title} />
                            </div>

                            {/* BLOG CONTENT */}
                            <div className="blog-content">
                                <span className="blog-tag">Blog</span>
                                <h3>{blog.title}</h3>
                                <p className="blog-description">{blog.desc}</p>

                                <button
                                    className="blog-link"
                                    onClick={() => navigate(`/blog/${blog.slug}`)}

                                >
                                    Learn More →
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                <button className="nav right" onClick={next}>❯</button>
            </div>
        </div>
    );
};

export default Blog;
