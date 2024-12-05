import React from "react";
import Link from "next/link";
import "../styles/header.css"

export default function Header() {
    return (
        <div className = "head">
            <div className = "webname">
                <img className = "logo" src = "/logo.png"></img>
                <div className = "main"><p style = {{margin: "15px", fontSize: "30px", color: "black"}}><Link href="/">Junior Dev Official Website</Link></p></div>
            </div>
            <div className = "headTextContent">
                <div className = "headText">
                    <p style = {{margin: "15px", fontSize: "30px", color: "black"}}><Link href="/">Home</Link></p>
                    <p style = {{margin: "15px", fontSize: "30px", color: "black"}}><Link href="/problems">Problems</Link></p>
                    <p style = {{margin: "15px", fontSize: "30px", color: "black"}}><Link href="/contests">Contests</Link></p>
                    <p style = {{margin: "15px", fontSize: "30px", color: "black"}}><Link href="/settings">Settings</Link></p>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}
