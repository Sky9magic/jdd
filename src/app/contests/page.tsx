import React from "react";
import Header from '../../components/header';
import Footer from "../../components/footer";
import "../../styles/contests.css"
{/*import Link from "next/link";*/}

export default function Contests() {
    return(
        <>
            <Header/>
            <div className = "main">
                <div className = "title"><center>Contests (Time is displayed as UTC+7 timezone)</center></div>
                <div className = "lines"><hr></hr></div>
                <div className="cont">
                    <div className="container">
                        <div className="left-half">
                            <center style = {{fontSize: "30px", margin: "30px"}}>
                                Upcoming Contest(s)
                            </center>
                            <div className="left-box">
                                <div className = "list1">
                                    <a className="contest" href = "https://juniordev.contest.codeforces.com/group/eScIVDG1u2/contests" target="_blank">
                                        <div className="flex" style={{alignItems:"center"}}>
                                            <div style={{textAlign:'center'}} className="flex flex-1 flex-col">
                                                <b>Junior Dev New Year Contest 2025</b>
                                                30/Nov/2024 18:00 - 1/Jan/2025 00:00 <br></br>
                                                Registration Begins at 30/Nov/2024 12:00
                                            </div>
                                            <div>
                                                <img className="platform" src="/codeforces.webp" alt="Codeforces"></img>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="vertical-line"></div> */}
                        <div className="right-half">
                            <center style = {{fontSize: "30px", margin: "30px"}}>
                                Past Contests
                            </center>
                            <div className="right-box">
                                <div className = "list2">
                                    <a className="contest" href = "https://codeforces.com/group/eScIVDG1u2/contest/560196" target="_blank">
                                        <div className="flex" style={{alignItems:"center"}}>
                                            <div style={{textAlign:'center'}} className="flex flex-1 flex-col">
                                                <b>Junior Dev Loy Krathong Contest 2024</b>
                                                16/Nov/2024 19:00 - 23:00
                                            </div>
                                            <div>
                                                <img className="platform" src="/codeforces.webp" alt="Codeforces"></img>
                                            </div>
                                        </div>
                                    </a>
                                    <br></br>
                                    <a className="contest" href = "https://codeforces.com/group/eScIVDG1u2/contest/553124" target="_blank">
                                        <div className="flex" style={{alignItems:"center"}}>
                                            <div style={{textAlign:'center'}} className="flex flex-1 flex-col">
                                                <b>Pre-POSN1 DAY2 (2024)</b>
                                                9/Oct/2024 19:00 - 10/Oct/2024 00:00
                                            </div>
                                            <div>
                                                <img className="platform" src="/codeforces.webp" alt="Codeforces"></img>
                                            </div>
                                        </div>
                                    </a>
                                    <br></br>
                                    <a className="contest" href = "https://codeforces.com/group/eScIVDG1u2/contest/553127" target="_blank">
                                        <div className="flex" style={{alignItems:"center"}}>
                                            <div style={{textAlign:'center'}} className="flex flex-1 flex-col">
                                                <b>Pre-POSN1 DAY1 (2024)</b>
                                                8/Oct/2024 19:00 - 9/Oct/2024 00:00
                                            </div>
                                            <div>
                                                <img className="platform" src="/codeforces.webp" alt="Codeforces"></img>
                                            </div>
                                        </div>
                                    </a>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
