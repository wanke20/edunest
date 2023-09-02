import React from 'react';
import { Link } from "react-router-dom";

import './Login.scss';
import logo from '../../assets/icons/logo.png';

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className="loginBox">
          <div className="appLogo">
            <img src={logo} alt=''></img>
          </div>
          <div className="loginHeading">Login to Edunest</div>
          <div className="inputBox">

            <form>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                required
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
              ></input>
              <button  type="submit">
                Login
              </button>
            </form>
          </div>

          <div className="loginFoot">
            New here ? <Link to="/signup">Signup</Link> now !
          </div>
      </div>
    </div>
  )
}

export default Login