import React from "react";
import ClearDate from "./ClearDate";
import IconWeather from "./IconWeather";
import WeatherTemperature from "./WeatherTemperature";
import "./MainWeather.css";

export default function MainWeather (props){
return (
<div className="mainWeather"><h1>{props.data.city}</h1>
    <ul>
        <li>
            <ClearDate date= {props.data.date} /> </li>
        <hr /> 
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
     <div className="row mt-3">
       <div className="col-6">
        <div className="clearfix">
        <div className= "float-left">    
            <IconWeather code={props.data.icon} />
            </div>
      <div className="float-left">
          <WeatherTemperature celsius={props.data.temperature} />
         </div>
       </div>
</div> 
<div className="Details">
     <div className="col-6">
      <ul>
<li>
  Humidity: {props.data.humidity} %
</li>

<li>
    Wind: {props.data.wind}km/h</li>
      </ul>    
      </div> 
      </div>
    </div>
    </div>
);
}