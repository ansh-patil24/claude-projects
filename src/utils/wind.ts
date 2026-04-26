const COMPASS = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW']

export function degreesToCompass(degrees: number): string {
  return COMPASS[Math.round(degrees / 22.5) % 16]
}

export function msToKmh(ms: number): number {
  return Math.round(ms * 3.6)
}
