import {React, useEffect, useState}from 'react';
import { PropListLeft } from '../components/PropListLeft';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Header from '../components/Header';
import AllProperty from '../components/AllProperty';
import AllPropertyLeft from '../components/AllPropertyLeft';
import { useParams } from 'react-router-dom';

 const AllPropertyPage = () => {
let temp = []
const params = useParams()
  const [data,setData] = useState(
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
  
    
  }
])
useEffect(()=>{
  const url = (params.name)?"https://rest-inn-backend.herokuapp.com/propertybytype/"+params.name:"https://rest-inn-backend.herokuapp.com/propertylist"
  fetch(url).then(response => response.json()).then(json=>{
    setData(json);
  }).catch(err=>{
    console.log(err);
  })
  
},[])



  return (
    <div>
    <Header  />
    <Navbar setData={setData} /> 
    <div className='prop-list-page'><AllPropertyLeft data={data}/><AllProperty data={data} /></div>
    <Footer /> 
    </div>
  )
}

export default AllPropertyPage;