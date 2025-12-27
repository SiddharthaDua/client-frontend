import React from 'react'
import ContactFrom from '../../components/home/ContactFrom'
import Rating from '../../components/design/Rating'
import MetaHero from '../../components/metaAdd/MetaHero'
import Ecosystem from '../../components/metaAdd/Ecosystem'
import MetaAdvertising from '../../components/metaAdd/MetaAdvertising'
import CampaignTypes from '../../components/metaAdd/CampaignTypes'
import OurProvenProcess from '../../components/metaAdd/OurProvenProcess'
import WhyChooseOurMetaAdsServices from '../../components/metaAdd/WhyChooseOurMetaAdsServices'
import MasterEveryAdFormat from '../../components/metaAdd/MasterEveryAdFormat'

const MetaAds = ({ onGetStarted }) => {
    return (
        <div>
            <MetaHero onGetStarted={onGetStarted} />
            <Ecosystem />
            <MetaAdvertising />
            <CampaignTypes />
            <OurProvenProcess />
            <WhyChooseOurMetaAdsServices />
            <MasterEveryAdFormat />
            <Rating />
            <ContactFrom />
        </div>
    )
}

export default MetaAds