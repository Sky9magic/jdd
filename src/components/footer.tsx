import React from "react";
import Link from "next/link";
import "../styles/footer_styles.css";

export default function Footer() {
    return (
        <footer className="Footer">
            <center className="text-footer"><Link href="/">© 2024 Junior Dev. All rights reserved.</Link></center>
        </footer>  
    );
}
