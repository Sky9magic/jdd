"use client";

import React, { useState } from "react";
import Header from "../../components/header";
import "../../styles/problems.css";

export default function Problems() {
    const problemsList = [
        "wowza",
        "hello",
        "test",
        "bruh",
        "posn",
        "toi",
        "qwerty",
        "#include",
        "jd",
    ];

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredProblems, setFilteredProblems] = useState<string[]>(problemsList);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        setFilteredProblems(
            problemsList.filter((problem) =>
                problem.toLowerCase().includes(term)
            )
        );
    };

    return (
        <>
            <Header />
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="main">
                <h2>Problems</h2>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search Problems"
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{
                            color: "black",
                            padding: "10px",
                            width: "300px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            marginBottom: "20px",
                            marginTop: "5px",
                        }}
                    />
                </div>
                <div className="box">
                    <div className="list">
                        {filteredProblems.length > 0 ? (
                            filteredProblems.map((problem, index) => (
                                <div key={index} className="problem" style = {{color: "white", alignContent: "center"}}>
                                    {problem}
                                </div>
                            ))
                        ) : (
                            <div className="no-problems">No problems found</div>
                        )}
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
        </>
    );
}
