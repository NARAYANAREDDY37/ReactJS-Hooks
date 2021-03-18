import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentS() {
  let countContext = useContext(CountContext);
  return (
    <div>
      Component S - {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentS;
