import React from 'react'
import ContactFrom from '../components/home/ContactFrom'
import Blog from '../components/home/Blog'
import PortfolioHero from '../components/portfolio/PortfolioHero'
import Highlight from '../components/portfolio/Highlight'
import Challenge from '../components/portfolio/Challenge'
import Solution from '../components/portfolio/Solution'
import Result from '../components/portfolio/Result'
import Founder from '../components/portfolio/Founder'
import ProjectOverview from '../components/portfolio/ProjectOverview'
import ProjectGallery from '../components/portfolio/ProjectGallery'


const Portfolio = ({ onGetStarted }) => {
    return (
        <div>
            <PortfolioHero onGetStarted={onGetStarted} />
            <Highlight />
            <ProjectOverview />
            <ProjectGallery />
            <Challenge />
            <Solution />
            <Result />
            <Blog />
            <Founder />
            <ContactFrom />
        </div>
    )
}

export default Portfolio