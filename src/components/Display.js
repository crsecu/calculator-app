import React, {useState} from 'react';
import Keypad from './Keypad';

export default function Display() {
    let [displayedNumber, setDisplayedNumber] = useState(1993324343);

    function deleteDigit() {
        //transform number to array 
        let  displayedNumberArray = Array.from(String(displayedNumber), Number);
        // remove the last digit from the array
        displayedNumberArray.pop();
         // join the array elements to create a new number
        const newDisplayedNumber = parseInt( displayedNumberArray.join(''));
          // Update the displayed number
        setDisplayedNumber(() =>  displayedNumberArray.length === 0? displayedNumber = 0 : newDisplayedNumber);
        
       }


       function operation(num1, num2, operator) {
            if(operator === 'add') {
                return num1 + num2;
            } else if(operator === 'substract') {
                return num1 - num2;
            }else if(operator === 'multiply') {
                return num1 * num2;
            }

            switch(operator) {
                case 'add' :
                    return num1 + num2;
                case 'substract':
                    return num1 - num2;
                case 'multiply':
                    return num1 * num2;
                case 'divide':
                    return num1 / num2;
                default:
                    return 'operator not recognized'
            }

       }

       console.log('result is', operation(5, 2, 'divide'));

    return (
     <div className="App">
        <h1>{displayedNumber}</h1>
        <Keypad 
        displayedNumber = {displayedNumber}
        deleteDigit = {deleteDigit}
        
        />
        <br></br><br></br>
    </div>
    )
}