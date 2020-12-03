import React from "react";
import "./Weather.css";

export default function Weather() {
return <div className="Weather">
    <form>
      <div className="row">
      <div className="col-9">  
        <input type="search" placeholder="Type a city..." className="form-control"/>
        </div> 
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary" />
   </div>
    </div>
    </form>
    <h1>Amsterdam</h1>
    <ul>
        <li>Thursday 00:00 </li>
        <li> Rainy </li>
    </ul>
    <div className="row">
       <div className="col-6">
 <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="Rainy"/>
       3°C
       </div> 
      <div className="col-6">
      <ul>
<li> 
    Percipitation:94%
</li>
<li>
    Humidity:90%
</li>
<li>
    Wind:31 km/h
</li>
      </ul>    
      </div> 
    </div>
    </div>
}