import { useQuery } from '@tanstack/react-query'
import { fetchAirQuality } from '../api/airQuality'

export function useAirQuality(lat: number, lon: number) {
  return useQuery({
    queryKey: ['airQuality', lat, lon],
    queryFn: () => fetchAirQuality(lat, lon),
    enabled: lat !== 0 && lon !== 0,
    staleTime: 300_000,
  })
}
