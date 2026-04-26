import { OPEN_METEO_AQ_BASE } from '../config'
import type { AirQualityResponse } from '../types/weather'

export async function fetchAirQuality(lat: number, lon: number): Promise<AirQualityResponse> {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,european_aqi',
  })
  const res = await fetch(`${OPEN_METEO_AQ_BASE}/air-quality?${params}`)
  if (!res.ok) throw new Error('Air quality fetch failed')
  return res.json()
}
