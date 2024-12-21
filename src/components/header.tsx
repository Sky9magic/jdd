import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../styles/header_styles.css";

export default function Header() {
    const [theme, setTheme] = useState<string>(
        typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light"
    );

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header className="head">
            <div className="background"></div>
            <nav className="nav-head">
                <Link href="/">Home</Link>
                <Link href="/problems">Problems</Link>
                <Link href="/contests">Contests</Link>
                <Link href="/settings">Settings</Link>
            </nav>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
        </header>
    );
}
