# Weather Dashboard

This is a responsive weather dashboard application built with React and TypeScript. It displays current weather information, a 7-day forecast, and additional weather-related data for various cities.

## Features

- **Responsive Layout:** Adapts to both desktop and mobile screens.
- **City Search:** Allows users to search for weather data by city name.
- **Current Weather:** Displays current weather data including temperature, humidity, wind speed, and weather conditions.
- **7-Day Forecast:** Provides a 7-day weather forecast with daily temperature highs, lows, and weather conditions.
- **Error Handling:** Shows appropriate error messages for invalid city names or network issues.

## Setup

1. **Clone the repository:**

```sh
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```
Input your api key on the .env file located at the root.
if you don't have subscription tied to the One Call by Call plan tied to that api key, you will not see forecasts.

```sh
npm install
npm build
npm start
```

There are some tests you can run as well.

```sh
npm run test
```
