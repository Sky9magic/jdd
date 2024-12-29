"use client";

import React from "react";
import "../styles/refresh.css";
export default function RefreshButton() {
    function refreshPage() { 
        window.location.reload(); 
    }
    return (
        <div className="tooltip">
            <button onClick={ refreshPage } className="refresher">⟳</button>
            <span className="tooltiptext">If the page looks buggy, please refresh</span>
        </div>
    );
}
