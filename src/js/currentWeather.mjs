import { weatherData } from './weather_api.mjs';

export async function getCurrentWeather(city) {
  return await weatherData('weather', { q: city });
}

export function displayCurrentWeather(data) {
  const { name, main, weather, wind} = data;
  const temperature = Math.round(main.temp);
  const tempMin = Math.round(main.temp_min);
  const humidity = main.humidity;
  const windSpeed = Math.round(wind.speed);

  return `
    <h2>${name}, UT</h2>
    <p class="current-temp">${temperature}°</p>
    <div class="current-weather-1">

    <div id="current-weather-div">
    <p>Min Temp:</p> 
    <p>${tempMin}°</p>
    </div>

    <div id="current-weather-div">
    <p>Humidity:</p> 
    <p>${humidity}%</p>
    </div>

    <div id="current-weather-div">
    <p>Weather:</p> 
    <p>${weather[0].description}</p>
    </div>

    <div id="current-weather-div">
    <p>Wind Speed:</p> 
    <p>${windSpeed} mph</p>
    </div>

    </div>
  `;
};