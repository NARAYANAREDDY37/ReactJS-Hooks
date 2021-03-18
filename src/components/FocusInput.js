import React, {useEffect, useRef} from 'react'

function FocusInput() {

  //creating input ref
  let inputRef = useRef(null)

  useEffect(() => {
    //creating a method to focus input element
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <input ref= {inputRef} type="text"/>
    </div>
  )
}

export default FocusInput
