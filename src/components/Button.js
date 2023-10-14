import React from "react";

export default function Button({symbol, screen, gatherDigits, updateData}) {
  let createClassName = (symbol) => {
  switch(symbol) {
    case 'DEL':
    case 'RESET':
      return `calc__${symbol}-btn`;
    case '=' :
      return `btn calc__equal-btn`   ;
      default:
        if (typeof symbol === 'number') {
          return `btn calc__btn-${symbol}`;
        } else {
          return `calc__btn${symbol}`;
        }
   }
  }
  
  
  return (
    <button className = {createClassName(symbol)} type="button" value={symbol} onClick = {(e) => updateData(symbol)}>
      {symbol}
    </button>
  );
}
