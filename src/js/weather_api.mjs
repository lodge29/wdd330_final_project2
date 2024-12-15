const apiKey = import.meta.env.VITE_WEATHER_API_KEY; 
const url = 'https://api.openweathermap.org/data/2.5/weather'; 
// 
export async function getWeather(city) { 
    try { 
        const response = await fetch(`${url}?q=${city}&appid=${apiKey}`); 
        if (!response.ok) { 
            throw new Error('Network response was not ok'); 
        } 
        const data = await response.json(); 
        return data;
        } catch (error) { 
            throw error; 
        } 
    }
