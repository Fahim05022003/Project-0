import { useState } from "react";

export default function Count({ step }) {
  const [count, setCount] = useState(0);

  function handleCount(change) {
    setCount((count) => Math.max(0, count + change));
  }

  function handleDirectInput(e) {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setCount(value);
    }
  }

  return (
    <div
      className="counter"
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === "ArrowDown" && count > 0) {
          handleCount(-step);
        }
        if (e.key === "ArrowUp") {
          handleCount(step);
        }
      }}
    >
      <button onClick={() => handleCount(-step)} disabled={count <= 0}>
        -
      </button>
      <label>Count: </label>
      <input type="text" value={count} onChange={handleDirectInput} />
      <button onClick={() => handleCount(step)}>+</button>
    </div>
  );
}
