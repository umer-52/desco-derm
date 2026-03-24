import { Metadata } from 'next';
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, FlaskConical, Package, Microscope } from "lucide-react";
import { products, collections } from "../../data";
import "./product-detail.css";

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const product = products.find(p => p.id === id);
    if (!product) return { title: 'Product Not Found - DESCO' };
    return {
        title: `${product.name} | ${product.category} - DESCO Antiseptics`,
        description: product.description,
    };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find(p => p.id === id);

    if (!product) {
        notFound();
    }

    const parentCollection = collections.find(c => c.categories.includes(product.category));

    return (
        <div className="pdp">
            {/* Breadcrumb */}
            <div className="container pdp-breadcrumb">
                <Link href="/products" className="back-link">
                    <ArrowLeft size={16} /> Collections
                </Link>
                <span className="breadcrumb-sep">/</span>
                {parentCollection ? (
                    <Link href={`/products/collection/${parentCollection.slug}`} className="back-link breadcrumb-collection-link">
                        {parentCollection.name}
                    </Link>
                ) : (
                    <span className="breadcrumb-category">{product.category}</span>
                )}
                <span className="breadcrumb-sep">/</span>
                <span className="breadcrumb-category">{product.name}</span>
            </div>

            {/* Hero Section: Product Image + Key Info */}
            <div className="container">
                <div className="pdp-hero">
                    <div className="pdp-image-col">
                        <div className="pdp-image-wrapper">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={520}
                                height={700}
                                className="pdp-product-image"
                                priority
                            />
                        </div>
                    </div>

                    <div className="pdp-info-col">
                        <span className="pdp-category-badge" style={{ backgroundColor: product.categoryColor }}>
                            {product.category}
                        </span>
                        <h1 className="pdp-title">{product.name}</h1>
                        <p className="pdp-subtitle">{product.subtitle}</p>

                        <ul className="pdp-features">
                            {product.keyFeatures.map((feature, i) => (
                                <li key={i}>
                                    <CheckCircle2 size={16} className="feature-check" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="pdp-composition">
                            <h3><FlaskConical size={18} /> Composition</h3>
                            <p>{product.composition}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Narrative Description */}
            <div className="container">
                <section className="pdp-section pdp-description-section">
                    <h2>Product Description</h2>
                    <p className="pdp-description-text">{product.description}</p>
                </section>
            </div>

            {/* Microbiological Activity Table */}
            <div className="container">
                <section className="pdp-section">
                    <h2><Microscope size={22} /> Microbiological Activity</h2>
                    <div className="pdp-table-wrapper">
                        <table className="pdp-table micro-table">
                            <thead>
                                <tr>
                                    <th>Microbiological Activity</th>
                                    {product.microbiologicalActivity[0]?.testMethod !== undefined && <th>Test Method</th>}
                                    {product.microbiologicalActivity[0]?.concentration !== undefined && <th>Concentration</th>}
                                    {product.microbiologicalActivity[0]?.applicationDose !== undefined && <th>Application Dose</th>}
                                    {product.microbiologicalActivity[0]?.applicationRange !== undefined && <th>Application Range</th>}
                                    {product.microbiologicalActivity[0]?.effectTime !== undefined && <th>Effect Time</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {product.microbiologicalActivity.map((row, i) => (
                                    <tr key={i}>
                                        <td className="activity-cell">
                                            <strong>{row.activity}</strong>
                                            {row.organisms && <span className="organism-detail">({row.organisms})</span>}
                                        </td>
                                        {row.testMethod !== undefined && <td className="en-cell">{row.testMethod}</td>}
                                        {row.concentration !== undefined && <td>{row.concentration}</td>}
                                        {row.applicationDose !== undefined && <td>{row.applicationDose}</td>}
                                        {row.applicationRange !== undefined && <td>{row.applicationRange}</td>}
                                        {row.effectTime !== undefined && <td className="time-cell">{row.effectTime}</td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            {/* Packaging Grid */}
            <div className="container">
                <section className="pdp-section">
                    <h2><Package size={22} /> Packaging</h2>
                    <div className="pdp-table-wrapper">
                        <table className="pdp-table packaging-table">
                            <thead>
                                <tr>
                                    <th>Unit</th>
                                    <th>Pieces in Box</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.packaging.map((pkg, i) => (
                                    <tr key={i}>
                                        <td className="unit-cell">{pkg.unit}</td>
                                        <td>{pkg.piecesInBox}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            {/* EN Standards Tags */}
            <div className="container">
                <section className="pdp-section pdp-standards-section">
                    <h2>Compliance Standards</h2>
                    <div className="en-tags">
                        {product.enStandards.map((std) => (
                            <span key={std} className="en-tag">{std}</span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
