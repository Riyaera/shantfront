import React, { useState } from 'react';
import './User.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from "./Loginvalidation";
import axios from "axios";

function User() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
 
   setError(  Validation(values))    
  
    if (error.email === "" && error.password === "") {
      axios.post("http://localhost:3213/user", values)
        .then(res => {
          if (res.data === "success") {
            navigate("/products");
            console.log(res)
          } else {
            alert("No record existed");
          }
        })
        .catch(err => console.log(err.message));
    }
  }

  return (
    <div className="login-wrap">
      <form className="loginform" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group fguser">
          <label htmlFor="email"><strong>Email:</strong></label>
          <input
            type="email"
            placeholder='Enter email'
            name='email'
            onChange={handleInput}
            required
          />
          {error.email && <span className='erred'>{error.email}</span>}
        </div>
        <div className="form-group fguser">
          <label htmlFor="password"><strong>Password:</strong></label>
          <input
            type="password"
            placeholder='Enter password'
            name='password'
            onChange={handleInput}
            required
          />
          {error.password && <span className='erred'>{error.password}</span>}
        </div>
        <button type="submit" className='btn-login'><strong>Login</strong></button>
        <p>You agree to our terms and policies.</p>
        <Link to="/sign" className='btncreate'>Create account</Link>
      </form>
    </div>
  );
}

export default User;
