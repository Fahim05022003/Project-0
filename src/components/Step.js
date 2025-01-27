export default function Stepp({ step, onStepChange }) {
  return (
    <div
      className="counter"
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") onStepChange(1);
        if (e.key === "ArrowDown" && step > 0) onStepChange(-1);
      }}
    >
      <button onClick={() => onStepChange(-1)} disabled={step <= 0}>
        -
      </button>
      <span>Step: {step}</span>
      <button onClick={() => onStepChange(1)}>+</button>
    </div>
  );
}
