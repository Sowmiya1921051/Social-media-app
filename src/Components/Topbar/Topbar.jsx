import React from 'react'
import "./Topbar.css"
import {Search,Person,Chat,Notifications} from '@mui/icons-material'


function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className="logo">Rubysocial</span>
        </div>
        <div className='topbarCenter'>
            <div className="searchbar">
                <Search className='searchIcon'/>
                <input type="text" placeholder='Search for friend, post or video' className="searchInput" />
            </div>
        </div>
        <div className='topbarRight'>
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItems">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItems">
                    <Chat/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItems">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/Persons/1.jpg" alt="" className="topbarImg" />
        </div>
        </div>
  )
}

export default Topbar