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
  const [data,setData] = useState()
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

  fetch(`https://rest-inn-backend.herokuapp.com/propertybytype/${params.flag}`).then(response => response.json()).then(json=>{
    setData1(json)
  }).catch(err=>{
    console.log(err);
  })
  
},[])

  return (
    <div>
    <Header />
    <Navbar  setData={setData} /> 
    <div className='prop-list-page'><PropListLeft data={data1}/><PropListRight data={data1} /></div>
    <Footer /> 
    </div>
  )
}

export default PropertyList;