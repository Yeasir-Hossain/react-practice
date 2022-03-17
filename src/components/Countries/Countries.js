import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from './Country/Country';
const Countries = () => {
    const [countries, setCountries]= useState([])
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
      } , [])
    return (
            <div>
              <h1>Visiting every countries</h1>
              <h3>Available countries : {countries.length}  </h3>
              <div className='countries'>
              {
                countries.map(country => <Country
                   country = {country}
                   key = {country.cca3}
                   ></Country>)
              }
              </div>
              
            </div>
    );
};

// function Country(props){
//     return(
//       <div>
//         <h2>Name: {props.name} </h2>
//         <h3>Population: {props.population}</h3>
//       </div>
//     )
//   }
//function Loadcountries(){
    //   const [countries, setCountries]= useState([])
    //   useEffect(() =>{
    //     fetch('https://restcountries.com/v3.1/all')
    //     .then(res => res.json())
    //     .then(data => setCountries(data))
    //   } , [])
    //   return (
    //     <div>
    //       <h1>Visiting every countries</h1>
    //       <h3>Available countries : {countries.length} </h3>
    //       {
    //         countries.map(country => <Country name={country.name.common} population={country.population} ></Country>)
    //       }
    //     </div>
    //   )
        
    // }
    
  

export default Countries;