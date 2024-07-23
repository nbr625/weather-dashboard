import React from 'react';
import { render, screen } from '@testing-library/react';
import CurrentWeather from './CurrentWeather';

const mockWeather = {
  temp: 25,
  humidity: 60,
  windSpeed: 5,
  description: 'clear sky',
  icon: '01d',
};

describe('CurrentWeather', () => {
  it('displays the current weather information correctly', () => {
    render(<CurrentWeather weather={mockWeather} />);

    expect(screen.getByText('Current Weather')).toBeInTheDocument();
    expect(screen.getByText('Temperature: 25°C')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 60%')).toBeInTheDocument();
    expect(screen.getByText('Wind Speed: 5 m/s')).toBeInTheDocument();
    expect(screen.getByText('clear sky')).toBeInTheDocument();
    expect(screen.getByAltText('clear sky')).toBeInTheDocument();
  });
});
