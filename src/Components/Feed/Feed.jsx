import React from 'react'
import Share from '../../Components/Share/Share'
import Post from '../../Components/Post/Post'
import './Feed.css'

function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed