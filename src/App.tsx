import { useState } from "react";
import "./assets/Forms.css";

import { calculateFizzBuzz } from "./common/feature";

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setInputNumber(value);

    if (isNaN(value) || value.trim() === "") {
      setError("Please enter a valid number.");
      setResult("");
    } else {
      setError("");
      setResult(calculateFizzBuzz(Number(value)));
    }
  };

  return (
    <>
      <h1>FizzBuzz React App</h1>
      <div className="form-container">
        <div className="form">
          <label htmlFor="numberInput">Enter a number: </label>
          <input
            id="numberInput"
            data-testid="number-input"
            value={inputNumber}
            onChange={handleInputChange}
          />

          {error && <p className="error">{error}</p>}

          {result.length > 0 && <p className="output">Result: {result}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
