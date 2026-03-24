import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { collections, products } from "../../../data";
import ProductCard from "../../../components/ProductCard";
import "./collection.css";

export function generateStaticParams() {
    return collections.map((c) => ({
        slug: c.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const collection = collections.find((c) => c.slug === slug);
    if (!collection) return { title: "Collection Not Found - DESCO" };
    return {
        title: `${collection.name} Collection | DESCO Antiseptics`,
        description: collection.description,
    };
}

export default async function CollectionPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const collection = collections.find((c) => c.slug === slug);

    if (!collection) {
        notFound();
    }

    const collectionProducts = products.filter((p) =>
        collection.categories.includes(p.category)
    );

    return (
        <div className="collection-page">
            {/* Breadcrumb */}
            <div className="container collection-breadcrumb">
                <Link href="/products" className="back-to-collections">
                    <ArrowLeft size={16} />
                    Back to Collections
                </Link>
            </div>

            {/* Collection Header */}
            <div
                className="collection-hero"
                style={
                    {
                        "--collection-color": collection.color,
                    } as React.CSSProperties
                }
            >
                <div className="container">
                    <div className="collection-hero-accent" />
                    <h1 className="collection-title">{collection.name}</h1>
                    <p className="collection-description">
                        {collection.description}
                    </p>
                </div>
            </div>

            {/* Product Grid */}
            <div className="container collection-products-container">
                <p className="collection-count">
                    {collectionProducts.length} product
                    {collectionProducts.length !== 1 ? "s" : ""} in this
                    collection
                </p>
                <div className="collection-products-grid">
                    {collectionProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
