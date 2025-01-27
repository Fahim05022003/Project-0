import { useState } from "react";
export default function Counterdemo() {
  const [count, setCount] = useState(0);

  function handleCount(change) {
    setCount((count) => count + change);
  }

  return (
    <div
      className="counter"
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === "ArrowDown" && count > 0) handleCount(-1);
        if (e.key === "ArrowUp") handleCount(1);
      }}
    >
      <button onClick={() => handleCount(-1)} disabled={count <= 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => handleCount(1)}>+</button>
    </div>
  );
}
