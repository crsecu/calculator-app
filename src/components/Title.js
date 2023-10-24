import React, { useState, useEffect} from "react";

export default function Title({updateSelectedTheme, toggleTheme}) {
  const [selectedTheme, setSelectedTheme] = useState("one");

  const handleRadioChange = (event) => {
    setSelectedTheme(event.target.id);
    updateSelectedTheme(event.target.id);
  };

  let title = ""

  switch(toggleTheme) {
    case 'two':
    title = "t2-btnText"
    break;
    case 'three':
    title = "t3-btnText"
    break;
    default:
    title = "whiteText"

  }

  return (
    <div className="calculator__title-wrapper">
      <div className="calculator__title-container">
        <h1 className = {title}>calc</h1>
      </div>
      <div className="calculator__toggle-theme">
        <input
          className="calculator__toggle-switch"
          type="radio"
          name="toggle"
          id="one"
          onChange={handleRadioChange}
        />
        <input
          className="calculator__toggle-switch"
          type="radio"
          name="toggle"
          id="two"
          onChange={handleRadioChange}
        />
        <input
          className="calculator__toggle-switch"
          type="radio"
          name="toggle"
          id="three"
          onChange={handleRadioChange}
        />
      </div>
    </div>
  );
}
