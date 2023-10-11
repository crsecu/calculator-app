import React from "react";

export default function Button({symbol, updateParentState, calculate, objectScreen}) {
  
  return (
    <button type="button" value={symbol} onClick = {(e) => updateParentState(e.target.value)}
    >
      {symbol}
    </button>
  );
}
