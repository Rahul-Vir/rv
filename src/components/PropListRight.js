import React,{ useState} from 'react';
import '../assets/css/PropListRight.css';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import PropertyType from '../components/PropertyType.js';


const PropList = (props) => {

  
  return (

     <div class="property-list">
     
     <div class="banner">
     <div class="h1"> {props.data[0].name}s </div>
     <div class="filter-list">
     <h4>Sort by </h4>
     <button type="submit" class="button">Featured</button>
     <select className='button1' name="rating" id="rating">
        <option value="d0" selected>Star-rating</option>
        <option value="d1">1 star</option>
        <option value="d2">2 star</option>
        <option value="d3">3 star</option>
        <option value="d4">4 star</option>
    </select>
    <select className='button1' name="distance" id="distance">
        <option value="d0" selected>Distance</option>
        <option value="d1">25KM</option>
        <option value="d2">50KM</option>
        <option value="d3">75KM</option>
        <option value="d4">100KM+</option>
    </select>
    <button  type="submit" class="button">Guest Rating</button>
    <select className='button1' name="Price" id="Price">
    <option value="Title">Price</option>
    <option value="p1">$0 - $100</option>
    <option value="p2">$100 - $200</option>
    <option value="p3">$200-$500</option>
    <option value="p4">$500 +</option>
</select>
    </div>
    <p> How much we get paid influences your sort order</p>
    
     </div>
     <div class="p-list">
     {
     props.data[0].list?.map((element, key) => (
      <div key={key}>
          <PropertyType element={element}/>
      </div>
      ))
     }

     </div>
    </div>

  
  )
}

export default PropList;