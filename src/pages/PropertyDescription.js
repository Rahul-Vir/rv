import {React, useEffect, useState}from 'react';
import Description from '../components/Description.js';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';



export const PropertyDescription = () => {
  const[data,setData] = useState()
  let params = useParams();
const [data1,setData1] = useState(
  [{
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

useEffect(()=>{
  

  fetch(`http://localhost:5000/propertybytitle?propTitle=${params.id}`).then(response => response.json()).then(json=>{
    setData1(json)
  }).catch(err=>{
    console.log(err);
  })
  
},[])
  return (
    <div>
    <Header /><Navbar setData={setData} /><Description data1={data1} /> <Footer />

     </div>
  )
}

export default PropertyDescription;