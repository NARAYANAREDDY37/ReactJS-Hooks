import React, {useState, useEffect, useRef} from 'react'

//same is implemented as ClassTimer.js
function HookTimer() {

  let [timer, setTimer] = useState(0)
  let intervalRef = useRef()

  //replicating the componentDidMount & componentWillUnmount
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)

    //clearning the timer
    return () => {
      clearInterval(intervalRef.current)
    }
  })


  return (
    <div>
      Hook timer - {timer}
      <div>
        <button onClick = {() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
      </div>
    </div>
  )
}

export default HookTimer
