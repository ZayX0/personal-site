import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-div">
      <h2 id="useState-counter">Basic useState Counter</h2>
      <p>The current count is {count}</p>
      <div className="button-container">
        <button
          id="increase-counter-button"
          onClick={() => setCount(count + 1)}
        >
          Click to increment
        </button>
        <button
          id="decrease-counter-button"
          onClick={() => setCount(count - 1)}
        >
          Click to decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
