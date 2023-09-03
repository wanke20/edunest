import React from 'react';
import './Profile.scss';

import profileImg from '../../assets/icons/punisher.png';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  // retrieving current user data from localstorage

  const isCurrentuser = JSON.parse(localStorage.getItem('currentUser'));

  return isCurrentuser ? (
    <div className="profileContainer">
      <div className="profileTop">
        <div className="topLeft">
          <div className="profileImage">
            <img src={profileImg} alt=''></img>
          </div>
        </div>
        <div className="topRight">
          <div className="fullName">
            {isCurrentuser.name}
          </div>
          <div className="username">
            {isCurrentuser.username}
          </div>
        </div>
      </div>

      <div className="profileBottom">
        <div className="heading">
          About
        </div>
        <div className="detailsBox">
          <div className="detail"><label>Bio</label>Namaskar, I'm Avinash Dubey ! I'm a MERN developer.</div>
          <div className="detail"><label>Email</label>{isCurrentuser.email}</div>
          <div className="detail"><label>Phone Number</label>999999999</div>
        </div>
      </div>
    </div>
  ) : <Navigate to='/home' />;
}

export default Profile