import React, { useState, useEffect} from "react";

export default function Title({updateSelectedTheme, toggleTheme}) {
  const [selectedTheme, setSelectedTheme] = useState("one");

  const handleRadioChange = (event) => {
    setSelectedTheme(event.target.id);
    updateSelectedTheme(event.target.id);
  };

  let title = "";
  let themeText = "";
  

  switch(toggleTheme) {
    case 'two':
    title = "t2-btnText";
    themeText = "calculator__toggle-theme2"
    
    break;
    case 'three':
    title = "t3-btnText";
    themeText = "calculator__toggle-theme3"
    
    break;
    default:
    title = "whiteText";
    themeText = "calculator__toggle-theme1";
    

  }

  return (
    <div className="calculator__title-wrapper">
      <div className="calculator__title-container">
        <h1 className = {title}>calc</h1>
      </div>
      <div className="calculator__toggle-theme-container">
        <span className={`calculator__toggle-theme-title ${themeText}`}>THEME</span>
        <div className = "calculator__toggle-theme">
          <input
            className={`calculator__toggle-switch ${toggleTheme === "one" ? "visible" : "hidden"}`}
            type="radio"
            name="toggle"
            id="one"
            onChange={handleRadioChange}
          />
          <label for="one" className="calculator__toggle-switch-label"></label>
          <input
            className={`calculator__toggle-switch ${toggleTheme === "two" ? "visible" : "hidden"}`}
            type="radio"
            name="toggle"
            id="two"
            onChange={handleRadioChange}
          />
          <label for="two" className="calculator__toggle-switch-label"></label>
          <input
            className={`calculator__toggle-switch ${toggleTheme === "three" ? "visible" : "hidden"}`}
            type="radio"
            name="toggle"
            id="three"
            onChange={handleRadioChange}
          />
          <label for="three" className="calculator__toggle-switch-label"></label>
        </div>
      </div>
    </div>
  );
}
