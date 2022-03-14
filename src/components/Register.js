import React from 'react';
import '../assets/css/Register.css';

export const Register = () => {
  return (
    <div className="Registration">
    
    <div className="register-row">
    <table>
    <tbody>
    <tr>
    <td><label type="Text" for="fname" className="fname"><h5>First Name: </h5></label></td>
    <td><input type="Text" name="fname" className="fname field" /></td>
    <td><label type="Text" for="lname" className="lname"><h5>Address:</h5></label></td>
    <td ><input type="Text" name="lname" className="lname field" /></td>
    </tr>
    <tr>
    <td><label type="Text" for="address" className="address"><h5>Street Address: </h5></label></td>
    <td> <input type="Text" name="address" className="address field" /></td>
    <td><label type="Text" for="city" className="city"><h5>City or town: </h5></label></td>
    <td><input type="Text" name="city" className="city field" /><br/></td>
    </tr>
    <tr>
    <td><label type="Text" for="pcode" className="pcode"><h5>Postal Code:</h5></label></td>
    <td><input type="Text" name="pcode" className="pcode field" /></td>
    <td><label type="Text" for="phoneNumber" className="phn-nbr"><h5>Phone Number:</h5></label></td>
    <td ><input type="Text" name="phoneNumber" className="phn-nbr field" /></td>
    </tr>
    <tr>
    <td><label type="Text" for="birthdate" className="birthdate"><h5>Date of birth: </h5></label></td>
    <td><input type="Date" name="birthdate" className="birthdate field" /></td>
    <td><label type="Text" for="email" className="email"><h5>Email Address: </h5></label></td>
    <td ><input type="Text" name="email" className="email field" /></td>
    </tr>
    <tr>
    <td> <label type="Text" for="password" className="password"><h5>Password: </h5></label></td>
    <td>  <input type="Text" name="password" className="password field" /></td>
    <td><label type="Text" for="confirm-password" className="confirm-password"><h5>Confirm password: </h5></label></td>
    <td><input type="Text" name="confirm-password" className="confirm-password field" /></td>
    </tr>
    <tr>
   
    </tr>
    <tr>
    <td className="register-btn" colspan="4">
    <button className="button" type="submit">Register</button></td></tr>
    </tbody>
    </table>
    </div>
 
    </div>

  
    
  )
}

export default Register;