import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import "./FloatingContact.css";

const FloatingContact = () => {
    return (
        <div className="floating-contact">
            <a
                href="https://wa.me/9242944759"
                target="_blank"
                rel="noreferrer"
                className="fc-icon whatsapp"
                aria-label="WhatsApp"
            >
                <MessageCircle size={22} />
            </a>

            <a
                href="tel:+919242944759"
                className="fc-icon call"
                aria-label="Call"
            >
                <Phone size={22} />
            </a>

            <a
                href="mailto:sptechdigital99@gmail.com"
                className="fc-icon email"
                aria-label="Email"
            >
                <Mail size={22} />
            </a>
        </div>
    );
};

export default FloatingContact;
