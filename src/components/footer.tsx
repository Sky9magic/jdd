"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../styles/footer_styles.css";

export default function Footer() {
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
        <footer className="Footer">
            <center className="text-footer">
                <Link href="/">© 2024 Junior Dev. All rights reserved.</Link>
                <button className="theme-toggle-btn" onClick={toggleTheme}>
                    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>
            </center>
        </footer>
    );
}

