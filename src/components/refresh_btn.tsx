"use client";

import React from "react";

export default function RefreshButton() {
    return (
        function refreshPage() { 
            window.location.reload(); 
        }
        <button onClick={ refreshPage }>
            <span>(If the page looks buggy, please refresh)</span>
        </button>
    );
}
