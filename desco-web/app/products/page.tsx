import Link from "next/link";
import Image from "next/image";
import { publicAsset } from "@/lib/assetPath";
import { collections } from "../data";
import { ArrowRight } from "lucide-react";
import "./products.css";

export default function ProductsPage() {
    return (
        <div className="products-page">
            <div className="products-hero">
                <div className="container">
                    <h1>Professional Solution Collections</h1>
                    <p>
                        Select a collection to explore targeted infection control
                        solutions designed for your clinical environment.
                    </p>
                </div>
            </div>

            <div className="container collections-container">
                <div className="collections-grid">
                    {collections.map((collection) => (
                        <Link
                            key={collection.slug}
                            href={`/products/collection/${collection.slug}`}
                            className="collection-card"
                        >
                            <div className="collection-card-image">
                                <Image
                                    src={publicAsset(collection.image)}
                                    alt={collection.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="collection-img"
                                />
                                <div
                                    className="collection-card-overlay"
                                    style={{
                                        background: `linear-gradient(180deg, transparent 0%, ${collection.color}DD 85%)`,
                                    }}
                                />
                            </div>
                            <div className="collection-card-content">
                                <h2 className="collection-name">{collection.name}</h2>
                                <p className="collection-desc">{collection.description}</p>
                                <span className="collection-cta">
                                    Explore the {collection.name} Collection{" "}
                                    <ArrowRight size={18} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
