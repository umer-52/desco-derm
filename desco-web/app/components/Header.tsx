"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, ShieldAlert } from "lucide-react";
import "./Header.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <header className="header">
            <div className="header-top">
                <div className="container header-top-content">
                    <span>HMB International | Quality Hygiene Solutions</span>
                    <div className="header-contact">
                        <span className="emergency-badge">
                            <ShieldAlert size={16} /> ISO 13485:2016 Certified
                        </span>
                        <a href="tel:+924235876000">Support: +92 42 3587 6000</a>
                    </div>
                </div>
            </div>

            <div className="header-main">
                <div className="container header-main-content">
                    <Link href="/" className="logo">
                        <span className="logo-accent">DESCO</span> Antiseptics
                    </Link>

                    <div className="desktop-nav">
                        <nav className="nav-links">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/products">Collections</Link>
                            <Link href="/compliance">Compliance</Link>
                            <Link href="/contact">Contact</Link>
                        </nav>

                        <form className="search-form" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search by Pathogen (e.g. MRSA)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="input-field search-input"
                            />
                            <button type="submit" className="search-btn" aria-label="Search">
                                <Search size={20} />
                            </button>
                        </form>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="mobile-nav">
                    <nav className="mobile-nav-links container">
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="/products" onClick={() => setIsMenuOpen(false)}>Collections</Link>
                        <Link href="/compliance" onClick={() => setIsMenuOpen(false)}>Compliance</Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        <form className="mobile-search-form" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search by Pathogen..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="input-field mt-4"
                            />
                            <button type="submit" className="btn btn-primary w-full mt-2">Search</button>
                        </form>
                    </nav>
                </div>
            )}
        </header>
    );
}
