import React from "react";

export default function Button({symbol, screen, gatherDigits, updateData}) {
  
  return (
    <button type="button" value={symbol} onClick = {(e) => updateData(symbol)}>
      {symbol}
    </button>
  );
}
