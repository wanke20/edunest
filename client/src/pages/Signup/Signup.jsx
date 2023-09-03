import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import './Signup.scss';
import logo from '../../assets/icons/logo.png';
import Toasts from "../../components/Toasts/Toasts";

const Signup = () => {
  // useState to set changes made in form field values as object

  const [inputs, setInputs] = useState({
    name: " ",
    username: " ",
    email: " ",
    password: " ",
    cnfpassword: " ",
  })

  // a function to record changes in the form field values

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const navigate = useNavigate();

  // a function to handle submission of form data

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();  // to prevent default load

    try {

      // sending user input to 'http://localhost:8800/server/auth/signup' (through proxy set in package.json)

      await axios.post("/auth/signup", inputs);
      navigate("/login");
    }
    catch (err) {
      let data = err.response.data;
      console.log(data);
      setMessage(data)
      setError(true)
      setTimeout(()=>{
        setError(false);
      }, 2000);
    }
  }

  return (
    <div className='signupContainer'>
      
      {/* importing toast component and passing message and error as props to it */}
      
      <Toasts message={message} error={error} />

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
                onChange={handleChange}
                required
              ></input>
              <input
                type="text"
                name="username"
                placeholder="Enter a username"
                onChange={handleChange}
                required
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Enter a new password"
                onChange={handleChange}
                required
              ></input>
              <input
                type="password"
                name="cnfpassword"
                placeholder="Enter your password again"
                onChange={handleChange}
                required
              ></input>
              <button type="submit" onClick={handleSubmit}>
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