
import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] =useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {setLoaded(false)}, [props.coordinates])

    function handleResponse(response) {
        setLoaded(true);
        setForecast(response.data.daily);
    }

    if(loaded) {
        return (
        <div className="WeatherForecast">
            <div id="forecast">
            {forecast.map(function(dailyForecast, index) {
                return (
                    <WeatherForecastDay data={dailyForecast} key={index}/>
                    )
                })}
                </div>
         
        </div>)
    } else {
        const apiKey = "f3009e4852fa0a079dab291dabf020c4";
        let lat = props.coordinates.lat;
        let lon = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    
        axios.get(apiUrl).then(handleResponse);
        return null;
    };
}