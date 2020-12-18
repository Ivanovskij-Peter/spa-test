import React from 'react';
import'./CityCard.css';
import { Link } from 'react-router-dom';


const CityCard = ({name,current,desc,id,deleteBtn}) =>  {
  

    return (
    <li  >
    <div className="item" >
    <h1 className="title">{desc} in {name}</h1>
    <p className="current">Current: {current}°С</p>
    <div>
    {/* <button onClick={updateBtn}>Обновить</button>    */}
    <button onClick={deleteBtn}>Удалить</button> 
    <Link to={{pathname:`/cities/${id}`}}>
    <button>Подробней</button>
    </Link>
    </div>
    </div> 
    </li>
)};


export default CityCard;



