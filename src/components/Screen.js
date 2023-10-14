import React from 'react';

export default function Screen({displayScreen}) {

    return (
        <div className = "calculator__screen">
            <h2>{displayScreen}</h2>
        </div>
    )
}