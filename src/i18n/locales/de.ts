const de = {
  search: { placeholder: 'Stadt suchen...' },
  landing: {
    title: 'Suche eine Stadt, um loszulegen',
    description: 'Erhalte Echtzeit-Wetter, 5-Tage-Vorhersagen, Luftqualität, UV-Index und eine interaktive Karte.',
  },
  current: { feelsLike: 'Gefühlt', high: 'Höchst', low: 'Tiefst', error: 'Wetterdaten konnten nicht geladen werden' },
  forecast: { title: '5-Tage-Vorhersage', error: 'Vorhersage konnte nicht geladen werden' },
  aqi: {
    title: 'Luftqualität', error: 'Luftqualität nicht verfügbar',
    good: 'Gut', fair: 'Mäßig', moderate: 'Befriedigend', poor: 'Schlecht', veryPoor: 'Sehr schlecht', extremelyPoor: 'Extrem schlecht',
  },
  wind: { title: 'Wind', gusts: 'Böen', error: 'Winddaten nicht verfügbar' },
  uv: {
    title: 'UV-Index', error: 'UV-Daten nicht verfügbar',
    low: 'Niedrig', moderate: 'Mäßig', high: 'Hoch', veryHigh: 'Sehr hoch', extreme: 'Extrem',
  },
  atmosphere: {
    title: 'Atmosphäre', error: 'Atmosphärendaten nicht verfügbar',
    humidity: 'Luftfeuchtigkeit', pressure: 'Luftdruck', visibility: 'Sichtweite',
  },
  wmo: {
    '0': 'Klarer Himmel', '1': 'Überwiegend klar', '2': 'Teilweise bewölkt', '3': 'Bedeckt',
    '45': 'Nebel', '48': 'Reifnebel',
    '51': 'Leichter Nieselregen', '53': 'Nieselregen', '55': 'Starker Nieselregen',
    '61': 'Leichter Regen', '63': 'Regen', '65': 'Starker Regen',
    '71': 'Leichter Schnee', '73': 'Schnee', '75': 'Starker Schnee', '77': 'Schneekörner',
    '80': 'Regenschauer', '81': 'Mäßige Schauer', '82': 'Starke Schauer',
    '85': 'Schneeschauer', '86': 'Starke Schneeschauer',
    '95': 'Gewitter', '96': 'Gewitter mit Hagel', '99': 'Schweres Gewitter',
    unknown: 'Unbekannt',
  },
}

export default de
