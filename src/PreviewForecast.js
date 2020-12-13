import React from "react";
import IconWeather from "./IconWeather";
import "./PreviewForecast.css";

export default function PreviewForecast(props) {
function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
}

function temperature () {
let temperature= Math.round(props.data.main.temp);
return `${temperature}°C `;
}

return (
    <div className="PreviewForecast">
     {hours()} {" "} 
     <IconWeather code={props.data.weather[0].icon} />
    {" "} {temperature()}
    </div>
);
}
