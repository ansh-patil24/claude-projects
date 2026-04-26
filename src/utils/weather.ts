const WMO_EMOJIS: Record<number, string> = {
  0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
  45: '🌫️', 48: '🌫️',
  51: '🌦️', 53: '🌦️', 55: '🌦️',
  61: '🌧️', 63: '🌧️', 65: '🌧️',
  71: '🌨️', 73: '🌨️', 75: '❄️', 77: '🌨️',
  80: '🌦️', 81: '🌧️', 82: '⛈️',
  85: '🌨️', 86: '❄️',
  95: '⛈️', 96: '⛈️', 99: '⛈️',
}

export function getWeatherEmoji(code: number): string {
  return WMO_EMOJIS[code] ?? '🌡️'
}

export function formatTimeFromISO(isoTime: string): string {
  const timePart = isoTime.split('T')[1] ?? '00:00'
  const [hourStr, minuteStr] = timePart.split(':')
  const hour = parseInt(hourStr, 10)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const hour12 = hour % 12 || 12
  return `${hour12}:${minuteStr} ${ampm}`
}

export function formatDayFromISO(isoDate: string): string {
  return new Date(isoDate + 'T12:00:00').toLocaleDateString('en', { weekday: 'short' })
}

export function formatDateFromISO(isoDate: string): string {
  return new Date(isoDate + 'T12:00:00').toLocaleDateString('en', { month: 'short', day: 'numeric' })
}

export function convertTemp(celsius: number, unit: 'C' | 'F'): number {
  return unit === 'F' ? Math.round(celsius * 9 / 5 + 32) : Math.round(celsius)
}
