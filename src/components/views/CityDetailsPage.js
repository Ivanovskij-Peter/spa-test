import Axios from 'axios';
import React, { Component } from 'react'


const API_KEY="7567821800ae8ecd80610d18b7dae680";



class CityDetailsPage extends Component {

    state={
        weather:"",
        feels_like:"",
        humidity:"",
        pressure:"",
        temp:null,
        temp_max:null,
        temp_min:null,
        main:"",
        wind:'',
        clouds:'',
        sys:''

    }
    async componentDidMount(){
        const {cityId}=this.props.match.params;
        const response=await Axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${API_KEY}`);
        this.setState({...response.data});
        console.log(response.data);
    }
    render(){
       
        return (
            <>
            <h1> {this.state.name}</h1>
            <p>Current: {this.state.main.temp}°С</p>
            <p>Pressure: {this.state.main.pressure} гПа</p>
            <p>Feels Like: {this.state.main.feels_like}°С</p>
            <p> Min temp: {this.state.main.temp_min}°С</p>
            <p>Max temp: {this.state.main.temp_max}°С</p>
            <p>Humidity: {this.state.main.humidity}%</p>
            <p>Wind: {this.state.wind.speed} м/с</p>
            <p>Clouds: {this.state.clouds.all} %</p>
           </>
        )
       
       
    }
};
export default CityDetailsPage;
