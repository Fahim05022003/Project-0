import { useState } from "react";

export default function Count({ step }) {
  const [count, setCount] = useState(0);

  function handleCount(change) {
    setCount((count) => Math.max(0, count + change));
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
      <span>count: {count}</span>
      <button onClick={() => handleCount(step)}>+</button>
    </div>
  );
}
