import React, { useState } from 'react';
import './ContactFrom.css';
import { submitContactForm } from "../../utils/api";
import { toast } from "react-toastify";

const ContactFrom = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.fullName.trim().length < 3 || formData.phoneNumber.length !== 10) {
            toast.error("Please enter a valid name and 10-digit phone number");
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await submitContactForm({
                name: formData.fullName.trim(),
                number: formData.phoneNumber,
            });

            if (result.success) {
                // 1. LocalStorage set kiya
                localStorage.setItem("formSubmitted", "true");

                // 2. YE ZAROORI HAI: Dusre components (Popup) ko batane ke liye event fire kiya
                window.dispatchEvent(new Event("formSubmittedSuccessfully"));

                setIsSubmitting(false);
                setShowSuccess(true);
                setFormData({ fullName: '', phoneNumber: '' });

                toast.success("Thank you! We'll contact you soon 🚀");
                setTimeout(() => setShowSuccess(false), 5000);
            }
        } catch (err) {
            toast.error("Submission failed. Please try again.");
            setIsSubmitting(false);
        }
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 10) {
            setFormData({ ...formData, phoneNumber: value });
        }
    };

    return (
        <div className="app-container">
            <section className="contact-section">
                <div className="container">
                    <div className="header">
                        <h2 className="section-title">Connect With Us</h2>
                        <p className="section-subtitle">Let's grow your business together</p>
                    </div>

                    <div className="grid-container">
                        <div className="image-wrapper">
                            <svg viewBox="0 0 400 400" className="svg-illustration">
                                <circle cx="200" cy="200" r="180" fill="#0ea5e9" opacity="0.1" />
                                <rect x="80" y="120" width="240" height="160" rx="8" fill="#000000" />
                                <rect x="90" y="130" width="220" height="135" fill="#ffffff" />
                                <line x1="110" y1="240" x2="290" y2="240" stroke="#e5e7eb" strokeWidth="2" />
                                <line x1="110" y1="150" x2="110" y2="240" stroke="#e5e7eb" strokeWidth="2" />
                                <rect x="130" y="210" width="25" height="30" fill="#0ea5e9" rx="2" />
                                <rect x="170" y="190" width="25" height="50" fill="#0ea5e9" rx="2" />
                                <rect x="210" y="170" width="25" height="70" fill="#000000" rx="2" />
                                <rect x="250" y="180" width="25" height="60" fill="#0ea5e9" rx="2" />
                                <rect x="180" y="280" width="40" height="8" fill="#000000" rx="2" />
                                <rect x="160" y="288" width="80" height="4" fill="#000000" rx="2" />
                                <circle cx="320" cy="140" r="25" fill="#0ea5e9" />
                                <text x="320" y="150" textAnchor="middle" fill="#ffffff" fontSize="24">✓</text>
                                <circle cx="70" cy="200" r="25" fill="#000000" />
                                <text x="70" y="210" textAnchor="middle" fill="#ffffff" fontSize="24">📊</text>
                                <circle cx="330" cy="250" r="25" fill="#0ea5e9" opacity="0.3" />
                                <circle cx="60" cy="300" r="25" fill="#000000" opacity="0.3" />
                            </svg>
                        </div>

                        <div className="form-card">
                            <h3 className="form-heading">Get In Touch</h3>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="input-group">
                                    <label htmlFor="full-name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="full-name"
                                        required
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="input-field"
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="phone-number">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone-number"
                                        required
                                        placeholder="Enter your phone number"
                                        value={formData.phoneNumber}
                                        onChange={handlePhoneChange}
                                        className="input-field"
                                    />
                                </div>

                                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? <div className="spinner"></div> : 'Submit'}
                                </button>

                                {showSuccess && (
                                    <div className="success-message">
                                        <p>✓ Thank you! We'll contact you soon.</p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactFrom;