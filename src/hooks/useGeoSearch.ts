import { useQuery } from '@tanstack/react-query'
import { fetchGeoResults } from '../api/geo'

export function useGeoSearch(query: string) {
  return useQuery({
    queryKey: ['geo', query],
    queryFn: () => fetchGeoResults(query),
    enabled: query.length >= 2,
    staleTime: 60_000,
  })
}
