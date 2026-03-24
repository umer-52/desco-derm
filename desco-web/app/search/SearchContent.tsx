"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { products } from "../data";
import ProductCard from "../components/ProductCard";

export default function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";

    const results = useMemo(() => {
        if (!query) return [];
        const q = query.toLowerCase();

        return products.filter(product => {
            // Check name, category, and description
            if (
                product.name.toLowerCase().includes(q) ||
                product.category.toLowerCase().includes(q) ||
                product.description.toLowerCase().includes(q)
            ) return true;

            // Check pathogens (the primary use case for search as per PRD)
            if (product.pathogens) {
                return product.pathogens.some(p => p.toLowerCase().includes(q));
            }

            return false;
        });
    }, [query]);

    return (
        <>
            <h1 className="mb-4" style={{ color: "var(--color-medical-blue)", marginBottom: "2rem" }}>
                Search Results for "{query}"
            </h1>

            {results.length === 0 ? (
                <div style={{ padding: "3rem", backgroundColor: "var(--color-off-white)", borderRadius: "8px", textAlign: "center" }}>
                    <h3>No products found for "{query}"</h3>
                    <p>Please try a different pathogen, product name, or category.</p>
                </div>
            ) : (
                <div>
                    <p style={{ marginBottom: "2rem" }}>Found {results.length} product(s) matching your criteria.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
                        {results.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
