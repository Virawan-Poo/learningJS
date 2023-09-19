import { useState, useEffect } from 'react'
import axios from 'axios'

const Posts = () => {
  const [postList, setPostList] = useState([])

  const getPostList = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPostList(data)
  }

  useEffect(() => {
    getPostList()
  }, [])

  return (
    <>
      <h1>Posts Page</h1>

      <label>
        Filter Post By :
        <select>
          <option value="">User</option>
        </select>
      </label>

      {postList.length &&
        postList.map((data) => (
          <div key={data.id}>
            <ul>
              <li>
                <h3>{data.title}</h3>
              </li>
              <li>
                <p>{data.body}</p>
              </li>
              <li>
                <p>Post By : User{data.userId}</p>
              </li>
            </ul>
            <hr />
          </div>
        ))}
    </>
  )
}

export default Posts
