import Axios from 'axios';
import React, { Component } from 'react'


const API_KEY="e3094a3d5e6dcec4e3066ca8dd7ee7ae";
class CityDetailsPage extends Component {

    state={
        feels_like:null,
        humidity:null,
        pressure:null,
        temp:null,
        temp_max:null,
        temp_min:null,
        main:''

    }
    async componentDidMount(){
        const {cityId}=this.props.match.params;
        const response=await Axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`);
        this.setState({...response.data});
        console.log(response.data);
    }
    render(){
       
        return (
            <>
            {/* <h1>{name}</h1> */}
           
           </>
        )
       
       
    }
};
export default CityDetailsPage;
