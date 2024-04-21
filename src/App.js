import './App.css';

function App() {
  return (
    <div className="calculator">
      <h2>Basic Calculator</h2>
      <div className="calculator-frame">
        <input type="text" disabled />
        <input type="text" disabled />
        <div className="buttons">
          <button onClick>%</button>
          <button onClick>CE</button>
          <button onClick>C</button>
          <button onClick>del</button>
          <button onClick>7</button>
          <button onClick>8</button>
          <button onClick>9</button>
          <button onClick>/</button>
          <button onClick>4</button>
          <button onClick>5</button>
          <button onClick>6</button>
          <button onClick>*</button>
          <button onClick>1</button>
          <button onClick>2</button>
          <button onClick>3</button>
          <button onClick>+</button>
          <button onClick>x<sup>2</sup></button>
          <button onClick>0</button>
          <button onClick>.</button>
          <button onClick>=</button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
