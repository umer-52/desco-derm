import { Product } from "../data";
import { CheckCircle2, XCircle, Clock, ShieldAlert, FileText } from "lucide-react";
import "./TechnicalDataBlock.css";

export default function TechnicalDataBlock({ product }: { product: Product }) {
    return (
        <div className="technical-data-block">
            <div className="tdb-header">
                <h2 className="tdb-title">Technical Specifications</h2>
                <a href={`/downloads/${product.id}-datasheet.pdf`} className="btn btn-primary btn-sm">
                    <FileText size={16} /> Request Datasheet
                </a>
            </div>

            <div className="tdb-grid">
                {/* Efficacy Section */}
                <div className="tdb-section efficacy-section">
                    <h3>Efficacy Profile</h3>
                    <ul className="efficacy-list">
                        <li>
                            <span className="efficacy-label">Bactericidal</span>
                            {product.efficacy.bactericidal ? <CheckCircle2 className="text-success" /> : <XCircle className="text-danger" />}
                        </li>
                        <li>
                            <span className="efficacy-label">Fungicidal (yeasticidal)</span>
                            {product.efficacy.fungicidal ? <CheckCircle2 className="text-success" /> : <XCircle className="text-danger" />}
                        </li>
                        <li>
                            <span className="efficacy-label">Virucidal (enveloped)</span>
                            {product.efficacy.virucidal ? <CheckCircle2 className="text-success" /> : <XCircle className="text-danger" />}
                        </li>
                        <li>
                            <span className="efficacy-label">Tuberculocidal</span>
                            {product.efficacy.tuberculocidal ? <CheckCircle2 className="text-success" /> : <XCircle className="text-danger" />}
                        </li>
                    </ul>
                </div>

                {/* Contact Time Section */}
                <div className="tdb-section contact-time-section">
                    <h3>Contact Time</h3>
                    <div className="contact-time-display">
                        <Clock size={32} className="contact-icon" />
                        <div className="contact-value">{product.contactTime}</div>
                    </div>
                    <p className="contact-note">Adhere to recommended exposure times for full efficacy.</p>
                </div>

                {/* EN Standards Section */}
                <div className="tdb-section en-standards-section">
                    <h3>EN Standards Compliance</h3>
                    <div className="en-tags">
                        {product.enStandards.map((std) => (
                            <span key={std} className="en-tag">{std}</span>
                        ))}
                    </div>
                </div>

                {/* Material Compatibility Section */}
                <div className="tdb-section compatibility-section">
                    <h3>Material Compatibility</h3>
                    <div className="compatibility-content">
                        <ShieldAlert size={24} className="compat-icon" />
                        <p>{product.materialCompatibility}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
