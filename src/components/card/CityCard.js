import React from 'react';
import'./CityCard.css';
import { Link } from 'react-router-dom';


const CityCard = ({name,current,wind,desc,id,deleteBtn}) =>  {
   

    return (
        <li className="item" >
    <Link to={{pathname:`/cities/${id}`}}> 
    Подробней   
</Link>
    <div className="item">
    <h1 className="title">{desc} in {name}</h1>
    <p className="current">Current: {current}°С</p>
    <p className="wind">Wind Speed: {wind} м/с</p>
    <button>Обновить</button>   
    <button onClick={deleteBtn}>удалить</button>   
    </div> 

</li>
)};


export default CityCard;



