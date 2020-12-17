import React from 'react';
import'./CityCard.css';
import { Link } from 'react-router-dom';


const CityCard = ({name,current,wind,desc,id}) => (
    <Link to={{pathname:`/cities/${id}`}}>    
    <div className="item">
    <h1 className="title">{desc} in {name}</h1>
    <p className="current">Current: {current}°С</p>
    <p className="wind">Wind Speed: {wind} м/с</p>
    <button>Delete</button>
    <button>Обновить</button>   
    </div> 
</Link>
)
export default CityCard;



