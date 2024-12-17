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
    <h2>${name}</h2>
    <p>Temperature: ${temperature}°F</p>
    <p>Minimum Temperature: ${tempMin}°F</p>
    <p>Humidity: ${humidity}%</p>
    <p>Weather: ${weather[0].description}</p>
    <p>Wind Speed: ${windSpeed} mph</p>
  `;
}



/*
import { weatherData } from './weather_api.mjs';

export async function getCurrentWeather(city) {
  return await weatherData('weather', { q: city });
}
*/