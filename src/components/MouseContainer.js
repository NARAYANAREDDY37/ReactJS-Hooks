import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {

  let [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toogle Display</button>
      {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer
