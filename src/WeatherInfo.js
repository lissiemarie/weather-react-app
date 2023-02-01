import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
                <div class="city-day-time">
                    <h1>{props.data.city}</h1>
                    <p class="date-time">Last updated: <FormattedDate date={props.data.date}/></p>
                    <p class="temperature-and-units">
                    <span class="temp">{props.data.temperature}</span><button href="#" id="fahrenheit-link" class="units">°F</button><button href="#" id="celsius-link" class="units-link">°C</button>
                    </p>
                    <div class="high-low">
                        <p>High: <strong>{props.data.high}°F</strong></p>
                        <p>Low: <strong>{props.data.low}°F</strong></p>
                    </div>
                    <p class="current-weather">{props.data.description}</p>
                </div>
                <div class="feels-like">
                    <p>Feels like: {props.data.feels}°F</p>
                </div>
                <div class="weather">
                    <p class="humidity">Humidity: {props.data.humidity}%</p>
                    <span class="current-emoji">
                    <img src={props.data.iconUrl} alt={props.data.description} />
                    </span>
                    <p class="wind">Wind: {props.data.wind}mph</p>
                </div>
                <div class="forecast"></div>
        </div>
    );
}