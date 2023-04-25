import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="Display div">0</div>
      <div className="frs-div div grid">
        <button className="number number-AC" type="button">AC</button>
        <button className="number number-+-" type="button">+/-</button>
        <button className="number number-%" type="button">%</button>
        <button className="number number-// color" type="button">÷</button>
      </div>
      <div className="sec-div div grid">
        <button className="number number-7" type="button">7</button>
        <button className="number number-8" type="button">8</button>
        <button className="number number-9" type="button">9</button>
        <button className="number number-x color" type="button">x</button>
      </div>
      <div className="trd-div div grid">
        <button className="number number-4" type="button">4</button>
        <button className="number number-5" type="button">5</button>
        <button className="number number-6" type="button">6</button>
        <button className="number number-- color" type="button">-</button>
      </div>
      <div className="frt-div div grid">
        <button className="number number-1" type="button">1</button>
        <button className="number number-2" type="button">2</button>
        <button className="number number-3" type="button">3</button>
        <button className="number number-+ color" type="button">+</button>
      </div>
      <div className="fth-div div grid">
        <button className="number number-0" type="button">0</button>
        <button className="number number-." type="button">.</button>
        <button className="number number-= color" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
