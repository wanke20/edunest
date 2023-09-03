import React from 'react';
import './Navbar.scss';

import logo from '../../assets/icons/logo.png';

import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='navbarContainer'>
            <div className='navbarLeft'>
                <div className='navLinks'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/market'>Marketplace</Link>
                </div>
            </div>

            <div className='navbarCenter'>
                <div className='appLogo'>
                    <Link className='link' to='/'>
                        <img src={logo} alt='' id='prflmg'></img>
                        <span>Edunest</span>
                    </Link>
                </div>
            </div>

            <div className='navbarRight'>
                <div className='navLinks'>
                    <Link className='link' to='/profile'>Profile</Link>
                    <Link className='link' to='/aboutus'>About Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;