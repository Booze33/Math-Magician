import React, { useState } from 'react';
import Display from './display';
import calculate from './logic/calculate';
import './Calculator.css';

function Calculator() {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setCalculator(calculate(calculator, e.target.innerText));
  };

  const displayValue = () => {
    if (calculator.next) {
      return Number(calculator.next).toLocaleString();
    }
    if (calculator.total) {
      return Number(calculator.total).toLocaleString();
    }

    return '0';
  };

  return (
    <div className="calculator">
      <Display value={displayValue()} />
      <div className="frs-div div grid">
        <button className="number number-AC" type="button" onClick={handleClick}>AC</button>
        <button className="number number-+-" type="button" onClick={handleClick}>+/-</button>
        <button className="number number-%" type="button" onClick={handleClick}>%</button>
        <button className="number number-// color" type="button" onClick={handleClick}>÷</button>
      </div>
      <div className="sec-div div grid">
        <button className="number number-7" type="button" onClick={handleClick}>7</button>
        <button className="number number-8" type="button" onClick={handleClick}>8</button>
        <button className="number number-9" type="button" onClick={handleClick}>9</button>
        <button className="number number-x color" type="button" onClick={handleClick}>x</button>
      </div>
      <div className="trd-div div grid">
        <button className="number number-4" type="button" onClick={handleClick}>4</button>
        <button className="number number-5" type="button" onClick={handleClick}>5</button>
        <button className="number number-6" type="button" onClick={handleClick}>6</button>
        <button className="number number-- color" type="button" onClick={handleClick}>-</button>
      </div>
      <div className="frt-div div grid">
        <button className="number number-1" type="button" onClick={handleClick}>1</button>
        <button className="number number-2" type="button" onClick={handleClick}>2</button>
        <button className="number number-3" type="button" onClick={handleClick}>3</button>
        <button className="number number-+ color" type="button" onClick={handleClick}>+</button>
      </div>
      <div className="fth-div div grid">
        <button className="number number-0" type="button" onClick={handleClick}>0</button>
        <button className="number number---" type="button" onClick={handleClick}>.</button>
        <button className="number number-num color" type="button" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
