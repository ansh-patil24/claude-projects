import type { GeoResult } from '../../types/geo'
import { useWeather } from '../../hooks/useWeather'
import { getWeatherEmoji, getWeatherDescription, formatTimeFromISO } from '../../utils/weather'
import { LoadingSpinner } from '../LoadingSpinner'
import { ErrorMessage } from '../ErrorMessage'

export function CurrentWeatherCard({ city }: { city: GeoResult }) {
  const { data, isLoading, isError } = useWeather(city.latitude, city.longitude)

  if (isLoading) {
    return (
      <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg flex items-center justify-center h-52">
        <LoadingSpinner size="lg" />
      </div>
    )
  }
  if (isError || !data) return <ErrorMessage message="Failed to load weather data" />

  const { current, daily } = data
  const localTime = formatTimeFromISO(current.time)
  const sunriseTime = formatTimeFromISO(daily.sunrise[0])
  const sunsetTime = formatTimeFromISO(daily.sunset[0])

  return (
    <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-3xl font-bold text-sky-400 truncate">{city.name}</h2>
          <p className="text-slate-400 mt-1 text-sm">
            {[city.admin1, city.country].filter(Boolean).join(', ')} &middot; {localTime}
          </p>
        </div>
        <div className="text-6xl shrink-0">{getWeatherEmoji(current.weather_code)}</div>
      </div>

      <div className="mt-5 flex items-end gap-4">
        <span className="text-8xl font-thin text-[#f1f5f9] leading-none">
          {Math.round(current.temperature_2m)}°
        </span>
        <div className="pb-1">
          <p className="text-slate-400 text-sm">Feels like {Math.round(current.apparent_temperature)}°C</p>
          <p className="text-slate-200 font-medium mt-0.5">{getWeatherDescription(current.weather_code)}</p>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-700 flex flex-wrap gap-x-6 gap-y-1 text-sm">
        <span className="text-slate-400">
          High <span className="text-[#f1f5f9] font-medium">{Math.round(daily.temperature_2m_max[0])}°</span>
        </span>
        <span className="text-slate-400">
          Low <span className="text-[#f1f5f9] font-medium">{Math.round(daily.temperature_2m_min[0])}°</span>
        </span>
        <span className="ml-auto text-slate-400">
          🌅 <span className="text-[#f1f5f9]">{sunriseTime}</span>
        </span>
        <span className="text-slate-400">
          🌇 <span className="text-[#f1f5f9]">{sunsetTime}</span>
        </span>
      </div>
    </div>
  )
}
