import { useState, useEffect } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
// import { Posts } from '../../dummyData'
import './feed.css'
import axios from 'axios'

export default function Feed({ username }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get('/posts/profile/' + username)
        : await axios.get('posts/timeline/61951e25275a73bfed029041')
      setPosts(res.data)
    }
    fetchPosts()
  }, [username])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map(p => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}
