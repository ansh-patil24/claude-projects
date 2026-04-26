import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { GeoResult } from './types/geo'
import { SearchBar } from './components/SearchBar'
import { CurrentWeatherCard } from './components/CurrentWeatherCard'
import { ForecastStrip } from './components/ForecastStrip'
import { MetricsGrid } from './components/MetricsGrid'
import { WeatherMap } from './components/WeatherMap'
import { LANGUAGES } from './i18n'

type TempUnit = 'C' | 'F'

function LandingHero() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center select-none">
      <div className="text-8xl mb-6 drop-shadow-lg">⛅</div>
      <h2 className="text-2xl font-semibold text-[#f1f5f9]">{t('landing.title')}</h2>
      <p className="text-slate-400 mt-2 text-base max-w-sm">{t('landing.description')}</p>
    </div>
  )
}

function App() {
  const [selectedCity, setSelectedCity] = useState<GeoResult | null>(null)
  const [unit, setUnit] = useState<TempUnit>('C')
  const { i18n } = useTranslation()

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f1f5f9]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <header className="mb-8">
          <p className="text-center text-sky-400 font-bold text-base tracking-widest uppercase mb-4">
            🌤 WeatherNow
          </p>
          <div className="flex flex-col gap-3">
            <SearchBar onCitySelect={setSelectedCity} />
            <div className="flex items-center justify-center gap-3">
            <div className="flex items-center bg-slate-800 rounded-xl p-1">
              <button
                onClick={() => setUnit('C')}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${unit === 'C' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-slate-200'}`}
              >
                °C
              </button>
              <button
                onClick={() => setUnit('F')}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${unit === 'F' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-slate-200'}`}
              >
                °F
              </button>
            </div>
            <div className="flex items-center bg-slate-800 rounded-xl px-3 py-2 gap-1.5">
              <span className="text-base leading-none">🌐</span>
              <select
                value={i18n.language}
                onChange={e => i18n.changeLanguage(e.target.value)}
                className="bg-transparent text-slate-300 text-sm font-semibold focus:outline-none cursor-pointer"
              >
                {LANGUAGES.map(({ code, label }) => (
                  <option key={code} value={code} className="bg-slate-800 text-slate-200">{label}</option>
                ))}
              </select>
            </div>
            </div>
          </div>
        </header>

        {!selectedCity ? (
          <LandingHero />
        ) : (
          <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <CurrentWeatherCard city={selectedCity} unit={unit} />
              <ForecastStrip city={selectedCity} unit={unit} />
              <MetricsGrid city={selectedCity} />
            </div>
            <div className="lg:col-span-1 lg:sticky lg:top-6 lg:self-start">
              <WeatherMap city={selectedCity} />
            </div>
          </main>
        )}
      </div>
    </div>
  )
}

export default App
