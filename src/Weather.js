import React from "react";
import axios from "axios";
import { TailSpin } from 'react-loader-spinner';

export default function Weather() {

    function handleResponse(response) {
        alert(`The weather in ${city} is ${Math.round(response.data.main.temp)}°F`)
    }

    let apiKey = "40dfbc5bab159e395434bbfed3c3f9ef";
    let city = "Dallas";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return (
    <TailSpin
    height = "80"
    width = "80"
    radius = "1"
    color = 'green'
    ariaLabel = 'tail-spin-loading'     
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />);
}