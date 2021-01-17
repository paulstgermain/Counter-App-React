import React, { useState } from 'react';
import './App.css';



function Bulb() {
  const [isBulbOn, setIsBulbOn] = useState(false);

  setTimeout(() => {
    setIsBulbOn(!isBulbOn)
  }, 1000)

  return <div>The lightbulb is {isBulbOn ? 'on!' : 'off...'}</div>

  // if(isBulbOn) {
  //   return <div>The lightbulb is on!</div>
  // }
  // return <div>The lightbulb is off...</div>
}

export default Bulb;
