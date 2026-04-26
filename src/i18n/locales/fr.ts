const fr = {
  search: { placeholder: 'Rechercher une ville...' },
  landing: {
    title: 'Recherchez une ville pour commencer',
    description: "Obtenez la météo en temps réel, les prévisions sur 5 jours, la qualité de l'air, l'indice UV et une carte interactive.",
  },
  current: { feelsLike: 'Ressenti', high: 'Max', low: 'Min', error: 'Impossible de charger les données météo' },
  forecast: { title: 'Prévisions 5 jours', error: 'Impossible de charger les prévisions' },
  aqi: {
    title: "Qualité de l'air", error: "Qualité de l'air indisponible",
    good: 'Bon', fair: 'Correct', moderate: 'Modéré', poor: 'Mauvais', veryPoor: 'Très mauvais', extremelyPoor: 'Extrêmement mauvais',
  },
  wind: { title: 'Vent', gusts: 'Rafales', error: 'Données de vent indisponibles' },
  uv: {
    title: 'Indice UV', error: 'Données UV indisponibles',
    low: 'Faible', moderate: 'Modéré', high: 'Élevé', veryHigh: 'Très élevé', extreme: 'Extrême',
  },
  atmosphere: {
    title: 'Atmosphère', error: 'Données atmosphériques indisponibles',
    humidity: 'Humidité', pressure: 'Pression', visibility: 'Visibilité',
  },
  wmo: {
    '0': 'Ciel dégagé', '1': 'Principalement dégagé', '2': 'Partiellement nuageux', '3': 'Couvert',
    '45': 'Brouillard', '48': 'Brouillard givrant',
    '51': 'Bruine légère', '53': 'Bruine', '55': 'Bruine dense',
    '61': 'Pluie légère', '63': 'Pluie', '65': 'Forte pluie',
    '71': 'Neige légère', '73': 'Neige', '75': 'Forte neige', '77': 'Grains de neige',
    '80': 'Averses de pluie', '81': 'Averses modérées', '82': 'Averses violentes',
    '85': 'Averses de neige', '86': 'Fortes averses de neige',
    '95': 'Orage', '96': 'Orage avec grêle', '99': 'Orage violent',
    unknown: 'Inconnu',
  },
}

export default fr
