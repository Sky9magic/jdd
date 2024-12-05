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
                <div className = "title"><center style = {{fontSize: "50px", marginTop: "10px", marginBottom: "10px"}}>Contests</center></div>
                <div className="lines"><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr></div>
                <div className="cont">
                    {/* <div className = "left">
                        <h2 style = {{fontSize: "60px"}}>Upcoming Contests</h2>
                        <div className = "upcoming">
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
                    <div className="container">
                        <div className="left-half">
                            <center style = {{fontSize: "30px", margin: "25px"}}>
                                Upcoming Contest(s)
                            </center>
                            <div className="left-box">
                                <div className = "list1">
                                    <h1>- contest</h1>
                                    <h1>- contest</h1>
                                    <h1>- contest</h1>
                                </div>
                            </div>
                        </div>
                        {/* <div className="vertical-line"></div> */}
                        <div className="right-half">
                            <center style = {{fontSize: "30px", margin: "25px"}}>
                                Past Contest(s)
                            </center>
                            <div className="right-box">
                                <div className = "list2">
                                    <h1 style = {{margin: "15px"}}><Link className="btn" href = "https://codeforces.com/group/eScIVDG1u2/contest/560196">Junior Dev Loy Krathong Contest 2024</Link></h1>
                                    <h1 style = {{margin: "15px"}}><Link className="btn" href = "https://codeforces.com/group/eScIVDG1u2/contest/553124">Pre-POSN1 DAY2</Link></h1>
                                    <h1 style = {{margin: "15px"}}><Link className="btn" href = "https://codeforces.com/group/eScIVDG1u2/contest/553127">Pre-POSN1 DAY1</Link></h1>
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
