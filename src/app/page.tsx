import React from "react";
import Header from "../components/header";
import "../styles/home.css"

export default function Home() {
    return (
        <>
            <Header/>
            <div className = "main">
                <h2 style = {{fontSize: "50px", margin: "35px"}}>About</h2>
            </div>
        </>
    );
}
