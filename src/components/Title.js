import React from 'react';


export default function Title() {
    return (
        <div>
          <div className = "calculator__title-wrapper">
            <h1>calc</h1>
          </div>
          <div>
            <input class="calculator__toggle-switch" type="radio" name="toggle" id="one"/>
            <input class="calculator__toggle-switch" type="radio" name="toggle" id="two"/>
            <input class="calculator__toggle-switch" type="radio" name="toggle" id="three"/>
          </div>
        </div>
        

    )
}