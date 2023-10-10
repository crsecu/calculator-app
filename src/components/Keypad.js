import react from 'react';
import Button from './Button';

export default function Keypad({displayedNumber, deleteDigit, operation, updateParentState, performCalculation, objectScreen}) {
    
   //Generate buttons
   const buttonSymbols = 
       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'DEL', 'RESET', '=', '+', '-', '*', '/', '.'];
   
       const displayButtons = buttonSymbols.map((button) => {
           return (
             <Button
              symbol = {button}
              updateParentState = {updateParentState}
              calculate = {performCalculation}
              objectScreen = {objectScreen}
             />
           )    
       });
   
   
     return (
       <div>
        <div>
        <button onClick={deleteDigit}>DEL</button>
        <br></br><br></br>
       </div>

       {displayButtons}
       </div>
       
     );
   }
   

