import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onGetStarted }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);

    // DESKTOP LINK STYLE WITH ACTIVE UNDERLINE
    const desktopLink = ({ isActive }) =>
        `relative text-gray-800 transition-colors duration-300 hover:text-sky-500
     ${isActive ? "text-sky-500" : ""}`;

    const underline = (isActive) =>
        `absolute left-0 -bottom-1 h-0.5 bg-sky-500 transition-all duration-300
     ${isActive ? "w-full" : "w-0 group-hover:w-full"}`;

    const closeMobileMenu = () => {
        setMenuOpen(false);
        setServiceOpen(false);
    };

    return (
        <>
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-16">

                        {/* LOGO SECTION */}
                        <NavLink to="/" className="flex items-center">
                            <img
                                src="../public/mainlogo.png"
                                alt="Logo"
                                className="h-12 md:h-13 w-auto object-contain"
                            />
                        </NavLink>

                        {/* DESKTOP MENU */}
                        <ul className="hidden md:flex items-center space-x-10 font-medium">
                            {/* HOME */}
                            <li className="relative group">
                                <NavLink to="/" className={desktopLink}>
                                    {({ isActive }) => (
                                        <>
                                            Home
                                            <span className={underline(isActive)} />
                                        </>
                                    )}
                                </NavLink>
                            </li>

                            {/* SERVICES */}
                            <li className="relative group">
                                <button className="relative text-gray-800 hover:text-sky-500 flex items-center gap-1">
                                    Services
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {/* DROPDOWN */}
                                <div
                                    className="absolute top-full left-0 mt-4 w-56 rounded-lg bg-white shadow-xl border border-gray-100
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                                >
                                    {[
                                        ["Website Development", "/services/web"],
                                        ["SEO", "/services/seo"],
                                        ["Meta Ads", "/services/meta"],
                                        ["Marketing", "/services/marketing"],
                                        ["Graphic Design", "/services/design"],
                                    ].map(([label, path]) => (
                                        <NavLink
                                            key={label}
                                            to={path}
                                            className="block px-5 py-3 hover:bg-sky-50 hover:text-sky-500 transition"
                                        >
                                            {label}
                                        </NavLink>
                                    ))}
                                </div>
                            </li>

                            {/* PORTFOLIO */}
                            <li className="relative group">
                                <NavLink to="/portfolio" className={desktopLink}>
                                    {({ isActive }) => (
                                        <>
                                            Portfolio
                                            <span className={underline(isActive)} />
                                        </>
                                    )}
                                </NavLink>
                            </li>

                            {/* ABOUT */}
                            <li className="relative group">
                                <NavLink to="/about" className={desktopLink}>
                                    {({ isActive }) => (
                                        <>
                                            About Us
                                            <span className={underline(isActive)} />
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        </ul>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden text-sky-500 outline-none"
                        >
                            {!menuOpen ? (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 border-t border-gray-100">
                        <NavLink
                            to="/"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `block transition ${isActive ? "text-sky-500 font-medium" : "text-gray-800"}`
                            }
                        >
                            Home
                        </NavLink>

                        {/* MOBILE SERVICES */}
                        <div>
                            <button
                                onClick={() => setServiceOpen(!serviceOpen)}
                                className="w-full flex items-center justify-between font-medium text-gray-900"
                            >
                                Services
                                <svg
                                    className={`w-4 h-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {serviceOpen && (
                                <div className="mt-2 ml-3 space-y-2 border-l-2 border-sky-100 pl-3">
                                    {[
                                        ["Website Development", "/services/web"],
                                        ["SEO", "/services/seo"],
                                        ["Meta Ads", "/services/meta"],
                                        ["Marketing", "/services/marketing"],
                                        ["Graphic Design", "/services/design"],
                                    ].map(([label, path]) => (
                                        <NavLink
                                            key={label}
                                            to={path}
                                            onClick={closeMobileMenu}
                                            className={({ isActive }) =>
                                                `block text-sm transition ${isActive ? "text-sky-500 font-medium" : "text-gray-700"}`
                                            }
                                        >
                                            {label}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        <NavLink
                            to="/portfolio"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `block transition ${isActive ? "text-sky-500 font-medium" : "text-gray-800"}`
                            }
                        >
                            Portfolio
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `block transition ${isActive ? "text-sky-500 font-medium" : "text-gray-800"}`
                            }
                        >
                            About Us
                        </NavLink>

                        {/* 🔥 POPUP TRIGGER (GLOBAL) */}
                        <button
                            onClick={() => {
                                closeMobileMenu();
                                if (onGetStarted) onGetStarted();
                            }}
                            className="block w-full mt-2 rounded-md bg-sky-500 text-white text-center py-2 font-medium hover:bg-sky-600 transition"
                        >
                            Contact Us
                        </button>
                    </div>
                )}
            </nav>

            {/* SPACER */}
            <div className="h-16"></div>
        </>
    );
};

export default Navbar;
