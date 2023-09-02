import React from 'react';
import './Profile.scss';

import profileImg from '../../assets/icons/punisher.png';

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="profileTop">
        <div className="topLeft">
          <div className="profileImage">
            <img src={profileImg} alt=''></img>
          </div>
        </div>
        <div className="topRight">
          <div className="fullName">
            Avinash Dubey
          </div>
          <div className="username">
            avinasdube
          </div>
        </div>
      </div>

      <div className="profileBottom">
        <div className="heading">
          About
        </div>
        <div className="detailsBox">
          <div className="detail"><label>Bio</label>Namaskar, I'm Avinash Dubey ! I'm a MERN developer.</div>
          <div className="detail"><label>Email</label>avinasdube@gmail.com</div>
          <div className="detail"><label>Phone Number</label>999999999</div>
        </div>
      </div>
    </div>
  )
}

export default Profile