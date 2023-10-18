import React from 'react';


export default function Title() {
    return (
        <div className ="calculator__title-wrapper" >
          <div className = "calculator__title-container">
            <h1>calc</h1>
          </div>
          <div className = "calculator__toggle-theme">
            <input class="calculator__toggle-switch" type="radio" name="toggle" id="one"/>
            <input class="calculator__toggle-switch" type="radio" name="toggle" id="two"/>
            <input class="calculator__toggle-switch" type="radio" name="toggle" id="three"/>
          </div>
        </div>
        

    )
}