import { useState } from "react";
export default function Counterdemo() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleCount(change) {
    setCount((count) => count + change);
  }
  function handleStep(change) {
    setStep((step) => step + change);
  }

  return (
    <div>
      <div
        className="counter"
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" && step > 0) handleStep(-1);
          if (e.key === "ArrowUp") handleStep(1);
        }}
      >
        <button onClick={() => handleStep(-1)} disabled={step <= 0}>
          -
        </button>
        <span>Step: {step}</span>
        <button onClick={() => handleStep(1)}>+</button>
      </div>
      <div
        className="counter"
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" && count > 0) handleCount(-step);
          if (e.key === "ArrowUp") handleCount(step);
        }}
      >
        <button onClick={() => handleCount(-step)} disabled={count - step < 0}>
          -
        </button>
        <span>Count: {count}</span>
        <button onClick={() => handleCount(step)}>+</button>
      </div>
    </div>
  );
}
