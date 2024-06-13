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
        setResult('');
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
      case '=':
        try {
          setResult(eval(display).toString());
          setDisplay('0');
        } catch {
          setResult('Error');
        }
        break;
        case '00':
          setDisplay((prev) => {
            // Allow "00" only if it follows a non-zero number or is at the start
            if (prev === '0') {
              return prev; 
            } else if (prev === '') {
              return '00'; 
            } else {
              return prev + '00';
            }
          });
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
          <button onClick ={ () => handleClick(".")}>.</button>
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
          <button onClick ={ () => handleClick("00")}>00</button>  
          <button onClick ={ () => handleClick("0")}>0</button>
          <button className="button-equal" onClick ={ () => handleClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
