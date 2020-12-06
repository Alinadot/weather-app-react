import React from "react";
import "./Weather.css";

export default function Weather() {
return <div className="Weather">
    <form>
      <div className="row">
      <div className="col-9">  
        <input type="search" placeholder="Type a city..." className="form-control"autoFocus="on" />
        </div> 
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-warning" />
   </div>
    </div>
    </form>
    <h1>Amsterdam</h1>
    <ul>
        <li>Thursday 00:00 </li>
        <li> Rainy </li>
    </ul>
 
    <div className="row mt-3">
       <div className="col-6">
        <div className="clearfix">
        <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="Rainy" className="float-left"/>
      <div className="float-left">
      <span className="temperature">3</span> 
      <span className="unit">°C</span>
      </div>
       </div>
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