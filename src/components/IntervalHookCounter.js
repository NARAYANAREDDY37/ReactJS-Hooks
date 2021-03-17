import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

  let [count, setCount] = useState(0)

  //replicating the tick counter

  let tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  //implementing useEffect to replicate componentDidMount
  useEffect(() => {
    let interval = setInterval(tick, 1000)

    //replicating componentWillUnmount to cleanup within useEffect function

    return () => {
      clearInterval(interval)
    }
  }, [])

  


  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default IntervalHookCounter
