import React from 'react';
import '../assets/css/Description.css';
import { Link } from 'react-router-dom';
import map2 from '../assets/images/map2.png';

export const Description = (props) => {
  return (
    <div class="property-page">
    <div className='propTitle'>
    <div class = "banner1">
    <p><h3> {props.data[0].name}</h3> &nbsp; <h5>3-star</h5></p>
    <p>3-star hotel with outdoor pool, near Pigeon Point Beach</p>
    <p class="p"> &#10004; Free local cuisine breakfast, free WiFi and free parking &nbsp; &nbsp;
    &#10004; Free airport shuttle &nbsp; &nbsp; &#10004; Free cancellation </p>
    <a href="#"> Collect stamps</a> &nbsp;&nbsp; <a href="#"> Price Gaurantee</a>
    </div> <div className='priceSection'>
    <span className = 'price'><b> {props.data[0].price} CAD</b></span>
    <br /><Link to={`/#`} className="btn-primary btn button">Choose Room </Link>
    </div></div>
    <div class="desc-body">
    <div className='prop'>
    <div class="img-slide"> <img src={props.data[0].image} alt="" /></div> 
    <table className='amenities'>
    <tr ><td colspan='5'><h3>{props.data[0].description} </h3></td></tr>
    <tr ><td colspan='5'><h4>Guest rated location </h4></td></tr>
    <tr>
    <td>&#128077; <b>Convenient</b> <br/>
    50 positive mentions</td>
    <td>&#128077; <b>Quiet</b> <br/>
    60 positive mentions</td>
    <td>&#128077; <b>Walkable</b> <br/>
    41 positive mentions</td>
    <td>&#128077; <b>Safe</b> <br/>
    39 positive mentions</td>
    <td>&#128077; <b>Transportation options</b> <br/>
    35 positive mentions</td></tr></table>
    
    </div>
    <div class="prop-info">
    <div class="mapper">  <img src={map2} alt="" /> </div>
    <input class="result" type="text" placeholder={props.data[0].address} readOnly />
    
    <div class="review">
    <span class="rev"> {props.data[0].rating}</span> <b> Fabulous</b> <br/>
     55 verified guest reviews</div>
    <div class="reviews">
    <div class="rvw" > We had an amazing stay at this beautiful place. It was well organized and contained everything we needed. We cant wait to come back! </div>
    <div class="rvw" > Very clean and comfortable! It was a great location, close to everything we needed. Thank you so much for providing such an excellent location!</div>
    <div class="rvw" > We loved our stay in this beautiful home! It was so peaceful, the beds were very comfy and the place was equipped with everything we needed. Thank you so much for providing such an amazing vacation rental!</div>
    <div class="rvw" >Great place to stay! I wish i could have stayed longer! Will definitely book back soon!</div>
    </div>
    </div>
    
    </div>
    </div>
  )
}

export default Description;