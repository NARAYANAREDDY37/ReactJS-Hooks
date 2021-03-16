import React, { useState, useEffect } from "react";

function HookCounter() {

  let [count, setCount] = useState(0);
  let [name, setName] = useState('');

  //compare ClassCounterOne with this, Here we used effect and reduced the code
  useEffect(() => {
    console.log('Use Effect- updating the document title')
    document.title = `you clicked ${count} times`
  }, [count]) 
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Count {count} times</button>
    </div>
  );
}

export default HookCounter;