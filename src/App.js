import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      switch (operator) {
        case "+":
          setResult((n1 + n2).toString());
          break;
        case "-":
          setResult((n1 - n2).toString());
          break;
        default:
          setResult("Error");
      }
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <h1>Simple Calculator Test</h1>
      <div>
        <label htmlFor="num1Input">Number 1:</label>
        <input
          type="text"
          id="num1Input"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <label htmlFor="operatorSelect">Operator:</label>
        <select
          id="operatorSelect"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <label htmlFor="num2Input">Number 2:</label>
        <input
          type="text"
          id="num2Input"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
