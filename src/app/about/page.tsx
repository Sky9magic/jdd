"use client";

import React from "react";
import Header from '../../components/header';
import Footer from "../../components/footer";
import "../../styles/about.css";

export default function About() {
    return (
        <> 
            <Header />
            <div className="hero">
                <div className="logo">
                    <img src = "https://beta-jdev.vercel.app/logo.png" alt="logo-JDev" />
                </div>
                <div className="text-reveal-container">
                    <h1 className="typing2">About</h1>
                </div>
            </div>
            <div className="main" style={{alignItems:"center"}}>
                <div className="desc">
                    <div style={{textAlign:"center"}}>
                        <div className="aurora-container">
                            <p className="aurora-text">Junior dev is an organization for hosting contests on various topics for people to practice doing problem ranging from basic coding to IOI</p>
                        </div>
                        <p>made with ❤ by junior dev team members and friends</p>
                        <p>those who contributed to this project:</p>
                    </div>
                    <div className="listww">
                        <p className="person">1.</p>
                        <p className="person">2.</p>
                        <p className="person">3.</p>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </>
    );
}
