import React, { useState, useEffect} from "react";

export default function Title({updateSelectedTheme, toggleTheme}) {
  const [selectedTheme, setSelectedTheme] = useState("one");

  const handleRadioChange = (event) => {
    setSelectedTheme(event.target.id);
    updateSelectedTheme(event.target.id);
  };

  let title = "";
  let themeText = "";
  let toggleSwitch = "";
  let toggleSwitchBackground = "";

  switch(toggleTheme) {
    case 'two':
    title = "t2-btnText";
    themeText = "calculator__toggle-theme2"
    toggleSwitchBackground = "calculator__toggle-theme t2-keypadBackground"
    break;
    case 'three':
    title = "t3-btnText";
    themeText = "calculator__toggle-theme3"
    toggleSwitchBackground = "calculator__toggle-theme t3-keypadBackground"
    break;
    default:
    title = "whiteText";
    themeText = "calculator__toggle-theme1";
    toggleSwitchBackground = "calculator__toggle-theme t1-keypadBackground"
    

  }

  return (
    <div className="calculator__title-wrapper">
      <div className="calculator__title-container">
        <h1 className = {title}>calc</h1>
      </div>
      <div className="calculator__toggle-theme-wrapper">
        <span className={`calculator__toggle-theme-title ${themeText}`}>THEME</span>
        <div className = {toggleSwitchBackground}>
          <div className = "calculator__toggle-container">
            <label for="one" className={`calculator__toggle-label ${themeText}`}>1</label>
            <input
              className={`calculator__toggle-switch ${toggleTheme === "one" ? "visible t1" : "hidden"}`}
              type="radio"
              name="toggle"
              id="one"
              onChange={handleRadioChange}
            />
          </div>
          <div className = "calculator__toggle-container">
            <label for="two" className={`calculator__toggle-label ${themeText}`}>2</label>
            <input
              className={`calculator__toggle-switch ${toggleTheme === "two" ? "visible t2" : "hidden"}`}
              type="radio"
              name="toggle"
              id="two"
              onChange={handleRadioChange}
            />
          </div>
          
          <div className = "calculator__toggle-container">
            <label for="three" className={`calculator__toggle-label ${themeText}`}>3</label>
            <input
              className={`calculator__toggle-switch ${toggleTheme === "three" ? "visible t3" : "hidden"}`}
              type="radio"
              name="toggle"
              id="three"
              onChange={handleRadioChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
