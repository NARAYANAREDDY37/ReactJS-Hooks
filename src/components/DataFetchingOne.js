import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {

  //creating a state variables
  let[loading, setLoading] = useState(true)
  let[error, setError] = useState('')
  let[post, setPost] = useState({})

  //making API request
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    .then(response => {
      setLoading(false)
      setError('')
      setPost(response.data)
    })
    .catch(error => {
      setLoading(false)
      setError('Some thing went Wrong!!')
      setPost({})
    })
  }, [])

  return (
    <div>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  )
}

export default DataFetchingOne
