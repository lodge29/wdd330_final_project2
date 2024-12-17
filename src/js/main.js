import { getCurrentWeather, displayCurrentWeather } from "./currentWeather.mjs";
import {
  getForecastWeather,
  displayForecastWeather,
} from "./forecastWeather.mjs";

const cityInput = document.querySelector(".cityInput");
const weatherButton = document.querySelector(".weatherButton");
const weatherData = document.querySelector(".weatherData");

weatherButton.addEventListener("click", async () => {
  const city = cityInput.value;
  if (city) {
    try {
      const currentWeather = await getCurrentWeather(city);
      const forecastWeather = await getForecastWeather(city);
      // output each template with data
      weatherData.innerHTML = ` 
        ${displayCurrentWeather(currentWeather)}
        ${displayForecastWeather(forecastWeather)}<br>
      `;
      // catch 404 error?
    } catch (error) {
      weatherData.innerHTML = "<p>Error fetching weather data.</p>";
    }
  }
});

/*
function displayWeather( forecast) {
  const dailyForecast = forecast.list.filter(item => item.dt_txt.includes("12:00:00")); // Filter data for 12:00 PM each day
  weatherData.innerHTML = "<h2>Daily Weather Forecast</h2>";
  dailyForecast.forEach(day => {
    const date = new Date(day.dt * 1000).toLocaleDateString();
    const temp = Math.round(day.main.temp);
    weatherData.innerHTML += `
      <div>
        <h3>${date}</h3>
        <p>Temperature: ${temp}°F</p>
        <p>Weather: ${day.weather[0].description}</p>
      </div>
    `;
  });

  
  // add object name: coord, weather, main, visibility,
  // wind, clouds, sys, timezone, id, name, cod
  const { name, weather, main, wind } = current;
  // temp non-decimal
  const temp = Math.round(main.temp);
  const temp_min = Math.round(main.temp_min);
  const temp_max = Math.round(main.temp_max);
  const wind_speed = Math.round(wind.speed);
  weatherData.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${temp}°F</p>
    <p>Weather: ${weather[0].description}</p>
    <p>Humidity: ${main.humidity}%</p>
    <p>L: ${temp_min}°F</p>
    <p>H: ${temp_max}°F</p>
    <p>Wind Speed: ${wind_speed} mph</p>
    <h3>Forecast</h3>
    <p>${JSON.stringify(forecast.city.coord)}</p>
  `;
}*/

/*

import { getCurrentWeather } from "./weather_api.mjs";
const cityInput = document.querySelector(".cityInput");
const weatherButton = document.querySelector(".weatherButton");
const weatherData = document.querySelector(".weatherData");

weatherButton.addEventListener("click", async () => {
  const city = cityInput.value;
  if (city) {
    try {
      const data = await getCurrentWeather(city);
      displayWeather(data);
    } catch (error) {
      // insert into class with name .weatherData
      weatherData.innerHTML =
        "<p>Error fetching weather data. Please try again.</p>";
    }
  }
});

// template for displaying weather
function displayWeather(data) {
  const { name, main, weather } = data;
  weatherData.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Weather: ${weather[0].description}</p>
  `;
}
*/
