import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <h1>Junior Dev Official Website</h1>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/problems">Problems</Link></li>
                    <li><Link href="/submissions">Submissions</Link></li>
                    <li><Link href="/contests">Contests</Link></li>
                    <li><Link href="/settings">Settings</Link></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}
