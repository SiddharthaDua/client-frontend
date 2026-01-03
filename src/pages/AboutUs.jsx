import React from "react";
import AboutHero from "../components/about/AboutHero";
import OurJourney from "../components/about/OurJourney";
import OurCoreValues from "../components/about/OurCoreValues";
import OurImpact from "../components/about/OurImpact";
import ReadyToTransform from "../components/about/ReadyToTransform";
import ContactFrom from "../components/home/ContactFrom";

const AboutUs = ({ onGetStarted }) => {
    return (
        <div>
            {/* 🔥 Popup trigger yahan se pass hoga */}
            <AboutHero onGetStarted={onGetStarted} />
            <OurJourney />
            <OurCoreValues />
            <OurImpact />
            <ReadyToTransform onGetStarted={onGetStarted} />
            <ContactFrom />
        </div>
    );
};

export default AboutUs;
