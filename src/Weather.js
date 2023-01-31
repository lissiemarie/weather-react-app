import React from "react";
import axios from "axios";
import { Dna } from 'react-loader-spinner';

import "./Weather.css"

export default function Weather(event) {
  event.preventDefault();

    function handleResponse(response) {
      fahrenheitTemperature = response.data.main.temp;
      //temp
      let temp = document.querySelector(".temp");
      let currentTemp = Math.round(fahrenheitTemperature);
      temp.innerHTML = `${currentTemp}`;
    }

    //Format date function
    const formatDay = timestamp => {
      let date = new Date(timestamp * 1000);
      let day = date.getDay();
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

      return days[day];
    }

    let apiKey = "40dfbc5bab159e395434bbfed3c3f9ef";
    let city = "Denver";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

        //Date and Time
    let now = new Date();
    let dayTime = document.querySelector(".date-time");

    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let currentDay = daysOfWeek[now.getDay()];
    let currentHour = now.getHours();
    let currentMinutes = now.getMinutes();

    if (currentMinutes >= 10) {
      dayTime.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;
    } else {
      dayTime.innerHTML = `${currentDay} ${currentHour}:0${currentMinutes}`;
    }
    axios.get(apiUrl).then(handleResponse);

//All doc selectors
const showCurrentTempSearch = (response) => {

    
    //city
    let city = document.querySelector("h1");
    let currentCity = response.data.city;
    city.innerHTML = currentCity;
    //weather
    let weather = document.querySelector(".current-weather");
    let currentWeather = response.data.condition.description;
    weather.innerHTML = currentWeather;
    //humidity
    let humidity = document.querySelector(".humidity");
    let currentHumidity = response.data.temperature.humidity;
    humidity.innerHTML = `Humidity: ${currentHumidity}%`;
    //wind
    let wind = document.querySelector(".wind");
    let currentWind = Math.round(response.data.wind.speed);
    wind.innerHTML = `Wind: ${currentWind} mph`;
    
    let emoji = document.querySelector(".current-emoji");
    let currentEmoji = response.data.condition.icon_url;
    emoji.setAttribute("src", currentEmoji);

  };

//Celsius conversion

const showCelsiusTemp = event => {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temp");
  let celsiusValue = (temperatureElement.innerHTML - 32) * 5/9;
  temperatureElement.innerHTML = Math.round(celsiusValue);
}

//Fahrenheit conversion

const showFahrenheitTemp = event => {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temp");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

//Event Listeners

let fahrenheitTemperature = null;

// let form = document.querySelector("#input-form");
// form.addEventListener("submit", handleSubmit);


let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemp);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);




    return (
      <body>
    <div class="main">
      <form id="input-form">
        <input type="text" placeholder="Enter city here" id="city-input" />
        <input type="submit" value="search" id="search-button" />
      </form>
      <div class="city-day-time">
        <h1></h1>
        <p>Last updated:<span class="date-time"></span></p>
        <p class="temperature-and-units">
          <span class="temp"></span
          ><a href="#" id="fahrenheit-link" class="units">°F |</a
          ><a href="#" id="celsius-link" class="units-link">°C</a>
        </p>
        <p class="current-weather"></p>
      </div>
      <div class="weather">
        <p class="humidity"></p>
        <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  class="loader"
/>
        <p class="wind"></p>
      </div>
      <div class="five-day" id="forecast"></div>
    </div>
    <p class="footer">
      Coded by Elyssa Creed and is
      <a
        href="https://github.com/lissiemarie/SheCodes-github-lesson"
        target="_blank"
         rel="noreferrer">open-sourced on GitHub</a
      >
      and
      <a href="https://app.netlify.com/" target="_blank" rel="noreferrer">hosted on Netlify</a>
    </p>
  </body>
    )
};