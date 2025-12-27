import React from 'react'
import BrandingIdentity from '../../components/design/BrandingIdentity'
import DesignHero from '../../components/design/DesignHero'
import SocialMediaDesign from '../../components/design/SocialMediaDesign'
import MarketingAdCreatives from '../../components/design/MarketingAdCreatives'
import WebsiteUiGraphics from '../../components/design/WebsiteUiGraphics'
import PrintDesign from '../../components/design/PrintDesign'
import EcommerceProductDesign from '../../components/design/EcommerceProductDesign'
import CorporateExcellence from '../../components/design/CorporateExcellence'
import EngagingContentVisuals from '../../components/design/EngagingContentVisuals'

import OurDesignProcess from '../../components/design/OurDesignProcess'
import Rating from '../../components/design/Rating'
import ContactFrom from '../../components/home/ContactFrom'


const GraphicDesign = ({ onGetStarted }) => {
    return (
        <div>

            <DesignHero onGetStarted={onGetStarted} />
            <BrandingIdentity />
            <SocialMediaDesign />
            <MarketingAdCreatives />
            <WebsiteUiGraphics />
            <PrintDesign />
            <EcommerceProductDesign />
            <CorporateExcellence />
            <EngagingContentVisuals />
            <OurDesignProcess />
            <Rating />
            <ContactFrom />

        </div>
    )
}

export default GraphicDesign