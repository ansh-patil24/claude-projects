import { useQuery } from '@tanstack/react-query'
import { fetchRainViewerData } from '../api/rainviewer'

export function useRainViewer() {
  return useQuery({
    queryKey: ['rainviewer'],
    queryFn: fetchRainViewerData,
    staleTime: 300_000,
    refetchInterval: 600_000,
  })
}
