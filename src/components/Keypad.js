import react from 'react';
import Button from './Button';

export default function Keypad({screen, gatherDigits, updateData, reset}) {
    
   //Generate buttons
   const buttonSymbols = 
       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'DEL', 'RESET', '=', '+', '-', '*', '/', '.'];
   
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
       <div>
        <div>
        <button>DEL</button>
        <br></br><br></br>
       </div>

       {displayButtons}
       </div>
       
     );
   }
   

