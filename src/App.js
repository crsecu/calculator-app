
import React, { useState } from 'react';



export default function App() {
 let [displayedNumber, setDisplayedNumber] = useState(1993324343);
 
 function deleteDigit() {
  //transform number to array 
  let  displayedNumberArray = Array.from(String(displayedNumber), Number);
  // remove the last digit from the array
  displayedNumberArray.pop();
   // join the array elements to create a new number
  const newDisplayedNumber = parseInt( displayedNumberArray.join(''));
  console.log(displayedNumberArray);
    // Update the displayed number
  setDisplayedNumber(() =>  displayedNumberArray.length === 0? displayedNumber = 0 : newDisplayedNumber);
  
 }
console.log(displayedNumber);


  return (
    <div className="App">
     <h1>{displayedNumber}</h1>
     <button onClick={deleteDigit}>DEL</button>
    </div>
  );
}


