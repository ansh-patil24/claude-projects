import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import type { GeoResult } from '../../types/geo'

export function MapController({ city }: { city: GeoResult }) {
  const map = useMap()
  useEffect(() => {
    map.setView([city.latitude, city.longitude], 7, { animate: true, duration: 0.8 })
  }, [city.latitude, city.longitude, map])
  return null
}
