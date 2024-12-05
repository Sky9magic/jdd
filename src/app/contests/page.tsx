import React from "react";
import Header from '../../components/header';
import "../../styles/contests.css"
import Link from "next/link";

export default function Contests() {
    return(
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className = "main">
                <div className = "title"><center>Contests</center></div>
                <div className = "lines"><hr></hr></div>
                <div className="cont">
                    <div className="container">
                        <div className="left-half">
                            <center style = {{fontSize: "30px", margin: "30px"}}>
                                Upcoming Contest(s)
                            </center>
                            <div className="left-box">
                                <div className = "list1">
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                    <p>- contest</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="vertical-line"></div> */}
                        <div className="right-half">
                            <center style = {{fontSize: "30px", margin: "30px"}}>
                                Past Contest(s)
                            </center>
                            <div className="right-box">
                                <div className = "list2">
                                    <p><Link className="btn" href = "https://codeforces.com/group/eScIVDG1u2/contest/560196">Junior Dev Loy Krathong Contest 2024</Link></p>
                                    <p><Link className="btn" href = "https://codeforces.com/group/eScIVDG1u2/contest/553124">Pre-POSN1 DAY2 (2024)</Link></p>
                                    <p><Link className="btn" href = "https://codeforces.com/group/eScIVDG1u2/contest/553127">Pre-POSN1 DAY1 (2024)</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="right">
                        <h2 style = {{fontSize: "60px"}}>Past Contests</h2>
                        <div className = "past">
                            <h1> - Contest</h1>
                            <h1> - Contest</h1>
                            <h1> - Contest</h1>
                            <h1> - Contest</h1>
                            <h1> - Contest</h1>
                            <h1> - Contest</h1>
                            <h1> - Contest</h1>
                            <h1> - Contest</h1>
                            <h1> - Contest</h1>
                            <h1> - Contest</h1>
                            <h1> - Contest</h1>
                            <h1> - Contest</h1>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
