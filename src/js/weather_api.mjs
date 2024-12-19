const api_key = import.meta.env.VITE_WEATHER_API_KEY; 
const api_url = 'https://api.openweathermap.org/data/2.5';

export async function weatherData(endpoint, params) {
  // set 'Utah' in query as default
  if (params.q) { params.q = `${params.q},Utah`; }

  const url = new URL(`${api_url}/${endpoint}`);
  // set units as: imperial, metric, standard
  url.search = new URLSearchParams({ ...params, appid: api_key, units: 'imperial' });
  
  /* *** testing purposes ***
  alert(`Full URL: ${url.toString()}`);
  */

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Weather API Response Error');
    }
    return await response.json();
  } catch (error) {
    console.error('Error Fetching Weather API Data:', error);
    throw error;
  }
};