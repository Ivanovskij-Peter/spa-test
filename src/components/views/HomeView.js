

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from '../search/SearchForm';
// import CityCard from './CityCard';

const API_KEY="7567821800ae8ecd80610d18b7dae680";


const APIfetchCities = async ({
    searchQuery = ''
} = {}) => {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${API_KEY}`);
    return response.data    ;
};

const HomeView = () => {

    const [cities, setCities] = useState([]);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => { 
        if (!query) {
            return;
        }
        const fetchCities = () => {
            APIfetchCities({ searchQuery: query }).then(responseCities=> {setCities(prevCities=>[responseCities,...prevCities]);})
        .catch(error => setError(error.message));
        };
        fetchCities();
    },[query]);
    
    const onChangeQuery = query => setQuery(query);
    
    return (
        <>
        {error&&<h1>Something went wrong!</h1>}
        < SearchForm onSubmit={onChangeQuery} />
        <ul>
            {cities.map(sity=>(
                <li key={sity.id}>
                    <h1> {sity.name}</h1>
                    <p>Current: {sity.main.temp}°С</p>
                    <p>Wind Speed: {sity.wind.speed} м/с</p>
                 </li>
            ))}
            </ul>   
        </>
    )
};
export default HomeView;