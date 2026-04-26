const id = {
  search: { placeholder: 'Cari kota...' },
  landing: {
    title: 'Cari kota untuk memulai',
    description: 'Dapatkan cuaca real-time, prakiraan 5 hari, kualitas udara, indeks UV, dan peta interaktif.',
  },
  current: { feelsLike: 'Terasa seperti', high: 'Tertinggi', low: 'Terendah', error: 'Gagal memuat data cuaca' },
  forecast: { title: 'Prakiraan 5 Hari', error: 'Gagal memuat prakiraan' },
  aqi: {
    title: 'Kualitas Udara', error: 'Kualitas udara tidak tersedia',
    good: 'Baik', fair: 'Sedang', moderate: 'Tidak sehat', poor: 'Buruk', veryPoor: 'Sangat buruk', extremelyPoor: 'Berbahaya',
  },
  wind: { title: 'Angin', gusts: 'Hembusan', error: 'Data angin tidak tersedia' },
  uv: {
    title: 'Indeks UV', error: 'Data UV tidak tersedia',
    low: 'Rendah', moderate: 'Sedang', high: 'Tinggi', veryHigh: 'Sangat tinggi', extreme: 'Ekstrem',
  },
  atmosphere: {
    title: 'Atmosfer', error: 'Data atmosfer tidak tersedia',
    humidity: 'Kelembapan', pressure: 'Tekanan', visibility: 'Jarak pandang',
  },
  wmo: {
    '0': 'Cerah', '1': 'Umumnya cerah', '2': 'Sebagian berawan', '3': 'Mendung',
    '45': 'Kabut', '48': 'Kabut beku',
    '51': 'Gerimis ringan', '53': 'Gerimis', '55': 'Gerimis lebat',
    '61': 'Hujan ringan', '63': 'Hujan', '65': 'Hujan lebat',
    '71': 'Salju ringan', '73': 'Salju', '75': 'Salju lebat', '77': 'Butiran salju',
    '80': 'Hujan lokal', '81': 'Hujan lokal sedang', '82': 'Hujan lokal lebat',
    '85': 'Hujan salju lokal', '86': 'Hujan salju lokal lebat',
    '95': 'Badai petir', '96': 'Badai petir dengan hujan es', '99': 'Badai petir hebat',
    unknown: 'Tidak diketahui',
  },
}

export default id
