import React from 'react';

interface CurrentWeatherProps {
  weather: {
    temp: number;
    humidity: number;
    windSpeed: number;
    description: string;
    icon: string;
  };
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weather }) => {
  return (
    <div className="text-center my-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-2 font-semibold">Current Weather</h2>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} className="mx-auto" />
      <p data-testid="weather-description" className="capitalize text-lg">{weather.description}</p>
      <p data-testid="weather-temperature">Temperature: {weather.temp}°C</p>
      <p data-testid="weather-humidity">Humidity: {weather.humidity}%</p>
      <p data-testid="weather-wind-speed">Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
};

export default CurrentWeather;
