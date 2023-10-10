import React, {useState} from 'react';
import Keypad from './Keypad';

export default function Display() {
    let [displayedNumber, setDisplayedNumber] = useState([]);
    const [screen, setScreen] = useState({
        firstValue: '',
        operator: '',
        secondValue: '',
        equal: false
    })

    console.log(screen);


    function symbolDataType(symbol) {
        //check if value button is between 0 and 9
        const regex = /^[0-9.]$/;
        return regex.test(symbol);
    }

    function updateParentState(newState) {
        const numbers = /^[0-9]$/;
        const operators = /^[+\-*/]$/;

        if(numbers.test(newState) && screen.operator === '') {
            setScreen((prevState) => {
                return {
                    ...prevState,
                    firstValue: prevState.firstValue + newState
                }
            })
        }
       
        if(operators.test(newState)){
            setScreen((prevState) => {
                return {
                    ...prevState,
                    operator: newState
                }
            });
        }

        if(numbers.test(newState) && screen.operator !== '') {
            setScreen((prevState) => {
                return {
                    ...prevState,
                    secondValue: prevState.secondValue + newState
                }
            })
        }

        if(screen.operator === '=') {
            console.log('clicked');
            setScreen((prevState) => {
                return {
                    ...prevState,
                    equal: !prevState.equal 
                }
            })
        }

    }


    function performCalculation(num1, operator, num2) {
        
        switch(operator) {
            case '+' :
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 'operator not recognized'
        }
    }


    function updateState(newState) {
        if ((symbolDataType(newState) === true)) {
            setDisplayedNumber((prevValue) => [...prevValue, newState]);
        } 
    }

    function deleteDigit() {
        // remove the last digit from the array
        const newArray = displayedNumber.slice(0, -1);
        setDisplayedNumber(() =>  displayedNumber.length === 0? displayedNumber = 0 : newArray);
        
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
        updateParentState = {updateParentState} 
        calculate = {performCalculation}
        objectScreen = {screen}
        />
        <br></br><br></br>
    </div>
    )
}