import Link from "next/link";
import Image from "next/image";
import { publicAsset } from "@/lib/assetPath";
import { Product } from "../data";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import "./ProductCard.css";

export default function ProductCard({ product }: { product: Product }) {
    // Determine highlight feature for card
    const getHighlightFeature = () => {
        if (product.efficacy.virucidal && product.efficacy.bactericidal) return "Broad-spectrum Virucidal";
        if (product.category === "Instruments and Endoscopes") return "High-Level Disinfection";
        if (product.enStandards.includes("EN 1500")) return "Hygienic Hand Rub";
        return "Medical Grade Disinfectant";
    };

    return (
        <div className="product-card">
            <div className="product-card-header">
                <span className="product-category-label">{product.category}</span>
            </div>
            <div className="product-card-body">
                <div className="product-card-text">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-desc">{product.shortDescription}</p>

                    <div className="product-features">
                        <div className="feature-item">
                            <CheckCircle2 size={16} className="feature-icon" />
                            <span>{getHighlightFeature()}</span>
                        </div>
                        <div className="feature-item">
                            <CheckCircle2 size={16} className="feature-icon" />
                            <span>Contact Time: <strong>{product.contactTime}</strong></span>
                        </div>
                    </div>
                </div>
                <div className="product-card-image">
                    <Image
                        src={publicAsset(product.image)}
                        alt={product.name}
                        width={120}
                        height={150}
                        className="product-thumbnail"
                    />
                </div>
            </div>
            <div className="product-card-footer">
                <Link href={`/products/${product.id}`} className="view-details-link">
                    View Technical Data <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
}
