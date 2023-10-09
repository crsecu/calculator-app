
import React, { useState } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';


export default function App() {
 let [displayedNumber, setDisplayedNumber] = useState(1993324343);
 
  return (
    <div>
      <Display />
    </div>
    
  );
}


