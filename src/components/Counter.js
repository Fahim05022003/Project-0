export default function Counter({ cylinder, handleCount }) {
  return (
    <div className="counter">
      <button
        onClick={() => handleCount(cylinder.id, cylinder.count - 1)}
        disabled={cylinder.count <= 0}
      >
        -
      </button>
      <span>{cylinder.count}</span>
      <button onClick={() => handleCount(cylinder.id, cylinder.count + 1)}>
        +
      </button>
    </div>
  );
}
