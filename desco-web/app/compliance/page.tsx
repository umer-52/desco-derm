import { ShieldCheck, Award, FileCheck, Globe } from "lucide-react";
import "./compliance.css";

export const metadata = {
    title: "Compliance & Certifications - DESCO Antiseptics",
    description: "DESCO products comply with international standards including ISO 9001:2015, ISO 13485:2016, ISO 14001:2015, ISO 45001:2018, and DRAP.",
};

export default function CompliancePage() {
    const certifications = [
        {
            icon: <ShieldCheck size={40} />,
            title: "ISO 9001:2015",
            subtitle: "Quality Management System",
            description: "Our manufacturing processes are certified under the internationally recognized quality management standard, ensuring consistent delivery of products that meet customer and regulatory requirements.",
        },
        {
            icon: <Award size={40} />,
            title: "ISO 13485:2016",
            subtitle: "Medical Devices — Quality Management",
            description: "Demonstrates our ability to provide medical devices and related services that consistently meet customer and applicable regulatory requirements specific to the medical device industry.",
        },
        {
            icon: <Globe size={40} />,
            title: "ISO 14001:2015",
            subtitle: "Environmental Management System",
            description: "We are committed to minimizing environmental impact. Our environmental management system ensures sustainable manufacturing practices across all product lines.",
        },
        {
            icon: <FileCheck size={40} />,
            title: "ISO 45001:2018",
            subtitle: "Occupational Health & Safety",
            description: "Our workplace health and safety management system protects employees and visitors, reducing occupational risks and creating better, safer working conditions.",
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "DRAP Approved",
            subtitle: "Drug Regulatory Authority of Pakistan",
            description: "All DESCO products are registered and approved by the Drug Regulatory Authority of Pakistan (DRAP), meeting stringent national standards for safety and efficacy.",
        },
    ];

    const enStandards = [
        { code: "EN 1500", title: "Hygienic hand disinfection — Test method and requirements" },
        { code: "EN 12791", title: "Surgical hand disinfection — Test method and requirements" },
        { code: "EN 13727", title: "Bactericidal activity — Quantitative suspension test for medical instruments" },
        { code: "EN 13624", title: "Fungicidal or yeasticidal activity in the medical area" },
        { code: "EN 14348", title: "Mycobactericidal activity — Quantitative suspension test" },
        { code: "EN 14476", title: "Virucidal quantitative suspension test for medical area" },
        { code: "EN 13697", title: "Bactericidal and/or fungicidal activity on non-porous surfaces" },
        { code: "EN 17126", title: "Sporicidal activity — Quantitative suspension test" },
    ];

    return (
        <div className="compliance-page">
            <div className="compliance-hero">
                <div className="container">
                    <h1>Compliance & Certifications</h1>
                    <p>
                        DESCO products meet the highest international quality and safety standards.
                        Every product is rigorously tested and certified for clinical use.
                    </p>
                </div>
            </div>

            <div className="container compliance-content">
                <section className="cert-section">
                    <h2>Our Certifications</h2>
                    <div className="cert-grid">
                        {certifications.map((cert) => (
                            <div key={cert.title} className="cert-card">
                                <div className="cert-card-icon">{cert.icon}</div>
                                <h3>{cert.title}</h3>
                                <span className="cert-subtitle">{cert.subtitle}</span>
                                <p>{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="en-section">
                    <h2>EN Standard Testing References</h2>
                    <p className="en-intro">
                        All DESCO disinfectants are evaluated according to the following European Norm (EN) standards:
                    </p>
                    <div className="en-table-wrap">
                        <table className="en-table">
                            <thead>
                                <tr>
                                    <th>Standard</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enStandards.map((std) => (
                                    <tr key={std.code}>
                                        <td className="en-code">{std.code}</td>
                                        <td>{std.title}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}
