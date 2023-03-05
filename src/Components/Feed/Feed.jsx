import React from 'react'
import Share from '../../Components/Share/Share'
import Post from '../../Components/Post/Post'
import './Feed.css'
import {Posts} from "../../dummyData"


function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.id} post={p}   />
        ))}
      </div>
    </div>
  )
}

export default Feed