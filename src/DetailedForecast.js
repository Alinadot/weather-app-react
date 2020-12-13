import React, { useState } from "react";
import PreviewForecast from "./PreviewForecast";
import axios from "axios";
import "./DetailedForecast.css";

export default function DetailedForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);


    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
        return (
        <div className="Detailed">
        <PreviewForecast data={forecast.list[0]} />
        <PreviewForecast data={forecast.list[1]} />
        <PreviewForecast data={forecast.list[2]} />
        <PreviewForecast data={forecast.list[3]} />
        <PreviewForecast data={forecast.list[4]} />
        </div>
        );
    } else {
let apiKey="10844e995ee350a31ff9d6258cf6674b";
let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleForecastResponse);

return null;
 }
}