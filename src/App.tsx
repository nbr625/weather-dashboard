import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { getWeatherData, getForecastData } from './services/weatherService';

const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      setError(null);
      const weatherData = await getWeatherData(city);

      setCurrentWeather({
        temp: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        windSpeed: weatherData.wind.speed,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
      });

      const forecastData = await getForecastData(weatherData.coord.lat, weatherData.coord.lon);

      const forecastList = forecastData.daily.slice(1, 8).map((day: any) => ({
        date: new Date(day.dt * 1000).toLocaleDateString(),
        tempMax: day.temp.max,
        tempMin: day.temp.min,
        description: day.weather[0].description,
        icon: day.weather[0].icon,
      }));

      setForecast(forecastList);
    } catch (error) {
      setError('Unable to fetch full weather data. Please try again.');
    }

  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center my-4 font-bold">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-center text-red-500">{error}</p>}
      {currentWeather && <CurrentWeather weather={currentWeather} />}
      {forecast.length > 0 && <Forecast forecast={forecast} />}
    </div>
  );
};

export default App;
