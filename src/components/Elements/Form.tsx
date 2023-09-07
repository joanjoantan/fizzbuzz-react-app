import { useState } from "react";
import "../../assets/Forms.css";

import { calculateFizzBuzz } from "../../common/feature";

function Form() {
  const [inputNumber, setInputNumber] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: { target: { value: string } }) => {
    const value: string = e.target.value;
    setInputNumber(value);

    if (isNaN(Number(value)) || value.trim() === "") {
      setError("Please enter a valid number.");
      setResult("");
    } else {
      setError("");
      setResult(calculateFizzBuzz(Number(value)));
    }
  };

  return (
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

        {result.length > 0 && <h3 className="output">Result: {result}</h3>}
      </div>
    </div>
  );
}

export default Form;
