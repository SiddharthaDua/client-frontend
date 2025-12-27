import React from 'react'
import WebHero from '../../components/webdevelopment/webHero'
import WebsiteTypes from '../../components/webdevelopment/WebsiteTypes'
import WeProvide from '../../components/webdevelopment/WeProvide'
import PricingPlans from '../../components/webdevelopment/PricingPlans'
import Maintenance from '../../components/webdevelopment/Maintenance'
import ContactFrom from '../../components/home/ContactFrom'
import Rating from '../../components/design/Rating'

const WebDevelopment = ({ onGetStarted }) => {
    return (
        <div>
            <WebHero onGetStarted={onGetStarted} />
            <WebsiteTypes />
            <WeProvide />
            <PricingPlans onGetStarted={onGetStarted} />
            <Maintenance />
            <Rating />
            <ContactFrom />
        </div>
    )
}

export default WebDevelopment