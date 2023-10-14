import react from 'react';
import Button from './Button';

export default function Keypad({screen, gatherDigits, updateData, reset}) {
    
   //Generate buttons
   const buttonSymbols = 
       [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', '*', 'RESET', '=' ];
   
       const displayButtons = buttonSymbols.map((button) => {
           return (
             <Button
              symbol = {button}
              screen = {screen}
              gatherDigits = {gatherDigits}
              updateData = {updateData}
             />
           )    
       });
   
   
     return (
        <div className = "calculator__keypad-wrapper">
        {displayButtons}
        </div>
     );
   }
   

