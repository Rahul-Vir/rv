import {React, useEffect, useState} from 'react';
import '../assets/css/BestSellerProp.css';
import BestSeller1 from '../assets/images/BestSeller1.jpeg';
import { Link } from 'react-router-dom';

export const BestSellerProp = (props) => {

  
  const [list,setList] = useState([{
    "id" : 0,
    "name" : "",
    "description" : "",
    "list" :[]
  }])
 

  useEffect(()=>{
    fetch("http://localhost:5000/best-seller").then(response =>response.json()).then(json=>{
      setList(json)
    }).catch(err=>{
      console.log(err);
    })
  },[])


  return (

    
<div className="bestSeller"> {
      list.map((element) => {
        return(
          <div class="card">    
          <div class ="img"> <img src={element.image} alt="" /> </div>
          <div class="content">
            <p> <b>{element.name}</b> </p>
            <p> {element.description} </p>
            <Link className='btn btn-primary' to={`/propertyDescription/${element.id}`}> Select</Link>
          </div>
          </div>
        
        
  
        )
      } 
      )
     }
     </div>   
        
  )
}

export default BestSellerProp;