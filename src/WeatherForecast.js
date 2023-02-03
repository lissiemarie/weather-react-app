import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div id="forecast">
                <div>
                    <div class="forecast-day">Thu</div>
                    <WeatherIcon code="01d" size={30} />
                    <div><span class="forecast-temp-max">19</span> | <span class="forecast-temp-min">10</span></div>
                </div>
                <div>
                    <div class="forecast-day">Thu</div>
                    <WeatherIcon code="01d" size={30} />
                    <div><span class="forecast-temp-max">19</span> | <span class="forecast-temp-min">10</span></div>
                </div>
                <div>
                    <div class="forecast-day">Thu</div>
                    <WeatherIcon code="01d" size={30} />
                    <div><span class="forecast-temp-max">19</span> | <span class="forecast-temp-min">10</span></div>
                </div>
                <div>
                    <div class="forecast-day">Thu</div>
                    <WeatherIcon code="01d" size={30} />
                    <div><span class="forecast-temp-max">19</span> | <span class="forecast-temp-min">10</span></div>
                </div>
                <div>
                    <div class="forecast-day">Thu</div>
                    <WeatherIcon code="01d" size={30} />
                    <div><span class="forecast-temp-max">19</span> | <span class="forecast-temp-min">10</span></div>
                </div>
                <div>
                    <div class="forecast-day">Thu</div>
                    <WeatherIcon code="01d" size={30} />
                    <div><span class="forecast-temp-max">19</span> | <span class="forecast-temp-min">10</span></div>
                </div>
                <div>
                    <div class="forecast-day">Thu</div>
                    <WeatherIcon code="01d" size={30} />
                    <div><span class="forecast-temp-max">19</span> | <span class="forecast-temp-min">10</span></div>
                </div>
                <div>
                    <div class="forecast-day">Thu</div>
                    <WeatherIcon code="01d" size={30} />
                    <div><span class="forecast-temp-max">19</span> | <span class="forecast-temp-min">10</span></div>
                </div>
            </div>
        </div>
    )
}