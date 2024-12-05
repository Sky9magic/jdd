import React from "react";
import Header from '../../components/header';
import "../../styles/contests.css"

export default function Contests() {
    return(
        <>
            <Header/>
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
                            <div className="left-box"></div>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="right-half">
                            <center style = {{fontSize: "30px", margin: "25px"}}>
                                Past Contest(s)
                            </center>
                            <div className="right-box"></div>
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
