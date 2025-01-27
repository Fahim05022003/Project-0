import { useState } from "react";
export default function Counterdemo() {
  const [count, setCount] = useState(0);
  function handleCountMinus() {
    setCount((count) => count - 1);
  }

  function handleCountPlus() {
    setCount((count) => count + 1);
  }
  return (
    <div className="counter">
      <button onClick={handleCountMinus} disabled={count <= 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={handleCountPlus}>+</button>
    </div>
  );
}
