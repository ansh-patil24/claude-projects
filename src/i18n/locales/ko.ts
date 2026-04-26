const ko = {
  search: { placeholder: '도시 검색...' },
  landing: {
    title: '도시를 검색하여 시작하세요',
    description: '실시간 날씨, 5일 예보, 대기질, 자외선 지수 및 인터랙티브 지도를 확인하세요.',
  },
  current: { feelsLike: '체감온도', high: '최고', low: '최저', error: '날씨 데이터 로드 실패' },
  forecast: { title: '5일 예보', error: '예보 로드 실패' },
  aqi: {
    title: '대기질', error: '대기질 데이터 없음',
    good: '좋음', fair: '보통', moderate: '나쁨', poor: '매우 나쁨', veryPoor: '최악', extremelyPoor: '매우 최악',
  },
  wind: { title: '바람', gusts: '돌풍', error: '바람 데이터 없음' },
  uv: {
    title: '자외선 지수', error: 'UV 데이터 없음',
    low: '낮음', moderate: '보통', high: '높음', veryHigh: '매우 높음', extreme: '위험',
  },
  atmosphere: {
    title: '대기', error: '대기 데이터 없음',
    humidity: '습도', pressure: '기압', visibility: '가시거리',
  },
  wmo: {
    '0': '맑음', '1': '대체로 맑음', '2': '부분적으로 흐림', '3': '흐림',
    '45': '안개', '48': '서리 안개',
    '51': '약한 이슬비', '53': '이슬비', '55': '짙은 이슬비',
    '61': '약한 비', '63': '비', '65': '강한 비',
    '71': '약한 눈', '73': '눈', '75': '강한 눈', '77': '싸락눈',
    '80': '소나기', '81': '보통 소나기', '82': '강한 소나기',
    '85': '눈 소나기', '86': '강한 눈 소나기',
    '95': '뇌우', '96': '우박을 동반한 뇌우', '99': '강한 뇌우',
    unknown: '알 수 없음',
  },
}

export default ko
