import React, {useState, useEffect} from 'react'

//same is implemented with useEffect in functional component
//compare ClassMouse vs HookMouse

function HookMouse() {

  //creating state variables for X and Y initialized to zero 
  let [x, setX] = useState(0)
  let [y, setY] = useState(0)

  //now we should addEventListener for mouse event, and this is where we use effect Hook

  //logMousePosition = Event Handler
  let logMousePosition = e => {
    console.log("Mouse event")
    setX(e.clientX)
    setY(e.clientY)
  }


  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    //cleaning up the component (or) removing eventListener
    return () => {
      console.log('component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }

  }, []) //we specify empty array not to call useEffect on every re-render of component, the same thing is done in class component using componentDidMount

  //so we mimiced the componentDidMount in class component using empty array

  return (
    <div>
      Hooks X- {x} and Y- {y}
    </div>
  )
}

export default HookMouse
