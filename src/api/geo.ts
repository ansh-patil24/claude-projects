import { OPEN_METEO_GEO_BASE } from '../config'
import type { GeoResult } from '../types/geo'

export async function fetchGeoResults(query: string): Promise<GeoResult[]> {
  if (!query.trim()) return []
  const params = new URLSearchParams({ name: query, count: '5', language: 'en', format: 'json' })
  const res = await fetch(`${OPEN_METEO_GEO_BASE}/search?${params}`)
  if (!res.ok) throw new Error('Geocoding failed')
  const data = await res.json()
  return data.results ?? []
}
