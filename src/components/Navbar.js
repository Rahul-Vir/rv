import React from 'react';
import '../assets/css/Navbar.css';
import {Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Property1 from '../assets/images/Property1.jpeg';
import SetCookies from '../cookie/SetCookies'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



export const Navbar = ({setData}) => {
  const params = useParams()
  const navigate = useNavigate();
  
  const[togle,setTogle] = useState(false)

  useEffect(()=>{
    if(SetCookies.get('login')){
      setTogle(true)
    }else{
      setTogle(false)
    }
},[])
const logOut = (event)=>{
  event.preventDefault();
  SetCookies.remove('login');
  setTogle(false)
  navigate('/');
}
const [data,setData1] = useState("")
const handleClick = ()=>{
  fetch(`https://rest-inn-backend.herokuapp.com/propertybytype/${data}`).then(response => response.json()).then(json=>{
    setData(json)
  }).catch(err=>{
    console.log(err);
  })
navigate(`/allproperty/${data}`);
}



  return (

    (togle) ?
  
   ( <div>	
  <nav className="navbar navbar-expand-lg navbar-light bg-light nav1">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#">About Us</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/allproperty">Property</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={`/dashboard`}>Dashboard</Link>
        </li>
        <li className="nav-item">
        <button className="dropbtn nav-link active" aria-current="page" onClick={logOut}>Logout</button>
      </li>
 
      </ul>
      <div className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setData1(e.target.value)}}/>
        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
      </div>
    </div>
  </div>
  </nav>
    </div>):(<div>	
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav1">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#">About Us</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/allproperty">Property</a>
            </li>
            <li className="nav-item dropdown">
            <div className="dropdown">
              <button className="dropbtn nav-link">Login/Signup</button>
            <div className="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/registration">Register</Link>
          </div>
          </div>
            </li>
     
          </ul>
          <div className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setData1(e.target.value)}} />
            <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
          </div>
        </div>
      </div>
      </nav>
        </div>)

   
  )
    }
    

export default Navbar;