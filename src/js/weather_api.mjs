const api_key = import.meta.env.VITE_WEATHER_API_KEY; 

const api_url = 'https://api.openweathermap.org/data/2.5';

export async function weatherData(endpoint, params) {
  const url = new URL(`${api_url}/${endpoint}`);
  // set units as: imperial, metric, standard
  url.search = new URLSearchParams({ ...params, appid: api_key, units: 'imperial' });

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response Error');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};





/*
// First ENDPOINT
const url_currentWeather = 'https://api.openweathermap.org/data/2.5/weather';


// 
export async function getCurrentWeather(city) { 
    try { 
        // get openweathermap API 
        const response = await fetch(`${url_currentWeather}?q=${city}&appid=${api_key}`); 
        if (!response.ok) { 
            throw new Error('Bad Response'); 
        } 
        const data = await response.json(); 
        return data;
    } catch (error) { 
        throw error; 
        } 
    }
*/