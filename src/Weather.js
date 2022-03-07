import React from "react";
import "./App.css"

export default function Weather() {
  return (
    <div className="Weather">
      <span>
        <form class="weather" id="forms">
          <input type="text" id="cityname" class="cityName" />
          <input
            class="search"
            type="submit"
            name="weather"
            id="weather"
            value="Search"
          />
        </form>
      </span>
      <button>Current</button>
      <div class="header">
        weather in
        <h1 id="hc">new york</h1>
        now
      </div>
      <p id="time">Current time: 10:00</p>
      <div class="sunny">
        <span>
          <h2 id="cityTemp">
            10<span id="centigrad"> °C|°F</span>
          </h2>
          <span class="sun">☀</span>
        </span>

        <div>
          Precipitation:<span id="prec">0</span>% <br />
          Humidity: <span id="hum">14</span>% <br />
          Wind: <span id="wind">8</span>km/h
        </div>
        <div className="confession">
            <a href="https://github.com/Nasrin200/weather-react" >Open source code</a>, by Nasrin Alizadeh
        </div>
      </div>
    </div>
  );
}
