const en = {
  search: { placeholder: 'Search for a city...' },
  landing: {
    title: 'Search for a city to get started',
    description: 'Get real-time weather, 5-day forecasts, air quality, UV index, and an interactive map.',
  },
  current: { feelsLike: 'Feels like', high: 'High', low: 'Low', error: 'Failed to load weather data' },
  forecast: { title: '5-Day Forecast', error: 'Failed to load forecast' },
  aqi: {
    title: 'Air Quality', error: 'Air quality unavailable',
    good: 'Good', fair: 'Fair', moderate: 'Moderate', poor: 'Poor', veryPoor: 'Very Poor', extremelyPoor: 'Extremely Poor',
  },
  wind: { title: 'Wind', gusts: 'Gusts', error: 'Wind data unavailable' },
  uv: {
    title: 'UV Index', error: 'UV data unavailable',
    low: 'Low', moderate: 'Moderate', high: 'High', veryHigh: 'Very High', extreme: 'Extreme',
  },
  atmosphere: {
    title: 'Atmosphere', error: 'Atmosphere data unavailable',
    humidity: 'Humidity', pressure: 'Pressure', visibility: 'Visibility',
  },
  wmo: {
    '0': 'Clear sky', '1': 'Mainly clear', '2': 'Partly cloudy', '3': 'Overcast',
    '45': 'Fog', '48': 'Rime fog',
    '51': 'Light drizzle', '53': 'Drizzle', '55': 'Dense drizzle',
    '61': 'Light rain', '63': 'Rain', '65': 'Heavy rain',
    '71': 'Light snow', '73': 'Snow', '75': 'Heavy snow', '77': 'Snow grains',
    '80': 'Rain showers', '81': 'Moderate showers', '82': 'Violent showers',
    '85': 'Snow showers', '86': 'Heavy snow showers',
    '95': 'Thunderstorm', '96': 'Thunderstorm with hail', '99': 'Heavy thunderstorm',
    unknown: 'Unknown',
  },
}

export default en
