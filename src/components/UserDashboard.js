import React from 'react';
import '../assets/css/UserDashboard.css';
import {Link } from 'react-router-dom';
import SetCookies from '../cookie/SetCookies';

const UserDashboard = () => {
 
  console.log('bbbbbbb',SetCookies.get('login'));
  return (
    <div className='dashboard'>
        <div className='user'>
            <div className='h3'>
                Hello {SetCookies.get('login').firstName} {SetCookies.get('login').lastName},   
            </div>
            <div className='details'>
            <form className="row1">
            <div className="row-info">
            <label htmlFor="inputEmail4" className="label">First Name : </label>
            <input type="text" className="field" id="inputEmail4" placeholder={SetCookies.get('login').firstName} readOnly />
          </div>
          <div className="row-info">
            <label htmlFor="inputPassword4" className="label">Last Name :</label>
            <input type="password" className="field" id="inputPassword4" placeholder={SetCookies.get('login').lastName} readOnly/>
          </div>
          <div className="row-info">
            <label htmlFor="inputAddress" className="label">E-mail :</label>
            <input type="e-mail" className="field" id="inputAddress" placeholder={SetCookies.get('login').email} readOnly/>
          </div>
          <div className="row-info">
            <label htmlFor="inputAddress" className="label">Phone Number :</label>
            <input type="e-mail" className="field" id="inputAddress" placeholder={SetCookies.get('login').phoneNumber} readOnly/>
          </div>
          <div className="row-info">
            <label htmlFor="inputAddress2" className="label">Address :</label>
            <input type="text" className="field" id="inputAddress2" placeholder={SetCookies.get('login').location.streetAddress} readOnly/>
          </div>
          <div className="row-info">
            <label htmlFor="inputCity" className="label">City</label>
            <input type="text" className="field" id="inputCity" placeholder={SetCookies.get('login').location.city} readOnly />
          </div>
          <div className="row-info">
            <label htmlFor="inputState" className="label">Province</label>
            <input type="text" className="field" id="inputProvince"  placeholder={SetCookies.get('login').location.province} readOnly/>
          </div>
          <div className="row-info">
            <label htmlFor="inputZip" className="label">Postal Code</label>
            <input type="text" className="field" id="inputZip"  placeholder={SetCookies.get('login').location.postalCode} readOnly/>
          </div>
</form>
</div>
</div>
</div>
  );
}

export default UserDashboard;
