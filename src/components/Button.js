import React from "react";

export default function Button(props) {
  return (
    <button type="button" value={props.symbol} onClick = {(e) => console.log(e.target.value)}>
      {props.symbol}
    </button>
  );
}
