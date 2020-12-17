

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from '../search/SearchForm';
import CityCard from '../card/CityCard';
import './HomeView.css';

const API_KEY="e3094a3d5e6dcec4e3066ca8dd7ee7ae";

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

    useEffect(() => { 

        // localStorage.setItem('cities',JSON.stringify(cities));

        if (!query ) {
            return;
        }
        const fetchCities = () => {
            APIfetchCities({ searchQuery: query }).then(responseCities=> {setCities(prevCities=>[responseCities,...prevCities]);})
        .catch(error => setError(error.message));
        };
        fetchCities();
    },[ query]);

    // useEffect(()=>{
    //    if(localStorage.getItem('cities')){
    //     setCities(JSON.parse(localStorage.getItem('cities')))
    // }
    //  },[]);
    
    const onChangeQuery = query => setQuery(query);
    
    return (
        <>
        {error&&<h1>Something went wrong, please try arain</h1>}
        < SearchForm onSubmit={onChangeQuery} />
        <ul className='container'>
            {cities.map(sity=>(
                <li key={sity.id} className='list'>
                   <CityCard
                   id={sity.id}
                   name={sity.name} 
                   current={sity.main.temp} 
                   wind={sity.wind.speed} 
                   desc={sity.weather[0].description} />
                 </li>
            ))}
            </ul>   
        </>
    )
};
export default HomeView;

