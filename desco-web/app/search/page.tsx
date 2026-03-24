import { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
    return (
        <div className="container py-4" style={{ minHeight: "60vh", padding: "4rem 1.5rem" }}>
            <Suspense fallback={<div style={{ padding: "2rem", textAlign: "center" }}>Loading search results...</div>}>
                <SearchContent />
            </Suspense>
        </div>
    );
}
