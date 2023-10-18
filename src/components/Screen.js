import React from 'react';

export default function Screen({displayScreen}) {

    return (
        <div className = "calculator__screen">
            <span className = "calculator__result">{displayScreen}</span>
        </div>
    )
}