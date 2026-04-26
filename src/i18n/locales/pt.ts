const pt = {
  search: { placeholder: 'Pesquisar uma cidade...' },
  landing: {
    title: 'Pesquise uma cidade para começar',
    description: 'Obtenha clima em tempo real, previsões de 5 dias, qualidade do ar, índice UV e um mapa interativo.',
  },
  current: { feelsLike: 'Sensação', high: 'Máx', low: 'Mín', error: 'Falha ao carregar dados do tempo' },
  forecast: { title: 'Previsão 5 dias', error: 'Falha ao carregar previsão' },
  aqi: {
    title: 'Qualidade do ar', error: 'Qualidade do ar indisponível',
    good: 'Boa', fair: 'Regular', moderate: 'Moderada', poor: 'Ruim', veryPoor: 'Muito ruim', extremelyPoor: 'Extremamente ruim',
  },
  wind: { title: 'Vento', gusts: 'Rajadas', error: 'Dados de vento indisponíveis' },
  uv: {
    title: 'Índice UV', error: 'Dados UV indisponíveis',
    low: 'Baixo', moderate: 'Moderado', high: 'Alto', veryHigh: 'Muito alto', extreme: 'Extremo',
  },
  atmosphere: {
    title: 'Atmosfera', error: 'Dados atmosféricos indisponíveis',
    humidity: 'Humidade', pressure: 'Pressão', visibility: 'Visibilidade',
  },
  wmo: {
    '0': 'Céu limpo', '1': 'Principalmente limpo', '2': 'Parcialmente nublado', '3': 'Encoberto',
    '45': 'Nevoeiro', '48': 'Nevoeiro gelado',
    '51': 'Chuvisco fraco', '53': 'Chuvisco', '55': 'Chuvisco denso',
    '61': 'Chuva fraca', '63': 'Chuva', '65': 'Chuva forte',
    '71': 'Neve fraca', '73': 'Neve', '75': 'Neve forte', '77': 'Grãos de neve',
    '80': 'Pancadas de chuva', '81': 'Pancadas moderadas', '82': 'Pancadas fortes',
    '85': 'Pancadas de neve', '86': 'Pancadas de neve fortes',
    '95': 'Trovoada', '96': 'Trovoada com granizo', '99': 'Trovoada forte',
    unknown: 'Desconhecido',
  },
}

export default pt
