import Axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const API_KEY="7567821800ae8ecd80610d18b7dae680";


const CityDetailsPage=()=>{
    const [cityInfo,setCityInfo]=useState({});
    const  {cityId}=useParams();
   //  console.log('cityInfo',cityInfo);
   
    useEffect(() => {
        const ApiFetchSityInfo = async () => {
            const response = await Axios.get (`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${API_KEY}`);
            setCityInfo ({...response.data});
         }
         ApiFetchSityInfo(); 
         // return()=>{
         //    ApiFetchSityInfo();
         // }    
    },[cityId])


 return(
    <>
    <h1> {cityInfo.name}</h1>
    {/* <p>Current: {cityInfo.main.temp}°С</p>
    <p>Pressure: {cityInfo.main.pressure} гПа</p>
    <p>Feels Like: {cityInfo.main.feels_like}°С</p>
    <p> Min temp: {cityInfo.main.temp_min}°С</p> */}
    {/* <p>Max temp: {cityInfo.main.temp_max}°С</p> */}
    {/* <p>Humidity: {cityInfo.main.humidity}%</p> */}
    {/* <p>Wind: {cityInfo.wind.speed} м/с</p>  */}
     {/* <p>Clouds: {cityInfo.clouds.all} %</p> */}
    </>
 )
}
       
export default CityDetailsPage;
