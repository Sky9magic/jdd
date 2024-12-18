"use client";

import React, { useState } from "react";
import Header from "../../components/header";
import "../../styles/problems.css";
import Footer from "../../components/footer";

export default function Problems() {
    const problemsList = [
        { name: "Beginning", index: 0 },
        { name: "CIA Robbery", index: 1 },
        { name: "Taiyaki", index: 2 },
        { name: "Dream", index: 3 },
        { name: "Poisoning", index: 4 },
        { name: "Eliminate", index: 5 },
        { name: "Prime Move On", index: 6 },
        { name: "Croissant", index: 7 },
        { name: "Trap", index: 8 },
        { name: "Rope Puzzle", index: 9 },
        { name: "EXTRA", index: 10 },
        { name: "Rocket", index: 11 },
        { name: "Pond", index: 12 },
        { name: "4 Khon", index: 13 },
        { name: "DevJ and palindrome", index: 14 },
        { name: "UOI", index: 15 },
        { name: "Hurricane", index: 16 },
        { name: "Sakubomb", index: 17 },
        { name: "sleepntjoop", index: 18 },
        { name: "Seating", index: 19 },
        { name: "Friend", index: 20 },
        { name: "EXTRA", index: 21 },
        { name: "Original Krathong", index: 22 },
        { name: "super memory", index: 23 },
        { name: "Baidu X LOY Krathong", index: 24 },
        { name: "Prove", index: 25 },
        { name: "Soul", index: 26 },
        { name: "Collect", index: 27 },
    ];

    // Update type here to match the structure of the problemsList
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredProblems, setFilteredProblems] = useState<{ name: string, index: number }[]>(problemsList);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        setFilteredProblems(
            problemsList.filter((problem) =>
                problem.name.toLowerCase().includes(term) || problem.index.toString().includes(term)
            )
        );
    };

    return (
        <>
            <Header />
            <div className="main">
                <div className="problemstitle"><h2>Problems</h2></div>
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
                            marginBottom: "10px",
                            marginTop: "1px",
                        }}
                    />
                </div>
                <div className="listheader">
                    <h1>Problem Name</h1>
                    <h1>Level</h1>
                    <h1>Contest</h1>
                    <h1>Progress</h1>
                </div>
                <div className="box">
                    <div className="list">
                        {filteredProblems.length > 0 ? (
                            filteredProblems.map((problem) => (
                                <div className="problemlist" key={problem.index}>
                                    <a className="problem" href={`/problems/${problem.index}`}>
                                        <div className="problemname">{problem.name}</div>
                                        <div className="problemnum">{problem.index}</div>
                                    </a>
                                </div>
                            ))
                        ) : (
                            <div className="no-problems">No problems found</div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
