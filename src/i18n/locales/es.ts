const es = {
  search: { placeholder: 'Buscar una ciudad...' },
  landing: {
    title: 'Busca una ciudad para empezar',
    description: 'Obtén clima en tiempo real, pronósticos de 5 días, calidad del aire, índice UV y un mapa interactivo.',
  },
  current: { feelsLike: 'Sensación', high: 'Máx', low: 'Mín', error: 'Error al cargar datos del tiempo' },
  forecast: { title: 'Pronóstico 5 días', error: 'Error al cargar el pronóstico' },
  aqi: {
    title: 'Calidad del aire', error: 'Calidad del aire no disponible',
    good: 'Buena', fair: 'Regular', moderate: 'Moderada', poor: 'Mala', veryPoor: 'Muy mala', extremelyPoor: 'Extremadamente mala',
  },
  wind: { title: 'Viento', gusts: 'Ráfagas', error: 'Datos de viento no disponibles' },
  uv: {
    title: 'Índice UV', error: 'Datos UV no disponibles',
    low: 'Bajo', moderate: 'Moderado', high: 'Alto', veryHigh: 'Muy alto', extreme: 'Extremo',
  },
  atmosphere: {
    title: 'Atmósfera', error: 'Datos atmosféricos no disponibles',
    humidity: 'Humedad', pressure: 'Presión', visibility: 'Visibilidad',
  },
  wmo: {
    '0': 'Cielo despejado', '1': 'Principalmente despejado', '2': 'Parcialmente nublado', '3': 'Nublado',
    '45': 'Niebla', '48': 'Niebla helada',
    '51': 'Llovizna ligera', '53': 'Llovizna', '55': 'Llovizna densa',
    '61': 'Lluvia ligera', '63': 'Lluvia', '65': 'Lluvia intensa',
    '71': 'Nieve ligera', '73': 'Nieve', '75': 'Nieve intensa', '77': 'Granizo fino',
    '80': 'Chubascos', '81': 'Chubascos moderados', '82': 'Chubascos fuertes',
    '85': 'Chubascos de nieve', '86': 'Chubascos de nieve intensos',
    '95': 'Tormenta', '96': 'Tormenta con granizo', '99': 'Tormenta intensa',
    unknown: 'Desconocido',
  },
}

export default es
