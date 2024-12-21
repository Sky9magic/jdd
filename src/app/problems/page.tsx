"use client";

import React, { useState } from "react";
import Header from "../../components/header";
import "../../styles/problems.css";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Problems() {
    const problemsList = [
        { name: "Beginning", index: 0, contest: "Pre-POSN1 DAY1" },
        { name: "CIA Robbery", index: 1, contest: "Pre-POSN1 DAY1" },
        { name: "Taiyaki", index: 2, contest: "Pre-POSN1 DAY1" },
        { name: "Dream", index: 3, contest: "Pre-POSN1 DAY1" },
        { name: "Poisoning", index: 4, contest: "Pre-POSN1 DAY1" },
        { name: "Eliminate", index: 5, contest: "Pre-POSN1 DAY1" },
        { name: "Prime Move On", index: 6, contest: "Pre-POSN1 DAY1" },
        { name: "Croissant", index: 7, contest: "Pre-POSN1 DAY1" },
        { name: "Trap", index: 8, contest: "Pre-POSN1 DAY1" },
        { name: "Rope Puzzle", index: 9, contest: "Pre-POSN1 DAY1" },
        { name: "EXTRA", index: 10, contest: "Pre-POSN1 DAY1" },
        { name: "Rocket", index: 11, contest: "Pre-POSN1 DAY2" },
        { name: "Pond", index: 12, contest: "Pre-POSN1 DAY2" },
        { name: "4 Khon", index: 13, contest: "Pre-POSN1 DAY2" },
        { name: "DevJ and palindrome", index: 14, contest: "Pre-POSN1 DAY2" },
        { name: "UOI", index: 15, contest: "Pre-POSN1 DAY2" },
        { name: "Hurricane", index: 16, contest: "Pre-POSN1 DAY2" },
        { name: "Sakubomb", index: 17, contest: "Pre-POSN1 DAY2" },
        { name: "sleepntjoop", index: 18, contest: "Pre-POSN1 DAY2" },
        { name: "Seating", index: 19, contest: "Pre-POSN1 DAY2" },
        { name: "Friend", index: 20, contest: "Pre-POSN1 DAY2" },
        { name: "EXTRA", index: 21, contest: "Pre-POSN1 DAY2" },
        { name: "Original Krathong", index: 22, contest: "Junior Dev Loy Krathong Contest 2024" },
        { name: "super memory", index: 23, contest: "Junior Dev Loy Krathong Contest 2024" },
        { name: "Baidu X LOY Krathong", index: 24, contest: "Junior Dev Loy Krathong Contest 2024" },
        { name: "Prove", index: 25, contest: "Junior Dev Loy Krathong Contest 2024" },
        { name: "Soul", index: 26, contest: "Junior Dev Loy Krathong Contest 2024" },
        { name: "Collect", index: 27, contest: "Junior Dev Loy Krathong Contest 2024" },
    ];
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredProblems, setFilteredProblems] = useState<{ name: string, index: number, contest: string }[]>(problemsList);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        setFilteredProblems(
            problemsList.filter((problem) =>
                problem.name.toLowerCase().includes(term) || problem.index.toString().includes(term) || problem.contest.toLowerCase().includes(term)
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
                    <h1>Contest</h1>
                </div>
                <div className="box">
                    <div className="list">
                        {filteredProblems.length > 0 ? (
                            filteredProblems.map((problem) => (
                                <div className="problemlist" key={problem.index}>
                                    <Link className="problem" href={`/problems/${problem.index}`}>
                                        <div className="titleproblemwow">
                                            <div className="problemname">{problem.name}</div>
                                            <div className="problemnum">{problem.index}</div>
                                        </div>
                                        <div className="problemcontest">{problem.contest}</div>
                                    </Link>
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
