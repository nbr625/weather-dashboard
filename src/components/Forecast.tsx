import React from 'react';

interface ForecastProps {
  forecast: {
    date: string;
    tempMax: number;
    tempMin: number;
    description: string;
    icon: string;
  }[];
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  return (
    <div className="text-center mt-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-2 font-semibold">7-Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {forecast.map((day, index) => (
          <div key={index} className="p-2 border rounded-lg">
            <p className="font-semibold">{day.date}</p>
            <img src={`http://openweathermap.org/img/wn/${day.icon}.png`} alt={day.description} className="mx-auto" />
            <p className="capitalize">{day.description}</p>
            <p>Max: {day.tempMax}°C</p>
            <p>Min: {day.tempMin}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
