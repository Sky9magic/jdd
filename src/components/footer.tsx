"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../styles/footer_styles.css";

export default function Footer() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return document.body.getAttribute("data-theme") || "light";
        }
        return "light"; 
    });

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <footer className="Footer">
            <center className="text-footer">
                <Link href="/">© 2025 Junior Dev. <s>All rights reserved.</s> I don't give a fast fourier transform about it you can just copy the problems lmao -kaopj</Link>
            </center>
            <div className="themebutton">
                {/* Toggle Theme:  */}
                <button className="theme-toggle-btn" onClick={toggleTheme}>
                    {/* {theme === "light" ? "   🌙 Dark Mode   " : "   ☀️ Light Mode   "} */}
                </button>
            </div>
        </footer>
    );
}
