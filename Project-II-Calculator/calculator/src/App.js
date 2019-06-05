import React from 'react';
import './App.css';
import Actionbutton from './components/ButtonComponents/ActionButton';
import Number from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay />
      <div className="clear">
        <Actionbutton className="large" text="Clear" />
        <Number buttonStyle="red" text="/" />
      </div>
      <div className="numbers">
        <Number buttonStyle="number" text="7" />
        <Number buttonStyle="number" text="8" />
        <Number buttonStyle="number" text="9" />
        <Number buttonStyle="red" text="X" />
      </div>
      <div className="numbers">
        <Number buttonStyle="number" text="4" />
        <Number buttonStyle="number" text="5" />
        <Number buttonStyle="number" text="6" />
        <Number buttonStyle="red" text="-" />
      </div>
      <div className="numbers">
        <Number buttonStyle="number" text="1" />
        <Number buttonStyle="number" text="2" />
        <Number buttonStyle="number" text="3" />
        <Number buttonStyle="red" text="+" />
      </div>
      <div className="clear">
        <Actionbutton className="large" text="0" />
        <Number buttonStyle="red" text="=" />
      </div>
    </div>
  );
}

export default App;