import { weatherData } from './weather_api.mjs';

export async function getForecastWeather(city) {
  return await weatherData('forecast', { q: city });
}

export function displayForecastWeather(data) {
  const dailyForecast = data.list.filter(item => item.dt_txt.includes('12:00:00'));
  let forcastWeatherHTML = '<h2>Daily Weather Forecast</h2>';
  // template for looping through JSON
  dailyForecast.forEach(day => {
    //const date = new Date(day.dt * 1000).toLocaleDateString();
    // display date as '01/20'
    const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
    const temp = Math.round(day.main.temp);
    forcastWeatherHTML += `
      <div id="forecast-container">
        <div id="date">${date}</div>
        <div id="temp">${temp}°</div>
        <div id="weather">${day.weather[0].description}</div>
      </div>
    `;
  });
  return forcastWeatherHTML;
}
