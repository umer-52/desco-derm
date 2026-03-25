import Image from "next/image";
import { publicAsset } from "@/lib/assetPath";
import { Factory, FlaskConical, Search, Palette, ShieldCheck, Award, FileCheck } from "lucide-react";
import "./about.css";

export const metadata = {
    title: "About Us | DESCO Antiseptics",
    description:
        "Learn about DESCO® — manufacturing, sales, and marketing of hygiene, disinfection, personal care, and industrial cleaning products.",
};

export default function AboutPage() {
    return (
        <div className="about-page">
            {/* Hero Banner */}
            <section className="about-hero">
                <div className="about-hero-image-wrapper">
                    <Image
                        src={publicAsset("/city-skyline-hero.png")}
                        alt="City skyline representing DESCO's global reach"
                        fill
                        priority
                        className="about-hero-image"
                    />
                    <div className="about-hero-overlay" />
                </div>
                <div className="container about-hero-content">
                    <h1 className="about-hero-title">About Us</h1>
                    <p className="about-hero-subtitle">
                        Manufacturing excellence in hygiene, disinfection &amp; personal care since inception
                    </p>
                </div>
            </section>

            {/* Company Introduction */}
            <section className="about-intro">
                <div className="container about-intro-grid">
                    <div className="about-intro-text">
                        <h2>Who We Are</h2>
                        <p>
                            <strong>Desco®</strong> is specialized in manufacturing, sales, and marketing of hygiene,
                            disinfection, personal care, and industrial cleaning products. Desco® consists of several
                            departments and has achieved a significant sales ratio in the current market by developing
                            rapid surface disinfectants, which do not contain any alcohol.
                        </p>
                        <p>
                            Desco® products are manufactured in compliance and according to national regulations and
                            standards following <strong>Good Manufacturing Practices</strong>.
                        </p>
                    </div>
                    <div className="about-certifications-sidebar">
                        <div className="cert-card">
                            <div className="cert-card-header">
                                <Award size={24} />
                                <h3>Certifications &amp; Registrations</h3>
                            </div>
                            <ul className="cert-list">
                                <li>
                                    <ShieldCheck size={20} className="cert-icon" />
                                    <div>
                                        <strong>ISO 13485:2016</strong>
                                        <span>Medical Devices Quality Management</span>
                                    </div>
                                </li>
                                <li>
                                    <ShieldCheck size={20} className="cert-icon" />
                                    <div>
                                        <strong>ISO 9001:2015 (GMP)</strong>
                                        <span>Quality Management Systems</span>
                                    </div>
                                </li>
                                <li>
                                    <FileCheck size={20} className="cert-icon" />
                                    <div>
                                        <strong>DRAP Registration</strong>
                                        <span>Drug Regulatory Authority of Pakistan</span>
                                    </div>
                                </li>
                                <li>
                                    <FileCheck size={20} className="cert-icon" />
                                    <div>
                                        <strong>PCSIR Certified</strong>
                                        <span>Pakistan Council of Scientific &amp; Industrial Research</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Department Sections */}
            <section className="about-departments">
                <div className="container">
                    <h2 className="departments-title">Our Departments</h2>
                    <p className="departments-subtitle">
                        Dedicated teams working together to deliver world-class hygiene solutions
                    </p>

                    <div className="departments-grid">
                        {/* Production */}
                        <div className="department-card">
                            <div className="department-icon-wrapper production">
                                <Factory size={32} />
                            </div>
                            <h3>Production</h3>
                            <p>
                                Our Production Department is where a professional team carries out the production
                                of high-quality products. Every batch is carefully manufactured under strict controls
                                to ensure consistency and reliability across our entire product range.
                            </p>
                        </div>

                        {/* Quality Assurance */}
                        <div className="department-card">
                            <div className="department-icon-wrapper quality">
                                <ShieldCheck size={32} />
                            </div>
                            <h3>Quality Control &amp; Assurance</h3>
                            <p>
                                In our Quality Control &amp; Quality Assurance Departments, professional staff
                                inspects the products and ensures the goods are delivered in perfect condition
                                and quality. Every product undergoes rigorous testing before release.
                            </p>
                        </div>

                        {/* R&D */}
                        <div className="department-card">
                            <div className="department-icon-wrapper rnd">
                                <FlaskConical size={32} />
                            </div>
                            <h3>Research &amp; Development</h3>
                            <p>
                                In the R&amp;D department, new products are developed, while existing ones are
                                being improved in accordance with customer demands. Our team stays at the forefront
                                of disinfection science and formulation innovation.
                            </p>
                        </div>

                        {/* Graphics & Custom Labeling */}
                        <div className="department-card">
                            <div className="department-icon-wrapper graphics">
                                <Palette size={32} />
                            </div>
                            <h3>Graphics &amp; Custom Labeling</h3>
                            <p>
                                Our Graphics Department designs enable us to provide specially designed labels
                                for our products according to the details and language of the target market.
                                Customized branding solutions for global distribution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission / Values Statement */}
            <section className="about-mission">
                <div className="container about-mission-content">
                    <Search size={40} className="mission-icon" />
                    <h2>Our Commitment</h2>
                    <p>
                        At Desco®, we are committed to protecting lives through advanced hygiene and
                        disinfection solutions. Every product we develop is a step towards a cleaner,
                        safer, and healthier world — for healthcare professionals and communities alike.
                    </p>
                </div>
            </section>
        </div>
    );
}
