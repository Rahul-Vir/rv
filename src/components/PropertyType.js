import React from 'react';
import '../assets/css/PropertyType.css';
import img1 from '../assets/images/Property1.jpeg';
import { Link } from 'react-router-dom';

 
export const PropertyType = (props) => {
  return (
    <div>
        <div className="propCard">
            <div className='row'>
            <div className='col-4'>
            <img className="card-img" src={props.element.image} alt="Card image cap" />
            </div>
            <div className='col-4'>
            <div className="card-body">
              <div className='name'>
                <h5 className="card-title">{props.element.propTitle}</h5><p>{props.element.propLocation.streetAddress}</p>
                </div>
                <div className='keypoint'>
                  <h6> {props.element.propDescription}</h6>

                  </div>
                <div className='rating'>
                <span className="badge bg-success">8.6</span>
                </div>
            </div>
                </div>
                <div className='col-4'>
                  <div className='goto'>
                    <span className = 'price'><b> {props.element.propPrice} CAD</b></span>
                    <p className='text-success'>free cancellation</p>
                <Link to={`/#`} className="btn btn-primary">Book </Link>
                </div>
                </div>
            
            </div>
        </div>
    </div>
  );
}

export default PropertyType;
