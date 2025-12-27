import React, { useState } from "react";
import { FaTimes, FaUser, FaPhoneAlt } from "react-icons/fa";
import { submitContactForm } from "../../utils/api"; // API import ki
import { toast } from "react-toastify"; // Toast notifications ke liye
import "./GetStarted.css";

const GetStarted = ({ onClose }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Loading state add ki

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 10) {
            setPhone(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (name.trim().length < 3) {
            setError("Name must be at least 3 characters");
            return;
        }
        if (phone.length !== 10) {
            setError("Phone number must be exactly 10 digits");
            return;
        }

        setError("");
        setLoading(true);

        try {
            // Backend API Call
            const result = await submitContactForm({
                name: name.trim(),
                number: phone
            });

            if (result.success) {
                // 1. LocalStorage set kiya taaki popup dobara na dikhe
                localStorage.setItem("formSubmitted", "true");

                // 2. Custom Event dispatch kiya Contact Popup ko rokne ke liye
                window.dispatchEvent(new Event("formSubmittedSuccessfully"));

                toast.success("We'll contact you soon 🚀");

                // Form clear aur close
                if (onClose) onClose();
            }
        } catch (err) {
            toast.error(err || "Submission failed!");
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="popup-overlay">
            {/* POPUP CARD */}
            <div className="popup-card">

                {/* CLOSE BUTTON */}
                <button onClick={onClose} className="popup-close-btn" disabled={loading}>
                    <FaTimes size={18} />
                </button>

                {/* HEADER */}
                <div className="popup-header">
                    <h2>Get Started</h2>
                    <p>Enter your details to continue</p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="popup-form">
                    <div className="input-group">
                        <FaUser className="input-icon" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={handleNameChange}
                            className="popup-input"
                            disabled={loading}
                        />
                    </div>

                    <div className="input-group">
                        <FaPhoneAlt className="input-icon" />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={handlePhoneChange}
                            className="popup-input"
                            disabled={loading}
                        />
                    </div>

                    {error && <p className="error-text">{error}</p>}

                    <button type="submit" className="popup-submit-btn" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>

                <p className="privacy-note">
                    We respect your privacy. Your details are safe with us.
                </p>
            </div>
        </div>
    );
};

export default GetStarted;