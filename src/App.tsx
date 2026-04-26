import { useState } from 'react'
import type { GeoResult } from './types/geo'
import { SearchBar } from './components/SearchBar'
import { CurrentWeatherCard } from './components/CurrentWeatherCard'
import { ForecastStrip } from './components/ForecastStrip'
import { MetricsGrid } from './components/MetricsGrid'
import { WeatherMap } from './components/WeatherMap'

function LandingHero() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center select-none">
      <div className="text-8xl mb-6 drop-shadow-lg">⛅</div>
      <h2 className="text-2xl font-semibold text-[#f1f5f9]">Search for a city to get started</h2>
      <p className="text-slate-400 mt-2 text-base max-w-sm">
        Get real-time weather, 5-day forecasts, air quality, UV index, and an interactive map.
      </p>
    </div>
  )
}

function App() {
  const [selectedCity, setSelectedCity] = useState<GeoResult | null>(null)

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f1f5f9]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <header className="mb-8">
          <p className="text-center text-sky-400 font-bold text-base tracking-widest uppercase mb-4">
            🌤 WeatherNow
          </p>
          <SearchBar onCitySelect={setSelectedCity} />
        </header>

        {!selectedCity ? (
          <LandingHero />
        ) : (
          <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <CurrentWeatherCard city={selectedCity} />
              <ForecastStrip city={selectedCity} />
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
