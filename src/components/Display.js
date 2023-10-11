import React, {useState} from 'react';
import Keypad from './Keypad';

export default function Display() {
    let [displayedNumber, setDisplayedNumber] = useState([]);
    const [screen, setScreen] = useState({
        firstValue: '',
        operator: '',
        secondValue: '',
        equal: false,
        firstOperation: true,
        result: 0
    })

    console.log('is the prop passed', screen);
    function symbolDataType(symbol) {
        //check if value button is between 0 and 9
        const regex = /^[0-9.]$/;
        return regex.test(symbol);
    }

    function updateParentState(newState) {
        const numbers = /^[0-9.]$/;
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

        if(newState === '=') {
            setScreen((prevState) => {
                return {
                    ...prevState,
                    equal: !prevState.equal 
                }
            })
        }

    }

    


    function performCalculation(num1, operator, num2) {
        
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        switch(operator) {
            case '+' :
                return n1 + n2;
            case '-':
                return n1 - n2;
            case '*':
                return n1 * n2;
            case '/':
                return n1 / n2;
            default:
                return 'operator not recognized'
        }
    };


    function equal() {
        let result = 0;
    
        if (screen.secondValue !== '' && screen.equal === true && screen.firstOperation === true) {
            result = performCalculation(screen.firstValue, screen.operator, screen.secondValue);
            setScreen((prevState) => {
                return {
                    firstValue: result,
                    operator: '',
                    secondValue: '',
                    equal: false,
                    result: result,
                    firstOperation: false,
                     
                }
            })
        } 
        else if (screen.secondValue !=='' & screen.firstOperation === false ){
            result = performCalculation(screen.firstValue, screen.operator, screen.secondValue);
            setScreen((prevState) => {
                return {
                    firstValue: result,
                    operator: '',
                    secondValue: '',
                    equal: false,
                    result: result,
                    firstOperation: false
                }
            })
        }
        return result;
    }
    
    const calculationResult = equal();
   
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
        <div>
            <h2>{screen.result}</h2>
        </div>
        <br></br><br></br>
    </div>
    )
}