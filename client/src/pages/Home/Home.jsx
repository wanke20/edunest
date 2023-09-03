import React from 'react'
import './Home.scss'
import { Link, Navigate } from 'react-router-dom';

const Home = () => {
  // retrieving current user data from localstorage

  const isCurrentuser = JSON.parse(localStorage.getItem('currentUser'));

  return isCurrentuser ? (
    <>
      <div className='card-container'>
        <Link to={'/market'} className='card'>
          Marketplace
        </Link>
        <Link to={'/profile'} className='card'>
          Profile
        </Link>
      </div>


    </>
  ) : <Navigate to='/login' />;
}

export default Home;