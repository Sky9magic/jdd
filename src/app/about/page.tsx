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
                    <h1 className="logo_name typing">About</h1>
                </div>
            </div>
            <div className="desc">
                <div className="aurora-container">
                    <p className="aurora-text">Junior dev is an organization for hosting contests on various topics for people to practice doing problem ranging from basic coding to IOI</p>
                </div>
                <p>made with ❤ by junior dev team members and friends</p>
                <p>those who contributed to this project:</p>
                <div className="list">
                    <p className="person">1.kaopj</p>
                    <p className="person">2.nagorn</p>
                    <p className="person">3.uhhhh</p>
                </div>
            </div>
            <br />
            <Footer />
        </>
    );
}
