import React, { useState } from "react";
import axios from "axios";
import { Dna } from 'react-loader-spinner'
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css"

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity)
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
    function handleResponse(response) {
      setWeatherData({
        coordinates: response.data.coord,
        temperature: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        city: response.data.name,
        description: response.data.weather[0].description,
        feels: Math.round(response.data.main.feels_like),
        high: Math.round(response.data.main.temp_max),
        low: Math.round(response.data.main.temp_min),
        icon : response.data.weather[0].icon,
        date: new Date(response.data.dt * 1000)
      })

        setReady(true);
    }

    function search() {
      const apiKey = "f3009e4852fa0a079dab291dabf020c4";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    
      axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
      event.preventDefault();
      //Search for a city
      search();
    }

    function handleCityChange(event) {
      setCity(event.target.value);
    }

    if (ready) {
      return (
        <div class="main">
          <form id="input-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter city here" id="city-input" onChange={handleCityChange}/>
            <input type="submit" value="search" id="search-button" />
          </form>
          <WeatherInfo data={weatherData}/>
          <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
      );
    } else {
        search();

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