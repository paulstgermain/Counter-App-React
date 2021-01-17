import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Bulb from './App';

function App() {

  let [counter, increment] = useState(0);

  return (
    <div className="container">
      <section class="button">
        <button onClick={() => increment(counter++)}>CLICK ME</button>
      </section>
      <section class="counter">
        <span>{ counter }</span>
      </section>
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)