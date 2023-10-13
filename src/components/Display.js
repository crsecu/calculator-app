import React, {useState} from 'react';
import Keypad from './Keypad';

export default function Display() {
   
    const [screen, setScreen] = useState({
        firstValue: [],
        operator: '',
        secondValue: [],
        getResult: false,
        show:[]
    })


    function checkDigit(digitRegex, digit) {
        return digitRegex.test(digit);
    }

    const updateData = (newData) => {
        const numberCheck = /[0-9]/;
        const operators = /[+\-*/]/;
        let number = 0;
        let operator = '';
        let secondValue = 0;
        let equal = false;
        let dot = false;

       

        let toDisplay = newData;
        //console.log('WHAT IS HERE', toDisplay);
        if(checkDigit(numberCheck, newData)){
            number = newData;
            // if no operator is set, update firstValue
            if(screen.operator === '') {
                setScreen(prevValue => ({
                    ...prevValue,
                    show: [newData],
                    firstValue: [...prevValue.firstValue, newData]
                }))
            } else {
                // if operator is set, update secondValue
                setScreen(prevValue => ({
                    ...prevValue,
                    show: [newData],
                    secondValue: [...prevValue.secondValue, newData]
                }))
            }
        } else if (checkDigit(operators, newData) && screen.secondValue.length < 1) {
            operator = newData;
            setScreen(prevValue => ({
                ...prevValue,
                show: [newData],
                operator: newData
            }))
        } else if (newData === "=") {
            const result = calculate(screen.firstValue, screen.secondValue)
            console.log('checking the result', result);
            setScreen(prevValue => ({
                firstValue: [result],
                operator: '',
                secondValue: [],
                show: [newData],
                getResult: result
            }))
        }else if(checkDigit(operators, newData) && screen.secondValue.length > 0){
            console.log('SUPREME TEST');
            const result2 = calculate(screen.firstValue, screen.secondValue);
            setScreen(prevValue => ({
                firstValue: [result2],
                operator: newData,
                show: [newData],
                secondValue: [],
                getResult: result2
            }))
        } else {
            console.log('ELSE');
            dot = true;
        }

       

        return toDisplay;
    };
     
   

    const calculate = (a, b) => {
        const num1 = parseInt(a.join(''), 10);
        const num2 = parseInt(b.join(''), 10);
        let result;
        
        switch (screen.operator) {
            case '+':
              result = num1 + num2;
              break;
            case '-':
              result = num1 - num2;
              break;
            case '*':
              result= num1 * num2;
              break;
            case '/':
              result = num1 / num2;
              break;
            default:
              // Handle the case where the operator is not recognized
              console.log('Invalid operator');
              break;
          }

          return result;

    }

    


    //console.log('check', calculate());
    console.log('is the prop passed', screen);
    return (
     <div className="App">
        <Keypad 
        screen = {screen}
        updateData = {updateData}
        />
        <div>       
            <h5>Check here {screen.show}</h5>
        </div>
        <div>
           
        </div>
        <br></br><br></br>
    </div>
    )
}