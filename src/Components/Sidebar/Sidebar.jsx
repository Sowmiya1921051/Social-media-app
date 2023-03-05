import './Sidebar.css'
import {RssFeed,Chat,PlayCircleFilled,Group,Bookmark,HelpOutline,Event,School
} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
              <RssFeed className='sidebarIcon'/>
              <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
              <PlayCircleFilled className='sidebarIcon'/>
              <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
              <Group className='sidebarIcon'/>
              <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
              <Bookmark className='sidebarIcon'/>
              <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
              <HelpOutline className='sidebarIcon'/>
              <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
              <HelpOutline className='sidebarIcon'/>
              <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
              <Event className='sidebarIcon'/>
              <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
              <School className='sidebarIcon'/>
              <span className="sidebarListItemText">Courses</span>
          </li>

        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="./assets/Persons/2.jpg" alt="" className="sidebarFriendImg" />
            <span className='sidebarFriendName'>John</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/Persons/3.jpg" alt="" className="sidebarFriendImg" />
            <span className='sidebarFriendName'>Liya</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/Persons/4.jpg" alt="" className="sidebarFriendImg" />
            <span className='sidebarFriendName'>Apsara</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/Persons/5.jpg" alt="" className="sidebarFriendImg" />
            <span className='sidebarFriendName'>Joe</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/Persons/6.jpg" alt="" className="sidebarFriendImg" />
            <span className='sidebarFriendName'>Peter</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/Persons/7.jpg" alt="" className="sidebarFriendImg" />
            <span className='sidebarFriendName'>Emma</span>
          </li>
        </ul>
      </div>
      </div>
  )
}