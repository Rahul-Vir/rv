import React from 'react';
import '../assets/css/Property.css';
import Property1 from '../assets/images/Property1.jpeg';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';



export const Property = (props) => {

  const [list,setList] = useState([{
    id: "",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    propTitle: "",     
    propDescription: "",
     propPrice: "",
        propType: "",
propLocation:
 {
streetAddress: "",
        city: "",
        postalCode: "",
        province: ""}
        ,
    houseRules: "",
     amenities: "",
        bestseller: true

  }])
  let count = 0;
  let row = 0;

  useEffect(()=>{
    fetch("http://localhost:5000/property/type").then(response =>response.json()).then(json=>{
      setList(json)
    }).catch(err=>{
      console.log(err);
    })
  },[])

  return (
   <div className='proptype-list'> {
    list.map((element) => {
      return(
        <div class="card"> 
        <div class ="img"> <img src={element.image} alt="" /> </div>
        <div class="content">
          <p> <b>{element.propTitle} </b></p>
          <p> Check out our exclusive {element.propType}s</p>

          <Link className='btn btn-primary' to={`/propertyList/${element.propType}`}> Select</Link>
        </div>
        </div>

      )
    } 
    )
   }
         
      
   </div>
  
   
  )
}

export default Property;