

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from '../search/SearchForm';
import CityCard from '../card/CityCard';
import './HomeView.css';


const API_KEY="7567821800ae8ecd80610d18b7dae680";

const APIfetchCities = async ({
    searchQuery = ''
} = {}) => {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${API_KEY}`);
    return response.data;
};



const HomeView = () => {

    const [cities, setCities] = useState([]);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);

    // console.log('cities',cities);
    useEffect(() => { 

        if (!query ) {
            return;
        }
        

        const fetchCities = () => {
         APIfetchCities({ searchQuery: query }).then(responseCities=> {
             setCities(prevCities=>[responseCities,...prevCities]);
            })
        .catch(error => setError(error.message));
        };
        fetchCities();
    },[ query]);

    if(cities.length!==0){
        localStorage.setItem('cities',JSON.stringify(cities));
     };
  
    useEffect(()=>{
       if(localStorage.getItem('cities')){
        setCities(JSON.parse(localStorage.getItem('cities')))
    }
     },[]);
    
    const onChangeQuery = query => setQuery(query);

    const onDeleteCity=(cityId)=>{
        setCities(cities.filter(elem=>elem.id!==cityId));
        localStorage.removeItem('cities');
    }

    
    return (
        <>
        {error&&<h1>Something went wrong, please try arain</h1>}
        < SearchForm onSubmit={onChangeQuery} />
        <ul className="container">
            {cities.map(sity=>(
                   < CityCard
                   key={sity.id}
                   id={sity.id}
                   name={sity.name} 
                   current={sity.main.temp} 
                   desc={sity.weather[0].main}
                   deleteBtn={()=>onDeleteCity(sity.id)}/>))}
            </ul>  
        </>
    )
};
export default HomeView;

