import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import './Login.scss';
import logo from '../../assets/icons/logo.png';
import axios from 'axios';
import Toasts from '../../components/Toasts/Toasts';

const Login = () => {
  // useState to set changes made in form field values as object

  const [inputs, setInputs] = useState({
    username: " ",
    password: " ",
  });

  // a function to record changes in the form field values

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  // a function to handle submission of form data

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // to prevent default load

    try {
      // sending user input to 'http://localhost:8800/server' (through proxy set in package.json)

      await axios.post("/auth/login", inputs)

      const res = await axios.get("/auth/verifyToken")

      // storing user information in local storage/session storage

      localStorage.setItem("currentUser", JSON.stringify(res.data));

      // retrieving user information from local storage

      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      if (currentUser) {

        // if currentUser exists, navigate to the room page

        navigate("/home");
      } else {
        navigate("/login")
      }

    } catch (err) {
      let data = err.response.data;
      setMessage(data);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <div className='loginContainer'>
      {/* importing toast component and passing message and error as props to it */}

      <Toasts message={message} error={error} />

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
                onChange={handleChange}
                required
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                required
              ></input>
              <button type="submit" onClick={handleSubmit}>
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