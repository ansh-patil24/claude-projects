export interface WeatherCurrent {
  time: string
  interval: number
  temperature_2m: number
  relative_humidity_2m: number
  apparent_temperature: number
  precipitation: number
  weather_code: number
  cloud_cover: number
  surface_pressure: number
  wind_speed_10m: number
  wind_direction_10m: number
  wind_gusts_10m: number
  visibility: number
}

export interface WeatherDaily {
  time: string[]
  weather_code: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  uv_index_max: number[]
  sunrise: string[]
  sunset: string[]
}

export interface WeatherResponse {
  latitude: number
  longitude: number
  timezone: string
  timezone_abbreviation: string
  utc_offset_seconds: number
  current: WeatherCurrent
  daily: WeatherDaily
}

export interface AirQualityCurrent {
  time: string
  interval: number
  pm10: number
  pm2_5: number
  carbon_monoxide: number
  nitrogen_dioxide: number
  sulphur_dioxide: number
  ozone: number
  european_aqi: number
}

export interface AirQualityResponse {
  current: AirQualityCurrent
}

export interface RainViewerFrame {
  time: number
  path: string
}

export interface RainViewerData {
  generated: number
  host: string
  radar: {
    past: RainViewerFrame[]
    nowcast?: RainViewerFrame[]
  }
  satellite: {
    infrared: RainViewerFrame[]
  }
}
