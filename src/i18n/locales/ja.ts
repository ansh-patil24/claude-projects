const ja = {
  search: { placeholder: '都市を検索...' },
  landing: {
    title: '都市を検索して開始する',
    description: 'リアルタイムの天気、5日間の予報、大気質、UV指数、インタラクティブマップを確認できます。',
  },
  current: { feelsLike: '体感温度', high: '最高', low: '最低', error: '気象データの読み込みに失敗' },
  forecast: { title: '5日間予報', error: '予報の読み込みに失敗' },
  aqi: {
    title: '大気質', error: '大気質データが利用できません',
    good: '良い', fair: '普通', moderate: 'やや悪い', poor: '悪い', veryPoor: '非常に悪い', extremelyPoor: '極めて悪い',
  },
  wind: { title: '風', gusts: '突風', error: '風データが利用できません' },
  uv: {
    title: 'UV指数', error: 'UVデータが利用できません',
    low: '低い', moderate: 'やや強い', high: '強い', veryHigh: '非常に強い', extreme: '極めて強い',
  },
  atmosphere: {
    title: '大気', error: '大気データが利用できません',
    humidity: '湿度', pressure: '気圧', visibility: '視程',
  },
  wmo: {
    '0': '快晴', '1': 'おおむね晴れ', '2': '晴れ時々曇り', '3': '曇り',
    '45': '霧', '48': '着氷性の霧',
    '51': '霧雨（弱）', '53': '霧雨', '55': '霧雨（強）',
    '61': '小雨', '63': '雨', '65': '大雨',
    '71': '小雪', '73': '雪', '75': '大雪', '77': '霰',
    '80': 'にわか雨', '81': '中程度のにわか雨', '82': '激しいにわか雨',
    '85': 'にわか雪', '86': '激しいにわか雪',
    '95': '雷雨', '96': '雹を伴う雷雨', '99': '激しい雷雨',
    unknown: '不明',
  },
}

export default ja
