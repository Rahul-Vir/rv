import {React, useEffect, useState}from 'react';
import { PropListLeft } from '../components/PropListLeft';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Header from '../components/Header';
import AllProperty from '../components/AllProperty';
import AllPropertyLeft from '../components/AllPropertyLeft';




 const AllPropertyPage = () => {
    let temp = []

  const [data,setData] = useState(
    [{"id":0,
  name: "",
  description : "",
  list :[]
}
])
useEffect(()=>{
  fetch("http://localhost:5000/property-type").then(response => response.json()).then(json=>{
    json.forEach((element)=> element.list.forEach((element1)=>{
        temp.push(element1)
    }))
    setData(temp);
  }).catch(err=>{
    console.log(err);
  })
  
},[])



  return (
    <div>
    <Header />
    <Navbar /> 
    <div className='prop-list-page'><AllPropertyLeft data={data}/><AllProperty data={data} /></div>
    <Footer /> 
    </div>
  )
}

export default AllPropertyPage;