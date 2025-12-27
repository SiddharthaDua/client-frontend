import React from "react";
import "./AllTechnology.css";

const technologies = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
];

const AllTechnology = () => {
    return (
        <section className="tech-section">
            <h2 className="tech-heading">Technologies We Work With</h2>

            <div className="tech-slider">
                <div className="tech-track">
                    {technologies.concat(technologies).map((logo, index) => (
                        <div className="tech-logo" key={index}>
                            <img src={logo} alt="technology logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllTechnology;
