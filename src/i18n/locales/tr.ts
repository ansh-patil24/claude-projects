const tr = {
  search: { placeholder: 'Şehir ara...' },
  landing: {
    title: 'Başlamak için bir şehir arayın',
    description: 'Gerçek zamanlı hava durumu, 5 günlük tahmin, hava kalitesi, UV indeksi ve interaktif harita alın.',
  },
  current: { feelsLike: 'Hissedilen', high: 'En yüksek', low: 'En düşük', error: 'Hava durumu verileri yüklenemedi' },
  forecast: { title: '5 Günlük Tahmin', error: 'Tahmin yüklenemedi' },
  aqi: {
    title: 'Hava Kalitesi', error: 'Hava kalitesi verisi mevcut değil',
    good: 'İyi', fair: 'Orta', moderate: 'Hassas', poor: 'Sağlıksız', veryPoor: 'Çok sağlıksız', extremelyPoor: 'Tehlikeli',
  },
  wind: { title: 'Rüzgar', gusts: 'Ani rüzgar', error: 'Rüzgar verisi mevcut değil' },
  uv: {
    title: 'UV İndeksi', error: 'UV verisi mevcut değil',
    low: 'Düşük', moderate: 'Orta', high: 'Yüksek', veryHigh: 'Çok yüksek', extreme: 'Aşırı',
  },
  atmosphere: {
    title: 'Atmosfer', error: 'Atmosfer verisi mevcut değil',
    humidity: 'Nem', pressure: 'Basınç', visibility: 'Görüş mesafesi',
  },
  wmo: {
    '0': 'Açık', '1': 'Çoğunlukla açık', '2': 'Parçalı bulutlu', '3': 'Bulutlu',
    '45': 'Sis', '48': 'Dondurucu sis',
    '51': 'Hafif çisenti', '53': 'Çisenti', '55': 'Yoğun çisenti',
    '61': 'Hafif yağmur', '63': 'Yağmur', '65': 'Şiddetli yağmur',
    '71': 'Hafif kar', '73': 'Kar', '75': 'Yoğun kar', '77': 'Kar taneleri',
    '80': 'Sağanak yağış', '81': 'Orta şiddetli sağanak', '82': 'Şiddetli sağanak',
    '85': 'Kar sağanağı', '86': 'Yoğun kar sağanağı',
    '95': 'Fırtına', '96': 'Dolu eşliğinde fırtına', '99': 'Şiddetli fırtına',
    unknown: 'Bilinmiyor',
  },
}

export default tr
