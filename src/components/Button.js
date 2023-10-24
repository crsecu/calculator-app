import React from "react";

export default function Button({symbol, screen, gatherDigits, updateData, toggleTheme}) {
  
  let btnColor = '';
  let btnText = '';

  //this variable holds the button shadow style for the DEL and RESET buttons
  let btnShadowDR = '';
  //this variable holds the button shadow style for the Equal button 
  let btnShadowEqual = '';
  // this variable holds the button shadow style for the rest of the buttons
  let btnShadowAll = '';

  switch(toggleTheme) {
    case 'two':
    btnColor = "t2-btnColor";
    btnShadowDR = "t2-keyShadow";
    btnShadowEqual = "t2-toggleBtnShadow";
    btnShadowAll = "t2-btnShadow";
    break;
    case 'three':
    btnColor = "t3-btnColor"
    btnText = "t3-btnText";
    btnShadowDR = "t3-keyShadow";
    btnShadowEqual = "t3-toggleBtnShadow";
    btnShadowAll = "t3-btnShadow";
    break;
    default:
    btnColor = "t1-btnColor"
    btnShadowDR = "t1-keyShadow";
    btnShadowEqual = "t1-toggleBtnShadow";
    btnShadowAll = "t1-btnShadow";

  }

  console.log('shadows, ' + btnShadowDR, btnShadowEqual, btnShadowAll);

  let createClassName = '';
  switch(symbol) {
    case 'DEL':
    case 'RESET':
      createClassName = `btn calculator__${symbol}-btn ${btnShadowDR}`;
      break;
    case '=' :
      createClassName = `btn calculator__equal-btn ${btnShadowEqual}`;
      break;
      default:
      createClassName = `calculator__btn-${symbol} ${btnShadowAll}`;   
   }
  
  const combinedClassName = `${createClassName} ${btnColor} ${btnText}`;
  
  return (
    <button className = {combinedClassName} type="button" value={symbol} onClick = {(e) => updateData(symbol)}>
      {symbol}
    </button>
  );
}
