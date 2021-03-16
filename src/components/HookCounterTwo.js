import React, { useState } from "react";

function HookCounterTwo() {
  let initialCount = 0;
  let [count, setCount] = useState(initialCount);

  let incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1); //using previous state is correct way of writing code
    }
  };
  return (
    <div>
      <div>
        <h2>Count: {count}</h2>
      </div>
      <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decrement
        </button>
        <button onClick={incrementFive}>Increment 5</button>
      </div>
    </div>
  );
}

export default HookCounterTwo;
