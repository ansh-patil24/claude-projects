const zh = {
  search: { placeholder: '搜索城市...' },
  landing: {
    title: '搜索城市以开始',
    description: '获取实时天气、5天预报、空气质量、紫外线指数和互动地图。',
  },
  current: { feelsLike: '体感温度', high: '最高', low: '最低', error: '天气数据加载失败' },
  forecast: { title: '5天预报', error: '预报加载失败' },
  aqi: {
    title: '空气质量', error: '空气质量数据不可用',
    good: '优', fair: '良', moderate: '中', poor: '差', veryPoor: '很差', extremelyPoor: '极差',
  },
  wind: { title: '风', gusts: '阵风', error: '风力数据不可用' },
  uv: {
    title: '紫外线指数', error: '紫外线数据不可用',
    low: '低', moderate: '中', high: '高', veryHigh: '很高', extreme: '极高',
  },
  atmosphere: {
    title: '大气', error: '大气数据不可用',
    humidity: '湿度', pressure: '气压', visibility: '能见度',
  },
  wmo: {
    '0': '晴朗', '1': '大部晴朗', '2': '多云', '3': '阴天',
    '45': '雾', '48': '雾凇',
    '51': '小毛毛雨', '53': '毛毛雨', '55': '浓毛毛雨',
    '61': '小雨', '63': '雨', '65': '大雨',
    '71': '小雪', '73': '雪', '75': '大雪', '77': '米雪',
    '80': '阵雨', '81': '中阵雨', '82': '强阵雨',
    '85': '阵雪', '86': '大阵雪',
    '95': '雷暴', '96': '冰雹雷暴', '99': '强雷暴',
    unknown: '未知',
  },
}

export default zh
