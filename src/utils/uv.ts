export function getUVLabel(uv: number): string {
  if (uv <= 2) return 'uv.low'
  if (uv <= 5) return 'uv.moderate'
  if (uv <= 7) return 'uv.high'
  if (uv <= 10) return 'uv.veryHigh'
  return 'uv.extreme'
}

export function getUVColorClass(uv: number): string {
  if (uv <= 2) return 'text-green-400'
  if (uv <= 5) return 'text-yellow-400'
  if (uv <= 7) return 'text-orange-400'
  if (uv <= 10) return 'text-red-400'
  return 'text-purple-400'
}

export function getUVBarWidth(uv: number): number {
  return Math.min((uv / 11) * 100, 100)
}
