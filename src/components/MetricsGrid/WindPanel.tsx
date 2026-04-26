import type { GeoResult } from '../../types/geo'
import { useWeather } from '../../hooks/useWeather'
import { degreesToCompass, msToKmh } from '../../utils/wind'
import { LoadingSpinner } from '../LoadingSpinner'
import { ErrorMessage } from '../ErrorMessage'

export function WindPanel({ city }: { city: GeoResult }) {
  const { data, isLoading, isError } = useWeather(city.latitude, city.longitude)

  if (isLoading) {
    return (
      <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg flex items-center justify-center h-44">
        <LoadingSpinner />
      </div>
    )
  }
  if (isError || !data) return <ErrorMessage message="Wind data unavailable" />

  const { wind_speed_10m, wind_gusts_10m, wind_direction_10m } = data.current

  return (
    <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Wind</h3>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-end gap-1.5">
            <span className="text-4xl font-bold text-[#f1f5f9]">{msToKmh(wind_speed_10m)}</span>
            <span className="text-slate-400 text-sm pb-1">km/h</span>
          </div>
          <p className="text-slate-400 text-sm mt-2">
            Gusts: <span className="text-slate-300">{msToKmh(wind_gusts_10m)} km/h</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <svg
            className="h-10 w-10 text-sky-400 transition-transform duration-500"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ transform: `rotate(${wind_direction_10m}deg)` }}
            aria-label={`Wind from ${degreesToCompass(wind_direction_10m)}`}
          >
            <path d="M12 2L7 11h4v9h2v-9h4L12 2z" />
          </svg>
          <span className="text-slate-300 font-semibold text-sm">{degreesToCompass(wind_direction_10m)}</span>
        </div>
      </div>
    </div>
  )
}
