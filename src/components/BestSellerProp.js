import {React, useEffect, useState} from 'react';
import '../assets/css/BestSellerProp.css';
import BestSeller1 from '../assets/images/BestSeller1.jpeg';
import { Link } from 'react-router-dom';

export const BestSellerProp = (props) => {

  
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
 

  useEffect(() => {
    fetch("http://localhost:5000/property/bestseller?bestseller=true").then(response => response.json()).then(json => {
      setList(json);
    }).catch(err => {
      console.log(err);
    })
  }, [])



  return (

    
<div className="bestSeller"> {
      list.map((element) => {
        return(
          <div class="card">    
          <div class ="img"> <img src={element.image} alt="Best-Seller" /> </div>
          <div class="content">
            <p> <b>{element.propTitle}</b> </p>
            <p>Check out this exclusive {element.propType}</p>
            <Link className='btn btn-primary' to={`/propertyDescription/${element.propTitle}`}> Select</Link>
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