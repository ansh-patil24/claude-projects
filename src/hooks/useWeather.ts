import { useQuery } from '@tanstack/react-query'
import { fetchWeather } from '../api/weather'

export function useWeather(lat: number, lon: number) {
  return useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => fetchWeather(lat, lon),
    enabled: lat !== 0 && lon !== 0,
    staleTime: 300_000,
  })
}
