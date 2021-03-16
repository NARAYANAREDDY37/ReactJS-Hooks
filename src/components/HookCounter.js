import React, { useState } from "react";

function HookCounter() {
  // setCount = method i,e capable of updating the state variable i,e count value

  //state variable = useState (initialized to zero)

  //array destructuring (ES6)
  let [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
