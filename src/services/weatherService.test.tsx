import axios from 'axios';
import { getWeatherData, getForecastData } from './weatherService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock the environment variable
const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

describe('weatherService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getWeatherData', () => {
    it('fetches current weather data successfully from API', async () => {
      const mockWeatherData = {
        main: { temp: 25, humidity: 60 },
        wind: { speed: 5 },
        weather: [{ description: 'clear sky', icon: '01d' }],
        coord: { lat: 51.5074, lon: -0.1278 },
      };

      mockedAxios.get.mockResolvedValueOnce({ data: mockWeatherData });

      const data = await getWeatherData('Oakland');

      expect(data).toEqual(mockWeatherData);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        `https://api.openweathermap.org/data/2.5/weather?q=Oakland&appid=${apiKey}`
      );
    });

    it('throws an error when API request fails', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

      await expect(getWeatherData('Oakland')).rejects.toThrow('Error fetching current weather data');
    });
  });

  describe('getForecastData', () => {
    it('fetches forecast data successfully from API', async () => {
      const mockForecastData = {
        daily: [
          { temp: { day: 25, min: 20, max: 30 }, weather: [{ description: 'clear sky', icon: '01d' }] },
          // Add more days if needed
        ],
      };

      mockedAxios.get.mockResolvedValueOnce({ data: mockForecastData });

      const data = await getForecastData(51.5074, -0.1278);

      expect(data).toEqual(mockForecastData);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        `https://api.openweathermap.org/data/3.0/onecall?lat=51.5074&lon=-0.1278&exclude=hourly,minutely&appid=${apiKey}`
      );
    });

    it('throws an error when API request fails', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

      await expect(getForecastData(51.5074, -0.1278)).rejects.toThrow('Error fetching weather forecast data');
    });
  });
});
