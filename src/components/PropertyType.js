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
            <img className="card-img" src={props.element.img} alt="Card image cap" />
            </div>
            <div className='col-4'>
            <div className="card-body">
              <div className='name'>
                <h5 className="card-title">{props.element.name}</h5><p>{props.element.address}</p>
                </div>
                <div className='keypoint'>
                  <h6> {props.element.description}</h6>

                  </div>
                <div className='rating'>
                <span className="badge bg-success">{props.element.rating}</span>
                </div>
            </div>
                </div>
                <div className='col-4'>
                  <div className='goto'>
                    <span className = 'price'><b> {props.element.price} CAD</b></span>
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
