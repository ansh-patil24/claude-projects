const nl = {
  search: { placeholder: 'Zoek een stad...' },
  landing: {
    title: 'Zoek een stad om te beginnen',
    description: 'Krijg realtime weer, 5-daagse voorspelling, luchtkwaliteit, UV-index en een interactieve kaart.',
  },
  current: { feelsLike: 'Voelt als', high: 'Max', low: 'Min', error: 'Weergegevens konden niet worden geladen' },
  forecast: { title: '5-daagse voorspelling', error: 'Voorspelling kon niet worden geladen' },
  aqi: {
    title: 'Luchtkwaliteit', error: 'Luchtkwaliteit niet beschikbaar',
    good: 'Goed', fair: 'Redelijk', moderate: 'Matig', poor: 'Slecht', veryPoor: 'Zeer slecht', extremelyPoor: 'Extreem slecht',
  },
  wind: { title: 'Wind', gusts: 'Windstoten', error: 'Windgegevens niet beschikbaar' },
  uv: {
    title: 'UV-index', error: 'UV-gegevens niet beschikbaar',
    low: 'Laag', moderate: 'Matig', high: 'Hoog', veryHigh: 'Zeer hoog', extreme: 'Extreem',
  },
  atmosphere: {
    title: 'Atmosfeer', error: 'Atmosferische gegevens niet beschikbaar',
    humidity: 'Luchtvochtigheid', pressure: 'Luchtdruk', visibility: 'Zicht',
  },
  wmo: {
    '0': 'Heldere lucht', '1': 'Overwegend helder', '2': 'Gedeeltelijk bewolkt', '3': 'Bewolkt',
    '45': 'Mist', '48': 'Rijpmist',
    '51': 'Lichte motregen', '53': 'Motregen', '55': 'Dichte motregen',
    '61': 'Lichte regen', '63': 'Regen', '65': 'Zware regen',
    '71': 'Lichte sneeuw', '73': 'Sneeuw', '75': 'Zware sneeuw', '77': 'Sneeuwkorrels',
    '80': 'Regenbuien', '81': 'Matige buien', '82': 'Zware buien',
    '85': 'Sneeuwbuien', '86': 'Zware sneeuwbuien',
    '95': 'Onweer', '96': 'Onweer met hagel', '99': 'Zwaar onweer',
    unknown: 'Onbekend',
  },
}

export default nl
