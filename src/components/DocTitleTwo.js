import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

//here we don't need useEffect

function DocTitleTw() {

  let [count, setCount] = useState(0)

  /* useEffect(() => {
    document.title = `Clicked ${count} times`
  }, [count]) */
  useDocumentTitle(count)

  return (
    <div>
      <button onClick = {() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTw
