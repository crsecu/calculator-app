import React from "react";

export default function Button({symbol, screen, gatherDigits, updateData}) {
  let createClassName = (symbol) => {
  switch(symbol) {
    case 'DEL':
    case 'RESET':
      return `btn calculator__${symbol}-btn`;
    case '=' :
      return `btn calculator__equal-btn`   ;
      default:
        if (typeof symbol === 'number') {
          return `calculator__btn-${symbol}`;
        } else {
          return `calculator__btn${symbol}`;
        }
   }
  }
  
  
  return (
    <button className = {createClassName(symbol)} type="button" value={symbol} onClick = {(e) => updateData(symbol)}>
      {symbol}
    </button>
  );
}
