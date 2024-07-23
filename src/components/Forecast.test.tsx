import React from 'react';
import { render, screen } from '@testing-library/react';
import Forecast from './Forecast';

const mockForecast = [
  {
    date: '2024-07-21',
    tempMax: 30,
    tempMin: 20,
    description: 'sunny',
    icon: '01d',
  },
  {
    date: '2024-07-22',
    tempMax: 28,
    tempMin: 18,
    description: 'cloudy',
    icon: '02d',
  },
];

describe('Forecast', () => {
  it('displays the 7-day forecast correctly', () => {
    render(<Forecast forecast={mockForecast} />);

    expect(screen.getByText('7-Day Forecast')).toBeInTheDocument();
    expect(screen.getByText('2024-07-21')).toBeInTheDocument();
    expect(screen.getByText('sunny')).toBeInTheDocument();
    expect(screen.getByText('Max: 30°C')).toBeInTheDocument();
    expect(screen.getByText('Min: 20°C')).toBeInTheDocument();
    expect(screen.getByAltText('sunny')).toBeInTheDocument();

    expect(screen.getByText('2024-07-22')).toBeInTheDocument();
    expect(screen.getByText('cloudy')).toBeInTheDocument();
    expect(screen.getByText('Max: 28°C')).toBeInTheDocument();
    expect(screen.getByText('Min: 18°C')).toBeInTheDocument();
    expect(screen.getByAltText('cloudy')).toBeInTheDocument();
  });
});
