import React from "react";
import Header from "../components/header";
import "../styles/home.css"

export default function Home() {
    return (
        <>
            <Header/>
            <div className = "main">
                <h2>Welcome to the Home Page</h2>
            </div>
        </>
    );
}
