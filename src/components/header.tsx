import React from "react";
import Link from "next/link";
import "../styles/header.css"

export default function Header() {
    return (
        <div className = "head">
            <div className = "webname">
                <img className = "logo" src = "/logo.png"></img>
                <p style = {{margin: "15px", fontSize: "30px"}}>Junior Dev Official Website</p>
            </div>
            <div className = "headTextContent">
                <div className = "headText">
                    <p><Link href="/">Home</Link></p>
                    <p><Link href="/problems">Problems</Link></p>
                    <p><Link href="/submissions">Submissions</Link></p>
                    <p><Link href="/contests">Contests</Link></p>
                    <p><Link href="/settings">Settings</Link></p>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}
