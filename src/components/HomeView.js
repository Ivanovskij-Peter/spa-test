

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './search/SearchForm';
// import CityCard from './CityCard';

axios.defaults.headers.common['Autorization'] = 'Bearer ce0c24f6cc74fa569602ae054bba9caa';

const APIfetchCities = async ({
    searchQuery = ''
} = {}) => {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric`);
    return console.log(response.data);
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
            APIfetchCities({ searchQuery: query }).then(setCities(cities))
        .catch(error => setError(error.message));
        }
        fetchCities();
    },[cities, query]);
    
    const onChangeQuery = query => setQuery(query);
    
    return (
        <>
            {error&&<h1>Something went wrong!</h1>}
            < SearchForm onSubmit={onChangeQuery} />
           
              <li key={cities.id}>
             <h1> {cities.name}</h1>
                {/* <p>Feels like: {cities.main.feels_like}°С</p> */}
                {/* <p>Current: {cities.main.temp}°С</p> */}
                {/* <p>Wind Speed: {cities.wind.speed} м/с</p> */}
                {/* <button>Delete</button>
                <button>Update</button> */}
            </li> 
        
        </>
    )
};
export default HomeView;