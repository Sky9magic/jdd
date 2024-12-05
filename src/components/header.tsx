import React from "react";
import Link from "next/link";
import "../styles/header.css"

export default function Header() {
    return (
        <div className = "head">
            <div className = "webname">
                <Link href="/"><img className = "logo" src = "/logo.png"></img></Link>
                <div className = "main"><p style = {{margin: "15px", fontSize: "25px", color: "black"}}><Link href="/"><b>Junior Dev Official Website</b></Link></p></div>
            </div>
            <div className = "headTextContent">
                <div className = "headText">
                    <p><Link href="/">Home</Link></p>
                    <p><Link href="/problems">Problems</Link></p>
                    <p><Link href="/contests">Contests</Link></p>
                    <p><Link href="/settings">Settings</Link></p>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}
