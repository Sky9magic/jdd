// src/components/RefreshButton.tsx
"use client";

import React from "react";

export default function RefreshButton() {
    function handleClick() {
        window.location.reload();
    }
    return (
        <button onClick={handleClick}>
            (If the page looks buggy, please refresh)
        </button>
    );
}
