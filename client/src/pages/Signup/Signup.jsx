import React from 'react';
import { Link } from "react-router-dom";

import './Signup.scss';
import logo from '../../assets/icons/logo.png';

const Signup = () => {
  return (
    <div className='signupContainer'>
      <div className="signupBox">
          <div className="appLogo">
            <img src={logo} alt=''></img>
          </div>
          <div className="heading">Signup to Edunest</div>
          <div className="inputBox">

          <form>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              ></input>
              <input
                type="text"
                name="username"
                placeholder="Enter a username"
                required
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Enter a new password"
                required
              ></input>
              <input
                type="password"
                name="cnfpassword"
                placeholder="Enter your password again"
                required
              ></input>
              <button type="submit">
                Signup
              </button>
            </form>
          </div>

          <div className="foot">
            Already signed up ? <Link to="/login">Login</Link> now !
          </div>
      </div>
    </div>
  )
}

export default Signup