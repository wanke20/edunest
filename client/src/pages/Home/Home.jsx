import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='card-container'>
        <Link to={'/marketplace'} className='card'>
          Marketplace
        </Link>
        <Link to={'/profile'} className='card'>
          Profile
        </Link>
      </div>


    </>
  )
}

export default Home;