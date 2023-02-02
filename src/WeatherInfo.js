import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
                <div class="city-day-time">
                    <h1>{props.data.city}</h1>
                    <p class="date-time">Last updated: <FormattedDate date={props.data.date}/></p>
                    <WeatherTemperature fahrenheit={props.data.temperature} high={props.data.high} low={props.data.low} feels={props.data.feels}/>
                    <p class="current-weather">{props.data.description}</p>
                </div>
                <div class="weather">
                    <p class="humidity">Humidity: {props.data.humidity}%</p>
                    <span class="current-emoji">
                    <WeatherIcon code={props.data.icon} />
                    </span>
                    <p class="wind">Wind: {props.data.wind}mph</p>
                </div>
                <div class="forecast"></div>
        </div>
    );
}