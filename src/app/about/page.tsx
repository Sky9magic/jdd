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
                <div className="aurora-container">
                    <h1 className="aurora-text2">About</h1>
                </div>
            </div>
            <div className="main" style={{alignItems:"center"}}>
                <div className="desc">
                    <div style={{textAlign:"center"}}>
                        <p className="desctext"><span className="aurora-text2">Junior dev</span> is an organization for hosting <span className="aurora-text3">contests</span> on various topics for people to practice doing problems ranging from <span style={{color:"#00ff00"}}>basic coding</span> to beyond <span style={{color:"#ed143d"}}>IOI</span></p>
                        <p>made with ❤ by junior dev team members and friends</p>
                        <p>those who contributed to this project:</p>
                    </div>
                    <div className="listww">
                        <p className="person">Detective conan</p>
                        <p className="person">Mingyuanz</p>
                        <p className="person">kaopj</p>
                        <p className="person">Nagorn[website]</p>
                        <p className="person">opal_Inwza007x</p>
                        <p className="person">njoop</p>
                        <p className="person">Pakindioxide</p>
                        <p className="person">CaRaMeL</p>
                        <p className="person">NeighborhoodCat</p>
                        <p className="person">chawinkn</p>
                        <p className="person">MisterO</p>
                        <p className="person">mistertfy64</p>
                        <p className="person">a0msin</p>
                        <p className="person">Chanon</p>
                        <p className="person">Detective Got</p>
                        <p className="person">Dormon</p>
                        <p className="person">KG07</p>
                        <p className="person">hotheadexe</p>
                        <p className="person">ikkainoiz</p>
                        <p className="person">MiN</p>
                        <p className="person">NovemNotes</p>
                        <p className="person">himmmm</p>
                        <p className="person">CCSleep</p>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </>
    );
}
