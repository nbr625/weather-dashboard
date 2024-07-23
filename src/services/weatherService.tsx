import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export const getWeatherData = async (cityName: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching current weather data');
  }
};

export const getForecastData = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather forecast data');
  }
};
