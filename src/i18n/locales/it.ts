const it = {
  search: { placeholder: 'Cerca una città...' },
  landing: {
    title: 'Cerca una città per iniziare',
    description: "Ottieni meteo in tempo reale, previsioni a 5 giorni, qualità dell'aria, indice UV e una mappa interattiva.",
  },
  current: { feelsLike: 'Percepita', high: 'Massima', low: 'Minima', error: 'Impossibile caricare i dati meteo' },
  forecast: { title: 'Previsioni 5 giorni', error: 'Impossibile caricare le previsioni' },
  aqi: {
    title: "Qualità dell'aria", error: "Qualità dell'aria non disponibile",
    good: 'Buona', fair: 'Discreta', moderate: 'Moderata', poor: 'Scarsa', veryPoor: 'Molto scarsa', extremelyPoor: 'Pessima',
  },
  wind: { title: 'Vento', gusts: 'Raffiche', error: 'Dati vento non disponibili' },
  uv: {
    title: 'Indice UV', error: 'Dati UV non disponibili',
    low: 'Basso', moderate: 'Moderato', high: 'Alto', veryHigh: 'Molto alto', extreme: 'Estremo',
  },
  atmosphere: {
    title: 'Atmosfera', error: 'Dati atmosferici non disponibili',
    humidity: 'Umidità', pressure: 'Pressione', visibility: 'Visibilità',
  },
  wmo: {
    '0': 'Cielo sereno', '1': 'Prevalentemente sereno', '2': 'Parzialmente nuvoloso', '3': 'Coperto',
    '45': 'Nebbia', '48': 'Nebbia gelata',
    '51': 'Pioggerella leggera', '53': 'Pioggerella', '55': 'Pioggerella intensa',
    '61': 'Pioggia leggera', '63': 'Pioggia', '65': 'Pioggia intensa',
    '71': 'Neve leggera', '73': 'Neve', '75': 'Neve intensa', '77': 'Granuli di neve',
    '80': 'Rovesci di pioggia', '81': 'Rovesci moderati', '82': 'Rovesci forti',
    '85': 'Rovesci di neve', '86': 'Rovesci di neve intensi',
    '95': 'Temporale', '96': 'Temporale con grandine', '99': 'Temporale violento',
    unknown: 'Sconosciuto',
  },
}

export default it
