import React from 'react';

export default function Screen({displayScreen, toggleTheme}) {

let screenBackgroundColor = "";
let screenTextColor = "";
switch (toggleTheme) {
  case 'two':
   screenBackgroundColor =  't2-screenBackground ';
   screenTextColor = 't2-btnText';
   break;
  case 'three':
    screenBackgroundColor = 't3-screenBackground';
    screenTextColor = 't3-btnText';
    break;
  default:
    screenBackgroundColor = 't1-screenBackground';   
    screenTextColor = 'whiteText';
}


    return (
        <div className = {`calculator__screen ${screenBackgroundColor}`}>
            <span className = {`calculator__result ${screenTextColor}`}>{displayScreen}</span>
        </div>
    )
}