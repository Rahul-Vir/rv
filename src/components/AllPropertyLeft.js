import {React, useState} from 'react';
import '../assets/css/PropListLeft.css';
import map1 from '../assets/images/map1.png';



export const AllPropertyLeft = (props) => {
  


  return (
    <div class="left-panel">
    <div class="map prop"> <img src={map1} alt="" /> </div>
    <div class="map-result "> <p>Narrow results:</p>
    <div class="result h4" type="text">{props.data.length} properties found!!</div>
    
    </div>
    <div class="name-contains prop"> <p>Name contains</p> 
    <input class="prop-name" type="text" placeholder='Property name' />
    </div>
    <div class='filters prop'>
    <p>Some popular filters:</p>
    <ol className='l'>
    <li><input type="checkbox" class="filter-check" /> &nbsp; Pool</li>
    <li><input type="checkbox" class="filter-check" /> &nbsp; Breakfast included</li>
    <li><input type="checkbox" class="filter-check" /> &nbsp; WiFi included</li>
    <li><input type="checkbox" class="filter-check" /> &nbsp; Parking</li>
    <li><input type="checkbox" class="filter-check" /> &nbsp; Airport transfers</li>
    </ol>
    </div>
    <div class="price-bar-section prop">
    <div class="priceSlider">
    <p>Price per night:</p>
    <p>$0 CAD - $500 CAD+</p>
    <div class="min-max">
    <div class="min">
    <span id="min-value"></span>
     </div>
     <div class="max">
       <span id="max-value"></span>
       </div>     
         </div> 
    
    <div class="min-max-range">
    <input type="range" min="0" max="500" value="0" class="range" id="min" />
    <input type="range" min="0" max="500" value="500" class="range" id="max" />      
    </div>    
    
    </div> 
    
    </div>
    </div>
  )
}


export default AllPropertyLeft;