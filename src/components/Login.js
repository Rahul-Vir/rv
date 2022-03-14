import React from 'react';
import '../assets/css/Login.css';
import {Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className='login-page'>
    <div className='form1'>
    <form>
             <div className="form-inner">
                <h2>Login</h2>
        
                 <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <span className='forgot'><a href='#'>Forgot Password</a></span>
                <Link className='btn btn-primary' to={`/`} >Login</Link>
                &nbsp;
                <span className='create'>Don't have an account? &nbsp;<a href='#'>Register</a> </span>
            </div>
        </form>
        
    </div>
    </div>
  )
}

export default Login;