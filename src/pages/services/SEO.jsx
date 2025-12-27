import React from 'react'
import SeoHero from '../../components/seo/SeoHero'

import OrganicSeo from '../../components/seo/OrganicSeo'
import EcommerceSeo from '../../components/seo/EcommerceSeo'
import AiSeo from '../../components/seo/AiSeo'
import OurSeoProcess from '../../components/seo/OurSeoProcess'
import ContactFrom from '../../components/home/ContactFrom'
import Rating from '../../components/design/Rating'

const SEO = ({ onGetStarted }) => {
    return (
        <div>
            <SeoHero onGetStarted={onGetStarted} />

            <OrganicSeo />
            <EcommerceSeo />
            <AiSeo />
            <OurSeoProcess />


            <Rating />
            <ContactFrom />
        </div>
    )
}

export default SEO