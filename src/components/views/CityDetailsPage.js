import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import { useLocation, useParams } from 'react-router-dom';


const API_KEY="7567821800ae8ecd80610d18b7dae680";


const CityDetailsPage=()=>{
    const [cities,setCity]=useState({});
    const  {cityId}=useParams();
   

    useEffect(()=>{
        const ApiFetchSityInfo=async()=>{
            const response=await Axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${API_KEY}`);
            setCity({...response.data});
         }
         ApiFetchSityInfo();     
    },[cityId])


 return(
    <>
    <h1> {cities.name}</h1>
    {/* <p>Current: {cities.main.temp}°С</p>
    <p>Pressure: {cities.main.pressure} гПа</p>
    <p>Feels Like: {cities.main.feels_like}°С</p>
    <p> Min temp: {cities.main.temp_min}°С</p>
    <p>Max temp: {cities.main.temp_max}°С</p>
    <p>Humidity: {cities.main.humidity}%</p>
    <p>Wind: {cities.wind.speed} м/с</p> 
     <p>Clouds: {cities.clouds.all} %</p> */}
    </>
 )
}
       
export default CityDetailsPage;
