import { getCurrentWeather, displayCurrentWeather } from "./currentWeather.mjs";
import {
  getForecastWeather,
  displayForecastWeather,
} from "./forecastWeather.mjs";

const cityInput = document.querySelector(".cityInput");
const weatherButton = document.querySelector(".weatherButton");
const weatherData = document.querySelector(".weatherData");
const wrapper3 = document.querySelector(".wrapper-3");

// Utah cities API
const ut_cities_api = 'https://services1.arcgis.com/99lidPhWCzftIe9K/arcgis/rest/services/CitiesTownsLocations/FeatureServer/0/query?where=1%3D1&outFields=NAME,COUNTY&outSR=4326&f=json'

// get Utah cities
fetch(ut_cities_api)
  .then(response => response.json())
  .then(data => {
    // LOOP and SORT city names
    const cityNames = data.features.map(feature => feature.attributes.NAME);
    cityNames.sort();

    // List each city name in dropdown
    cityNames.forEach(name => {
      const option = document.createElement('option');
      option.value = name;
      // Learned this is required to display city names. Are blank without it.
      option.textContent = name;
      cityInput.appendChild(option);
    })
      const option = document.createElement('option');
      option.value = feature.attributes.NAME;
      option.textContent = feature.attributes.NAME;
      cityInput.appendChild(option);
    })
  .catch(error => error);

  // EVENT listener
weatherButton.addEventListener("click", async () => {
  const city = cityInput.value;
  if (city) {
    try {
      const currentWeather = await getCurrentWeather(city);
      const forecastWeather = await getForecastWeather(city);
      // output each template and data
      weatherData.innerHTML = ` 
        ${displayCurrentWeather(currentWeather)}
      `;
      wrapper3.innerHTML = `
      ${displayForecastWeather(forecastWeather)}<br>
      `;
      // catch 404 error?
    } catch (error) {
      weatherData.innerHTML = "<p id='validation'>*** Error fetching weather data ***</p>";
    }
  } else {
    weatherData.innerHTML = "<p id='validation'>*** Please select a city ***</p>";
  }
});
