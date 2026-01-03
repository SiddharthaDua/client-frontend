// import React from 'react'
// import WebHero from '../../components/webdevelopment/WebHero'
// import WebsiteTypes from '../../components/webdevelopment/WebsiteTypes'
// import WeProvide from '../../components/webdevelopment/WeProvide'
// import PricingPlans from '../../components/webdevelopment/PricingPlans'
// import Maintenance from '../../components/webdevelopment/Maintenance'
// import ContactFrom from '../../components/home/ContactFrom'
// import Rating from '../../components/design/Rating'

// const WebDevelopment = ({ onGetStarted }) => {
//     return (
//         <div>
//             <WebHero onGetStarted={onGetStarted} />
//             <WebsiteTypes />
//             <WeProvide />
//             <PricingPlans onGetStarted={onGetStarted} />
//             <Maintenance />
//             <Rating />
//             <ContactFrom />
//         </div>
//     )
// }

// export default WebDevelopment



import React from 'react'
import WebHero from '../../components/webdevelopment/WebHero'
import WebsiteTypes from '../../components/webdevelopment/WebsiteTypes'
import WeProvide from '../../components/webdevelopment/WeProvide'
import PricingPlans from '../../components/webdevelopment/PricingPlans'
import Maintenance from '../../components/webdevelopment/Maintenance'
import ContactFrom from '../../components/home/ContactFrom'
import Rating from '../../components/design/Rating'

const WebDevelopment = ({ onGetStarted }) => {
    return (
        <div>
            {/* ✅ SEO H1 (hidden visually, no layout impact) */}
            <h1 className="sr-only">Website Development Services</h1>

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