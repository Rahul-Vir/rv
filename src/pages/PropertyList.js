import {React, useEffect, useState}from 'react';
import '../assets/css/PropertyListpage.css';
import { PropListLeft } from '../components/PropListLeft';
import PropListRight from '../components/PropListRight';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';





 const PropertyList = () => {

  let params = useParams();
  const [data,setData] = useState(
    [{"id":0,
  name: "",
  description : "",
  list :[]
}
])
useEffect(()=>{
  fetch("http://localhost:5000/\property-type").then(response => response.json()).then(json=>{
    let callProperty = json.filter((element)=> element.id == parseInt(params.id))
    setData(callProperty);
  }).catch(err=>{
    console.log(err);
  })
  
},[])

  return (
    <div>
    <Header />
    <Navbar /> 
    <div className='prop-list-page'><PropListLeft data={data}/><PropListRight data={data} /></div>
    <Footer /> 
    </div>
  )
}

export default PropertyList;