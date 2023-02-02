import React, { useState } from 'react';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('fahrenheit');

    function convertToCelsius(event) {
        event.preventDefault();

        setUnit("celsius")
    }

    function convertToFahrenheit(event) {
        event.preventDefault();

        setUnit("fahrenheit")
    }

    if(unit === 'fahrenheit') {
    return (
        <div className='WeatherTemperature'>
            <p class="temperature-and-units">
                <span class="temp">{props.fahrenheit}</span><span id="fahrenheit-link" class="inactive-unit">°F</span><button href="#" id="celsius-link" class="unit" onClick={convertToCelsius}>°C</button>
            </p>
        </div>
    );
    } else {
        return (
        <div className='WeatherTemperature'>
            <p class="temperature-and-units">
                <span class="temp">{props.fahrenheit}</span><button href="#" id="fahrenheit-link" class="unit" onClick={convertToFahrenheit}>°F</button><span id="celsius-link" class="inactive-unit">°C</span>
            </p>
        </div>
    );
    }
}