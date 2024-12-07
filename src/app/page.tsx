import React from "react";
import Link from "next/link";
import Header from "../components/header";
import "../styles/home.css"

export default function Home() {
    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className = "main">
                <div className = "title"><h2>About</h2></div>
                <center style = {{fontSize: "30px", margin: "30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center>
                <p>Go to <Link className="btn" href="/contests">contests</Link></p>
            </div>
            <hr></hr>
        </>
    );
}
