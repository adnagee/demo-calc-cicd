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
      <h1>Simple Calculator</h1>
      <div>
        <input type="text" value={num1} onChange={handleNum1Change} />
        <select value={operator} onChange={handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <input type="text" value={num2} onChange={handleNum2Change} />
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
