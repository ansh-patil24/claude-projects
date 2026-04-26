import { OPEN_METEO_BASE } from '../config'
import type { WeatherResponse } from '../types/weather'

export async function fetchWeather(lat: number, lon: number): Promise<WeatherResponse> {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: [
      'temperature_2m', 'relative_humidity_2m', 'apparent_temperature',
      'precipitation', 'weather_code', 'cloud_cover', 'surface_pressure',
      'wind_speed_10m', 'wind_direction_10m', 'wind_gusts_10m', 'visibility',
    ].join(','),
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,sunrise,sunset',
    timezone: 'auto',
    forecast_days: '6',
    wind_speed_unit: 'ms',
  })
  const res = await fetch(`${OPEN_METEO_BASE}/forecast?${params}`)
  if (!res.ok) throw new Error('Weather fetch failed')
  return res.json()
}
