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
    "id" : 0,
    "name" : "",
    "description" : "",
    "list" :[]
  }])
  let count = 0;
  let row = 0;

  useEffect(()=>{
    fetch("http://localhost:5000/property-type").then(response =>response.json()).then(json=>{
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
        <div class ="img"> <img src={element.img} alt="" /> </div>
        <div class="content">
          <p> <b>{element.name} </b></p>
          <p> {element.description}</p>

          <Link className='btn btn-primary' to={`/propertyList/${element.id}`}> Select</Link>
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