export function getEAQILabel(aqi: number): string {
  if (aqi <= 20) return 'aqi.good'
  if (aqi <= 40) return 'aqi.fair'
  if (aqi <= 60) return 'aqi.moderate'
  if (aqi <= 80) return 'aqi.poor'
  if (aqi <= 100) return 'aqi.veryPoor'
  return 'aqi.extremelyPoor'
}

export function getEAQIBadgeClass(aqi: number): string {
  if (aqi <= 20) return 'bg-green-500/20 text-green-400'
  if (aqi <= 40) return 'bg-lime-500/20 text-lime-400'
  if (aqi <= 60) return 'bg-amber-500/20 text-amber-400'
  if (aqi <= 80) return 'bg-orange-500/20 text-orange-400'
  if (aqi <= 100) return 'bg-red-500/20 text-red-400'
  return 'bg-purple-500/20 text-purple-400'
}
