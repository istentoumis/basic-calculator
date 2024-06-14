import { useState } from 'react';
import './App.css';

function App() {

  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    switch(value){
      case 'CE':
        setDisplay('0');
        break;
      case 'C':
        setDisplay('0');
        setResult('0');
        break;
      case '%':
        setDisplay((prev) => {
        const match = prev.match(/(\d+(\.\d+)?)([+\-*/])(\d+(\.\d+)?)?$/);
        if (match) {
          const number = parseFloat(match[1]);
          const operator = match[3];
          const percentageValue = number * parseFloat(match[4] || '0') / 100;
          return prev.replace(/(\d+(\.\d+)?)([+\-*/])(\d+(\.\d+)?)?$/, `${number}${operator}${percentageValue}`);
        }
        return prev;
      });
        break;     
      case '/':
        setDisplay((prev) => prev + '/');
        break;
      case '*':
        setDisplay((prev) => prev + '*');
        break;
      case '-':
        setDisplay((prev) => prev + '-');
        break; 
      case '+':
        setDisplay((prev) => prev + '+');
        break;
      case '.':
        setDisplay((prev) => {
          // Prevent multiple decimal points in a number
          const lastNumber = prev.split(/[\/*\-+]/).pop();
          if (lastNumber.includes('.')) {
            return prev;
          }
          return prev + '.';
        });
        break;  
      case '=':
        try {
          // Replace leading zeros in each number
          const cleanedDisplay = display.replace(/\b0+(\d+)/g, '$1');
          setResult(eval(cleanedDisplay).toString());
          setDisplay('0');
        } catch {
          setResult('Error');
        }
        break;
      case 'del':
        setDisplay((prev) => prev.length > 1 ? prev.slice(0, -1) : '0');
        break;
      default: 
        setDisplay((prev) => prev === '0' ? value : prev + value);
    }
  }


  return (
    <div className="calculator">
      <h2>Basic Calculator</h2>
      <div className="calculator-frame">
        <input type="text" value = {display} disabled />
        <input type="text" value = {result} disabled />
        <div className="buttons">
          <button onClick ={ () => handleClick("CE")}>CE</button>
          <button onClick ={ () => handleClick("C")}>C</button>
          <button onClick ={ () => handleClick("%")}>%</button>
          <button onClick ={ () => handleClick("/")}>/</button>
          <button onClick ={ () => handleClick("7")}>7</button>
          <button onClick ={ () => handleClick("8")}>8</button>
          <button onClick ={ () => handleClick("9")}>9</button>
          <button onClick ={ () => handleClick("*")}>*</button>
          <button onClick ={ () => handleClick("4")}>4</button>
          <button onClick ={ () => handleClick("5")}>5</button>
          <button onClick ={ () => handleClick("6")}>6</button>
          <button onClick ={ () => handleClick("-")}>-</button>
          <button onClick ={ () => handleClick("1")}>1</button>
          <button onClick ={ () => handleClick("2")}>2</button>
          <button onClick ={ () => handleClick("3")}>3</button>
          <button onClick ={ () => handleClick("+")}>+</button>
          <button onClick ={ () => handleClick("del")}>del</button>
          <button onClick ={ () => handleClick("0")}>0</button>
          <button onClick ={ () => handleClick(".")}>.</button>
          <button onClick ={ () => handleClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
