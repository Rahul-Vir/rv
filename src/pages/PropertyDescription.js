import {React, useEffect, useState}from 'react';
import Description from '../components/Description.js';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';



export const PropertyDescription = () => {

  let params = useParams();
const [data,setData] = useState(
  [{"id":0,
name: "",
description : "",
list :[]
}
])

useEffect(()=>{
fetch("http://localhost:5000/best-seller").then(response => response.json()).then(json=>{
  
let callProperty = json.filter((element) => element.id == parseInt(params.id))
 setData(callProperty);
}).catch(err=>{
  console.log(err);
})

},[])

  return (
    <div> <Header /><Navbar /><Description data={data} /> <Footer /></div>
  )
}

export default PropertyDescription;