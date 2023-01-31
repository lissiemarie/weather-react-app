import React from "react";
import axios from "axios";
import { Dna } from 'react-loader-spinner'


export default function Weather() {

    function handleResponse(response) {
        alert(`The weather in ${city} is ${Math.round(response.data.main.temp)}°F`)
    }

    let apiKey = "40dfbc5bab159e395434bbfed3c3f9ef";
    let city = "Denver";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return (<body>
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
        >open-sourced on GitHub</a
      >
      and
      <a href="https://app.netlify.com/" target="_blank">hosted on Netlify</a>
    </p>
    <script type="text/javascript" src="src/index.js"></script>
  </body>)
};