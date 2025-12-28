import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from '../../assets/footerlogo.png'
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaPhoneAlt
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./Footer.css";

const Footer = ({ onGetStarted }) => {
    return (
        <footer className="footer-root">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* BRAND */}
                    <div>
                        <NavLink to="/" className="flex items-center">
                            <img
                                src={footerLogo}
                                alt="Logo"
                                className="h-12 md:h-13 w-auto object-contain"
                            />
                        </NavLink>
                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                            We build modern websites, digital products and growth-driven
                            marketing strategies for businesses worldwide.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <NavLink to="/" className="footer-link">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="footer-link">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" className="footer-link">Portfolio</NavLink>
                            </li>

                            {/* 🔥 CONTACT POPUP TRIGGER */}
                            <li>
                                <button
                                    onClick={onGetStarted}
                                    className="footer-link text-left w-full"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h3 className="footer-title">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><NavLink to="/services/web" className="footer-link">Website Development</NavLink></li>
                            <li><NavLink to="/services/seo" className="footer-link">SEO Optimization</NavLink></li>
                            <li><NavLink to="/services/meta" className="footer-link">Meta Ads</NavLink></li>
                            <li><NavLink to="/services/marketing" className="footer-link">Digital Marketing</NavLink></li>
                            <li><NavLink to="/services/design" className="footer-link">Graphic Design</NavLink></li>
                        </ul>
                    </div>

                    {/* CONTACT INFO */}
                    <div>
                        <h3 className="footer-title">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-center gap-3">
                                <IoMail className="text-sky-400 text-lg" />
                                <a href="mailto:sptechdigital99@gmail.com" className="hover:text-white transition-colors">
                                    sptechdigital99@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-sky-400" />
                                <a href="tel:+919242944759" className="hover:text-white transition-colors">
                                    +91 9242944759
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-sky-400 font-bold">📍</span>
                                <span>Kolkata – 700001, West Bengal, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SOCIAL ICONS */}
                <div className="flex flex-wrap gap-4 mt-10">
                    <a className="social-icon" href="https://www.facebook.com/profile.php?id=61585385350543"><FaFacebookF /></a>
                    <a className="social-icon" href="https://www.instagram.com/sptechdigital?igsh=MTJhZ2dneXYweGM0ZA=="><FaInstagram /></a>
                    <a className="social-icon" href="https://youtube.com/@sptechdigital?si=EVX1Jy-3OIAo0o0u"><FaYoutube /></a>
                    <a className="social-icon whatsapp-hover" href="https://wa.me/9242944759" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                    <a className="social-icon" href="tel:+919242944759"><FaPhoneAlt /></a>
                    <a className="social-icon" href="mailto:sptechdigital99@gmail.com"><IoMail /></a>
                </div>

                {/* DIVIDER */}

                {/* BOTTOM */}
                <div className="flex items-center justify-center py-6 text-sm text-gray-400 border-t border-white/10 mt-12">
                    <p className="flex items-center gap-2 text-center">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-sky-400">©</span>
                        <span>{new Date().getFullYear()} Sp TechDigital. All rights reserved.</span>
                    </p>
                </div>

            </div>


        </footer>

    );
};

export default Footer;
