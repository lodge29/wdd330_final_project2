import { weatherData } from './weather_api.mjs';

export async function getForecastWeather(city) {
  return await weatherData('forecast', { q: city });
}

export function displayForecastWeather(data) {
  const dailyForecast = data.list.filter(item => item.dt_txt.includes('12:00:00'));
  let forcastWeatherHTML = '<h2>Daily Weather Forecast</h2>';
  // template for looping through JSON
  dailyForecast.forEach(day => {
    const date = new Date(day.dt * 1000).toLocaleDateString();
    const temp = Math.round(day.main.temp);
    forcastWeatherHTML += `
      <div>
        <h3>${date}</h3>
        <p>Temperature: ${temp}°F</p>
        <p>Weather: ${day.weather[0].description}</p>
      </div>
    `;
  });
  return forcastWeatherHTML;
}
