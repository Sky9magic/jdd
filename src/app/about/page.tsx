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
                <div className="text-reveal-container aurora-container">
                    <h1 className="aurora-text2">About</h1>
                </div>
            </div>
            <div className="main" style={{alignItems:"center"}}>
                <div className="desc">
                    <div style={{textAlign:"center"}}>
                        <p className="desctext">Junior dev is an organization for hosting contests on various topics for people to practice doing problem ranging from basic coding to IOI</p>
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
