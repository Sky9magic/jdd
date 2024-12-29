// src/components/RefreshButton.tsx
"use client";

import React from "react";

export default function RefreshButton() {
    return (
        <button onClick={window.location.reload();}>
            (If the page looks buggy, please refresh)
        </button>
    );
}
