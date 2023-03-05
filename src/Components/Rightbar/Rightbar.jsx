import React from 'react'
import './Rightbar.css'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/birthday.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b><b>and</b><b>3 other friends</b>have a birhtday today
          </span>
        </div>
        <img className='rightbarAd' src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/Persons/3.jpg" alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">John</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/Persons/3.jpg" alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">John</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/Persons/3.jpg" alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">John</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/Persons/3.jpg" alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">John</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/Persons/3.jpg" alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">John</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/Persons/3.jpg" alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">John</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/Persons/3.jpg" alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">John</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar