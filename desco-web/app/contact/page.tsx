"use client";

import { useState } from "react";
import { publicAsset } from "@/lib/assetPath";
import { MapPin, Phone, Mail, Send, Download } from "lucide-react";
import "./contact.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would call an API endpoint
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our hygiene experts for product inquiries, technical datasheets, or hospital integration plans.</p>
                </div>
            </div>

            <div className="container contact-content">
                <div className="contact-grid">
                    {/* Contact Info Column */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p>Our team is ready to assist you with customized disinfection solutions for your facility.</p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <MapPin size={24} className="contact-detail-icon" />
                                <div>
                                    <strong>Address</strong>
                                    <p>HMB International, Lahore, Pakistan</p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <Phone size={24} className="contact-detail-icon" />
                                <div>
                                    <strong>Phone</strong>
                                    <p>+92-333-1361933</p>
                                    <br />
                                    <p>+92-45-2361933</p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <Mail size={24} className="contact-detail-icon" />
                                <div>
                                    <strong>Email</strong>
                                    <p>info.hmbinternational@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="cta-cards">
                            <div className="cta-card">
                                <h3>Request Technical Datasheet</h3>
                                <p>Download detailed product specifications and compliance data.</p>
                                <a
                                    href={publicAsset("/DESCO Disinfectant.pdf")}
                                    download
                                    className="btn-download-pdf"
                                >
                                    <Download size={18} />
                                    Download Technical PDF
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="contact-form-wrapper">
                        {submitted ? (
                            <div className="form-success">
                                <Send size={48} className="success-icon" />
                                <h2>Thank You!</h2>
                                <p>Your inquiry has been submitted. Our team will contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h2>Send an Inquiry</h2>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="input-field"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="input-field"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="organization">Organization / Hospital</label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            className="input-field"
                                            value={formData.organization}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            className="input-field"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a subject...</option>
                                            <option value="datasheet">Request Technical Datasheet</option>

                                            <option value="consultation">Request Consultation</option>
                                            <option value="general">General Inquiry</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="input-field textarea-field"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg submit-btn">
                                    <Send size={18} /> Submit Inquiry
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
