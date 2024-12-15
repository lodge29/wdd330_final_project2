import { getWeather } from './weather_api.mjs';

const cityInput = document.querySelector('.cityInput');
const weatherButton = document.querySelector('.weatherButton');
const weatherData = document.querySelector('.weatherData');

weatherButton.addEventListener('click', async () => {
  const city = cityInput.value;
  if (city) {
    try {
      const data = await getWeather(city);
      displayWeather(data);
    } catch (error) {
      weatherData.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
    }
  }
});

function displayWeather(data) {
  const { name, main, weather } = data;
  weatherData.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Weather: ${weather[0].description}</p>
  `;
}
