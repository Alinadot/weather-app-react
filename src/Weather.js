import React, { useState } from "react";
import axios from "axios";
import MainWeather from "./MainWeather";
import DeatailedForecast from "./DetailedForecast";
import "./Weather.css";

export default function Weather(props) {
   
const [weatherData, setWeatherData]= useState({ ready:false });
const [city, setCity] = useState(props.defaultCity);
function handleResponse(response) {
console.log(response.data);
setWeatherData ({
ready: true,
temperature:response.data.main.temp,
humidity:response.data.main.humidity,
date:new Date(response.data.dt * 1000),
wind: response.data.wind.speed,
description:response.data.weather[0].description,
icon:response.data.weather[0].icon,
city: response.data.name
});
}

function search(){
const apiKey="10844e995ee350a31ff9d6258cf6674b";
let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse); 

}

function handleSubmit(event){
    event.preventDefault();
    search();

}

function handleCityChange(event){
setCity(event.target.value);
}

if (weatherData.ready){
return (
<div className="Weather">
<form onSubmit={handleSubmit}>
<div className="row">
<div className="col-9">  
<input type="search" placeholder="Type a city..." className="form-control"autoFocus="on" onChange={handleCityChange} />
</div> 
<div className="col-3">
<input type="submit" value="Search" className="btn btn-warning" />
   </div>
    </div>
    </form>
    <MainWeather data={weatherData} />
    <DeatailedForecast city={weatherData.city}/>
    </div>
    
);
} 
else {
search();
return "Loading...";
}
}
