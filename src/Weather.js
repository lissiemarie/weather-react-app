import React, { useState } from "react";
import axios from "axios";
import { Dna } from 'react-loader-spinner'
import FormattedDate from "./FormattedDate";

import "./Weather.css"

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
    function handleResponse(response) {
      setWeatherData({
        temperature: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        city: response.data.name,
        description: response.data.weather[0].description,
        feels: Math.round(response.data.main.feels_like),
        high: Math.round(response.data.main.temp_max),
        low: Math.round(response.data.main.temp_min),
        iconUrl : `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        date: new Date(response.data.dt * 1000)
      })

        setReady(true);
    }

    if (ready) {
      return (
      <body>
        <div class="main">
          <form id="input-form">
            <input type="text" placeholder="Enter city here" id="city-input" />
            <input type="submit" value="search" id="search-button" />
          </form>
          <div class="city-day-time">
            <h1>{weatherData.city}</h1>
            <p class="date-time">Last updated: <FormattedDate date={weatherData.date}/></p>
            <p class="temperature-and-units">
              <span class="temp">{weatherData.temperature}</span><button href="#" id="fahrenheit-link" class="units">°F</button><button href="#" id="celsius-link" class="units-link">°C</button>
            </p>
            <div class="high-low">
              <p>High: <strong>{weatherData.high}°F</strong></p>
              <p>Low: <strong>{weatherData.low}°F</strong></p>
            </div>
            <p class="current-weather">{weatherData.description}</p>
          </div>
          <div class="feels-like">
            <p>Feels like: {weatherData.feels}°F</p>
          </div>
          <div class="weather">
            <p class="humidity">Humidity: {weatherData.humidity}%</p>
            <span class="current-emoji">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            </span>
            <p class="wind">Wind: {weatherData.wind}mph</p>
          </div>
          {/* <div class="five-day" id="forecast"></div> */}
        </div>
        <p class="footer">
          Coded by Elyssa Creed and is 
          <a
            href="https://github.com/lissiemarie/SheCodes-github-lesson"
            target="_blank"
            rel="noreferrer"> open-sourced on GitHub </a
          >
          and 
          <a href="https://app.netlify.com/" target="_blank" rel="noreferrer"> hosted on Netlify</a>
        </p>
      </body>
      );
    } else {
        const apiKey = "40dfbc5bab159e395434bbfed3c3f9ef";
        let city = "Denver";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    
        axios.get(apiUrl).then(handleResponse);

        return (<Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />)
    }


    
};