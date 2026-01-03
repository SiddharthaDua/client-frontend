// import React from 'react'
// import HeroSection from '../components/home/HeroSection'
// import WhyChoose from '../components/home/WhyChoose'
// import OurService from '../components/home/OurService'
// import Blog from '../components/home/Blog'
// import AllTechnology from '../components/home/AllTechnology'
// import Faq from '../components/home/Faq'
// import ContactFrom from '../components/home/ContactFrom'



// const Home = ({ onGetStarted }) => {
//     return (
//         <>
//             <HeroSection onGetStarted={onGetStarted} />
//             <WhyChoose />
//             <OurService />
//             <Blog />
//             <AllTechnology />
//             <Faq />
//             <ContactFrom />
//         </>


//     )
// }

// export default Home




import React from 'react'
import HeroSection from '../components/home/HeroSection'
import WhyChoose from '../components/home/WhyChoose'
import OurService from '../components/home/OurService'
import Blog from '../components/home/Blog'
import AllTechnology from '../components/home/AllTechnology'
import Faq from '../components/home/Faq'
import ContactFrom from '../components/home/ContactFrom'

const Home = ({ onGetStarted }) => {
    return (
        <>
            {/* ✅ SEO H1 (visible to Google, hidden from UI) */}
            <h1 className="sr-only">
                Website Development & Digital Marketing Agency
            </h1>

            {/* ✅ Visual Hero (UI heading inside component, NOT H1) */}
            <HeroSection onGetStarted={onGetStarted} />

            <WhyChoose />
            <OurService />
            <Blog />
            <AllTechnology />
            <Faq />
            <ContactFrom />
        </>
    )
}

export default Home