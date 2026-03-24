import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <span className="logo-accent">DESCO</span> Antiseptics
                    </div>
                    <p className="footer-desc">
                        High-authority, medical-grade hygiene and infection control solutions for hospitals, medical surgeries, and laboratories.
                    </p>
                    <div className="cert-badges">
                        {/* Trust signals */}
                        <span className="cert-badge"><ShieldCheck size={16} /> ISO 9001:2015</span>
                        <span className="cert-badge"><ShieldCheck size={16} /> ISO 14001:2015</span>
                        <span className="cert-badge"><ShieldCheck size={16} /> ISO 45001:2018</span>
                        <span className="cert-badge"><ShieldCheck size={16} /> DRAP Approved</span>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Collections</h3>
                    <ul className="footer-links">
                        <li><Link href="/products/collection/hand-skin">Hand & Skin</Link></li>
                        <li><Link href="/products/collection/surface-floor">Surface & Floor</Link></li>
                        <li><Link href="/products/collection/instruments-endoscopes">Instruments & Endoscopes</Link></li>
                        <li><Link href="/products/collection/specialty">Specialty</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Contact Us</h3>
                    <ul className="footer-contact-list">
                        <li><MapPin size={18} /> HMB International, Lahore, Pakistan</li>
                        <li><Phone size={18} /> +92-333-1361933</li>
                        <li><Phone size={18} /> +92-45-2361933</li>
                        <li><Mail size={18} /> info.hmbinternational@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} HMB International. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
