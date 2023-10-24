import React, { useState } from "react";
import Keypad from "./Keypad";
import Screen from "./Screen";
import Title from "./Title";

export default function Display() {
  const [screen, setScreen] = useState({
    firstValue: [],
    operator: "",
    secondValue: [],
    getResult: false,
    show: [],
    selectedTheme: "one",
  });

  function updateSelectedTheme(id) {
    setScreen((prevValue) => ({
      ...prevValue,
      selectedTheme: id,
    }));
  }

  function checkDigit(digitRegex, digit) {
    return digitRegex.test(digit);
  }

  const updateData = (newData) => {
    const numberCheck = /[0-9.]/;
    const operators = /[+\-*/]/;

    let toDisplay = newData;

    if (checkDigit(numberCheck, newData)) {
      // if no operator is set, update firstValue
      if (screen.operator === "") {
        setScreen((prevValue) => ({
          ...prevValue,
          show: [...prevValue.show, newData],
          firstValue: [...prevValue.firstValue, newData],
        }));
      } else {
        // if operator is set, update secondValue
        setScreen((prevValue) => ({
          ...prevValue,
          show: [...prevValue.show, newData],
          secondValue: [...prevValue.secondValue, newData],
        }));
      }
    } else if (
      checkDigit(operators, newData) &&
      screen.firstValue.length > 0 &&
      screen.secondValue.length < 1
    ) {
      setScreen((prevValue) => ({
        ...prevValue,
        show: [...prevValue.show, newData],
        operator: newData,
      }));
    } else if (
      newData === "=" &&
      screen.firstValue.length > 0 &&
      screen.secondValue.length > 0
    ) {
      const result = calculate(screen.firstValue, screen.secondValue);
      console.log("checking the result", result);
      setScreen((prevValue) => ({
        firstValue: [result],
        operator: "",
        secondValue: [],
        show: [result],
        getResult: result,
      }));
    } else if (
      checkDigit(operators, newData) &&
      screen.secondValue.length > 0
    ) {
      const result = calculate(screen.firstValue, screen.secondValue);
      setScreen((prevValue) => ({
        firstValue: [result],
        operator: newData,
        show: [result, newData],
        secondValue: [],
        getResult: result,
      }));
    } else if (newData === "RESET") {
      reset();
    } else if (newData === "DEL") {
      console.log("DEEEEEL");
      delBtn();
    } else {
      console.log("ELSE");
    }

    return toDisplay;
  };

  const calculate = (a, b) => {
    const num1 = parseInt(a.join(""), 10);
    const num2 = parseInt(b.join(""), 10);
    let result;

    switch (screen.operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        // Handle the case where the operator is not recognized
        console.log("Invalid operator");
        break;
    }

    return result;
  };

  console.log("is the prop passed", screen);

  function reset() {
    setScreen(prevValue =>({
      ...prevValue,
      firstValue: [],
      operator: "",
      secondValue: [],
      getResult: false,
      show: [],
    }));
  }

  function delBtn() {
    setScreen((prevValue) => {
      let updatedScreen = { ...prevValue };

      if (updatedScreen.secondValue.length > 0) {
        // If there are digits in the secondValue array, remove the last digit.
        updatedScreen.secondValue.pop();
      } else if (
        updatedScreen.operator !== "" &&
        updatedScreen.firstValue.length > 0
      ) {
        // If an operator is set and there are digits in the firstValue array, remove the operator.
        updatedScreen.operator = "";
      } else if (updatedScreen.firstValue.length > 0) {
        // If no operator is set and there are digits in the firstValue array, remove the last digit.
        updatedScreen.firstValue.pop();
      }

      // Update the show array to match the updated state.
      if (updatedScreen.show.length > 0) {
        updatedScreen.show = updatedScreen.show.slice(0, -1);
      }

      return updatedScreen;
    });
  }

  let backroundColor = '';
  switch(screen.selectedTheme) {
    case 'two':
    backroundColor = 't2-mainBackground';
    break;
    case 'three':
    backroundColor = 't3-mainBackground';
    break;
    default:
    backroundColor = 't1-mainBackground';
  }

  return (
    <div className={`calculator ${backroundColor}`}>
      <Title updateSelectedTheme={updateSelectedTheme} toggleTheme = {screen.selectedTheme}/>
      <Screen displayScreen={screen.show} toggleTheme = {screen.selectedTheme}/>
      <Keypad screen={screen} updateData={updateData} reset={reset} toggleTheme = {screen.selectedTheme}/>
      <div></div>
      <br></br>
      <br></br>
    </div>
  );
}
