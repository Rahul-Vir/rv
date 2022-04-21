import React from 'react';
import '../assets/css/Register.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
export const Register = () => {

  const navigate = useNavigate()
  const navigation = useNavigate();
  const [firstName, setFname] = useState();
  const [lastName, setLname] = useState();
  const [password, setpassword] = useState();
  const [postalCode, setPostal] = useState();
  const [streetAddress, setAddress] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  let result;
    const handleClick = ()=>{
        result = {firstName, lastName, city, number, postalCode, province,streetAddress,email,password}
        fetch("http://localhost:5000/user/registration",{
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
              }, 
              body: JSON.stringify(result)
        }).then((response)=>{
            if(response.status==200){
                navigate('/login')
            }else{
                console.log('aaaaaaaa----------',response.status);
            }
        })
    }


  return (
    <div className="Registration">
    
    <div className="register-row">
    <table>
    <tbody>
    <tr>
    <td><label type="Text" for="fname" className="fname"><b>First Name: </b></label></td>
    <td><input type="Text" name="fname" className="fname field" onChange={(e)=>{setFname(e.target.value)}}/></td>
    <td><label type="Text" for="lname" className="lname"><b>Last Name:</b></label></td>
    <td ><input type="Text" name="lname" className="lname field" onChange={(e)=>{setLname(e.target.value)}} /></td>
    </tr>
    <tr>
    <td><label type="Text" for="address" className="address"><b>Street Address: </b></label></td>
    <td> <input type="Text" name="address" className="address field" onChange={(e)=>{setAddress(e.target.value)}}/></td>
    <td><label type="Text" for="city" className="city"><b>City or town: </b></label></td>
    <td><input type="Text" name="city" className="city field" onChange={(e)=>{setCity(e.target.value)}}/><br/></td>
    </tr>
    <tr>
    <td><label type="Text" for="pcode" className="pcode"><b>Postal Code:</b></label></td>
    <td><input type="Text" name="pcode" className="pcode field" onChange={(e)=>{setPostal(e.target.value)}}/></td>
    <td><label type="Text" for="phoneNumber" className="phn-nbr"><b>Phone Number:</b></label></td>
    <td ><input type="Text" name="phoneNumber" className="phn-nbr field" onChange={(e)=>{setNumber(e.target.value)}} /></td>
    </tr>
    <tr>
    <td><label type="Text" for="birthdate" className="birthdate"><b>Province: </b></label></td>
    <td><input type="text" name="birthdate" className="birthdate field"  onChange={(e)=>{setProvince(e.target.value)}}/></td>
    <td><label type="Text" for="email" className="email"><b>Email Address: </b></label></td>
    <td ><input type="Text" name="email" className="email field"  onChange={(e)=>{setEmail(e.target.value)}}/></td>
    </tr>
    <tr>
    <td> <label type="Text" for="password" className="password"><b>Password: </b></label></td>
    <td>  <input type="Text" name="password" className="password field" onChange={(e)=>{setpassword(e.target.value)}} /></td>
    <td><label type="Text" for="confirm-password" className="confirm-password"><b>Confirm password: </b></label></td>
    <td><input type="Text" name="confirm-password" className="confirm-password field" /></td>
    </tr>
    <tr>
   
    </tr>
    <tr>
    <td className="register-btn" colspan="4">
    <button className="button" type="submit" onClick={handleClick}>Register</button></td></tr>
    </tbody>
    </table>
    </div>
 
    </div>

  
    
  )
}

export default Register;