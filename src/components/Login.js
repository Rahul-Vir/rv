import {React, useState} from 'react';
import '../assets/css/Login.css';
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import SetCookies from '../cookie/SetCookies'

export const Login = () => {

  const navigation = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  


const handleClick =()=>{
  let result = {email,password};
  console.log('qqqqqqqqqqqqqqqqqqqqqq',result);
  fetch("http://localhost:5000/user/login",{
    method : "POST",
    headers : {
      'Content-Type': 'application/json' 
    },
    body : JSON.stringify(result) 
  }).then((response)=>{

    if(response.status == 200)
    {
      response.json().then((json)=>{
        console.log('aaaaaaaaaaaaa',json);
        SetCookies.set("login", json.id, { "path": "/" })
        console.log('id-----------------',SetCookies.get('login'));
        navigation('/')
      })
    }
    else{
      alert('Invalid')
    }
  })
 

}

  return (
    <div className='login-page'>
    <div className='form1'>
   <div className='form'>
             <div className="form-inner">
                <h2>Login</h2>
        
                 <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                 <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <span className='forgot'><a href='#'>Forgot Password</a></span>
                <button className='btn btn-primary' onClick={handleClick} >Login</button>
                &nbsp;
                <span className='create'>Don't have an account? &nbsp;<a href='#'>Register</a> </span>
            </div>
            </div>
        
    </div>
    </div>
  )
}

export default Login;