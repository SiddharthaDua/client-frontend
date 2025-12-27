import React from 'react'
import ContactFrom from '../../components/home/ContactFrom'
import Rating from '../../components/design/Rating'
import OurMarketingServices from '../../components/marketing/OurMarketingServices'
import MarketingChannelsWeMaster from '../../components/marketing/MarketingChannelsWeMaster'
import OurMarketingMethodology from '../../components/marketing/OurMarketingMethodology'
import MarketingHero from '../../components/marketing/MarketingHero'

const Marketing = ({ onGetStarted }) => {
    return (
        <div>
            <MarketingHero onGetStarted={onGetStarted} />

            <OurMarketingServices />
            <MarketingChannelsWeMaster />
            <OurMarketingMethodology />
            <Rating />
            <ContactFrom />
        </div>
    )
}

export default Marketing