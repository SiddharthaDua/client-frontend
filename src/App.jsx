import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import FloatingContact from "./components/home/FloatingContact";
// import Contact from "./components/home/Contact";
import GetStarted from "./components/home/GetStarted"; // ✅ ADD

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";

// Services Pages
import WebDevelopment from "./pages/services/WebDevelopment";
import SEO from "./pages/services/SEO";
import MetaAds from "./pages/services/MetaAds";
import Marketing from "./pages/services/Marketing";
import GraphicDesign from "./pages/services/GraphicDesign";

import { ToastContainer } from "react-toastify";
import BlogDetails from "./pages/BlogDetails";
import ScrollToTop from "./components/home/ScrollToTop";

function App() {
  // const [isContactOpen, setIsContactOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  // 🔥 Agar koi bhi popup open ho → floating hide
  const isAnyPopupOpen = isContactOpen || isGetStartedOpen;

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
      />

      {/* NAVBAR */}
      <Navbar onGetStarted={() => setIsGetStartedOpen(true)} />
      <ScrollToTop />
      {/* ROUTES */}
      <Routes>
        <Route
          path="/"
          element={<Home onGetStarted={() => setIsGetStartedOpen(true)} />}
        />
        <Route
          path="/about"
          element={<AboutUs onGetStarted={() => setIsGetStartedOpen(true)} />}
        />
        <Route path="/portfolio" element={<Portfolio onGetStarted={() => setIsGetStartedOpen(true)} />} />

        <Route path="/services/web" element={<WebDevelopment onGetStarted={() => setIsGetStartedOpen(true)} />} />
        <Route path="/services/seo" element={<SEO onGetStarted={() => setIsGetStartedOpen(true)} />} />
        <Route path="/services/meta" element={<MetaAds onGetStarted={() => setIsGetStartedOpen(true)} />} />
        <Route path="/services/marketing" element={<Marketing onGetStarted={() => setIsGetStartedOpen(true)} />} />
        <Route path="/services/design" element={<GraphicDesign onGetStarted={() => setIsGetStartedOpen(true)} />} />
        <Route path="/blog/:slug" element={<BlogDetails onGetStarted={() => setIsGetStartedOpen(true)} />} />

      </Routes>

      {/* GET STARTED POPUP */}
      {isGetStartedOpen && (
        <GetStarted onClose={() => setIsGetStartedOpen(false)} />
      )}

      {/* CONTACT POPUP */}
      {/* <Contact onPopupChange={setIsContactOpen} /> */}

      {/* FLOATING ICON */}
      {!isAnyPopupOpen && <FloatingContact />}

      <Footer onGetStarted={() => setIsGetStartedOpen(true)} />
    </>
  );
}

export default App;
