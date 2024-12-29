import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/about.css"
 
export default function Home() {
    return (
        <> 
            <Header />
            <div className="hero">
                <div className="logo">
                    <img src = "https://beta-jdev.vercel.app/logo.png" alt="logo-JDev" />
                </div>
                <div className="text-reveal-container">
                    <h1 className="logo_name typing">About</h1>
                </div>
            </div>
            <div className="desc">
                <p>Junior dev is an organization for hosting contests on various topics for people to practice doing problem ranging from basic coding to IOI</p>
                <p>made with ❤ by junior dev team members and friends</p>
                <p>those who contributed to this project:</p>
                <table>
                    <tr>1.kaopj</tr>
                    <tr>2.nagorn</tr>
                    <tr>3.uhhhh</tr>
                </table>
            </div>
            <br />
            <Footer />
        </>
    );
}
