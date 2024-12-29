"use client";

import React from "react";

export default function RefreshButton() {
    function refreshPage() { 
        window.location.reload(); 
    }
    return (
        <button onClick={ refreshPage }>
            <span>(If the page looks buggy, please refresh)</span>
        </button>
    );
}
