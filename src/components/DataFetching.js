import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

  let[post, setPost] = useState({})
  let[id, setId] = useState(1)
  let[idFromButtonClick, setIdFromButtonClick] = useState(1)

  let handleClick = () => {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(res => {
      console.log(res)
      setPost(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [idFromButtonClick]) //our dependency is id here, so we specify it in empty array
  return (
    <div>
      <input type="text" value={id} onChange={ e => setId(e.target.value)}/>
      <button type= "button" onClick= {handleClick}>Fetch post</button>
      <div>{post.title}</div>
    {/*  <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default DataFetching
