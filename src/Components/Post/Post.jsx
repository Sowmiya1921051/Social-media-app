import './Post.css'
import {MoreVert} from '@mui/icons-material'
import {Users} from "../../dummyData"

function Post({Post}) {
  const user=Users.filter(u =>u.id===1)
  console.log(user[0].username)

  return (
    <div className='post'>
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className='postProfileImg' 
              src="./assets/Persons/1.jpg" alt="" />
              <span className="postUsername">Sowmeya</span>
              <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">Hey! Its my first post:)</span>
            <img className='postImg' src="assets/Posts/1.jpg" alt="" />
          </div>
          <div className="postBottom">
            <div  className="postBottomLeft">
              <img className='likeImg' src="assets/like.png" alt="" />
              <img className='heartImg' src="assets/heart.png" alt="" />
              <span className="postLikeCounter">32 people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">9 comments</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Post