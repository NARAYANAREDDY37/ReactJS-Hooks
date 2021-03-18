import React, {useState, useMemo} from 'react'

function Counter() {

  let [counterOne, setCounterOne] = useState(0)
  let [counterTwo, setCounterTwo] = useState(0)

  let incrementCounterOne = () => {
    setCounterOne(counterOne + 1)
  }

  let incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  let isEven = useMemo(() => {
    let i = 0
    while(i< 2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <div>
        <button onClick = {incrementCounterOne}>Counter one - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>

      <div>
        <button onClick = {incrementCounterTwo}>Counter Two - {counterTwo}</button>
      </div>
    </div>
  )
}

export default Counter
