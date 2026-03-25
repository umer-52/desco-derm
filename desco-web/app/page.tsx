import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Microscope, Hospital, Download, FileText } from "lucide-react";
import { publicAsset } from "@/lib/assetPath";
import { collections } from "./data";
import "./page.css";

export default function Home() {

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-image-wrapper">
          <Image
            src={publicAsset("/cleanroom-hero.png")}
            alt="Clinical cleanroom environment"
            fill
            priority
            className="hero-bg-image"
          />
          <div className="hero-bg-overlay" />
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <ShieldCheck size={16} /> ISO 13485:2016 Certified
            </div>
            <h1 className="hero-title">Hygiene Solutions for Life</h1>
            <p className="hero-subtitle">
              Professional-grade disinfectants and hygiene products for hospitals,
              surgeries, and high-risk clinical environments. Trusted by healthcare
              professionals worldwide.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn btn-primary btn-lg">
                View Product Catalog
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg text-white border-white">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon-wrapper">
                <ShieldCheck size={32} />
              </div>
              <h3>Certified Quality</h3>
              <p>Manufactured under strict ISO 9001 and ISO 13485 standards.</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon-wrapper">
                <Microscope size={32} />
              </div>
              <h3>Proven Efficacy</h3>
              <p>Rigorous testing against EN standards (EN 1500, EN 14476).</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon-wrapper">
                <Hospital size={32} />
              </div>
              <h3>Hospital Grade</h3>
              <p>Trusted by major healthcare facilities worldwide.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Professional Solution Collections */}
      <section className="collections-section">
        <div className="container">
          <div className="collections-header">
            <h2>Professional Solution Collections</h2>
            <p>Select a collection to explore targeted infection control solutions designed for your clinical environment</p>
          </div>
          <div className="home-collections-grid">
            {collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/products/collection/${collection.slug}`}
                className="home-collection-card"
              >
                <div className="home-collection-card-image">
                  <Image
                    src={publicAsset(collection.image)}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="home-collection-img"
                  />
                  <div
                    className="home-collection-card-overlay"
                    style={{
                      background: `linear-gradient(180deg, transparent 0%, ${collection.color}DD 85%)`,
                    }}
                  />
                </div>
                <div className="home-collection-card-content">
                  <h3 className="home-collection-name">{collection.name}</h3>
                  <p className="home-collection-desc">{collection.description}</p>
                  <span className="home-collection-cta">
                    Explore Collection <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="documentation-section">
        <div className="container">
          <div className="documentation-content">
            <div className="documentation-text">
              <FileText size={40} className="documentation-icon" />
              <h2>Technical Documentation</h2>
              <p>
                Access comprehensive product specifications, safety data sheets, and compliance certificates for all DESCO® products.
              </p>
            </div>
            <a
              href={publicAsset("/DESCO Disinfectant.pdf")}
              download
              className="btn btn-primary btn-lg documentation-download-btn"
            >
              <Download size={20} />
              Download Technical PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
