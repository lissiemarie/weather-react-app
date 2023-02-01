import React, { useState } from "react";
import axios from "axios";
import { Dna } from 'react-loader-spinner'
import WeatherInfo from "./WeatherInfo";

import "./Weather.css"

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity)
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

    function search() {
      const apiKey = "40dfbc5bab159e395434bbfed3c3f9ef";
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