import { useTranslation } from 'react-i18next'
import type { GeoResult } from '../../types/geo'
import { useWeather } from '../../hooks/useWeather'
import { getWeatherEmoji, formatDayFromISO, formatDateFromISO, convertTemp } from '../../utils/weather'
import { LoadingSpinner } from '../LoadingSpinner'
import { ErrorMessage } from '../ErrorMessage'

export function ForecastStrip({ city, unit }: { city: GeoResult; unit: 'C' | 'F' }) {
  const { t } = useTranslation()
  const { data, isLoading, isError } = useWeather(city.latitude, city.longitude)

  if (isLoading) {
    return (
      <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg flex items-center justify-center h-28">
        <LoadingSpinner />
      </div>
    )
  }
  if (isError || !data) return <ErrorMessage message={t('forecast.error')} />

  // Skip today (index 0), show next 5 days
  const futureDays = data.daily.time.slice(1, 6)

  return (
    <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t('forecast.title')}</h3>
      <div className="flex gap-2 overflow-x-auto pb-1 snap-x">
        {futureDays.map((date, i) => {
          const idx = i + 1
          return (
            <div
              key={date}
              className="flex-1 min-w-[72px] snap-start flex flex-col items-center gap-1.5 bg-slate-800/50 rounded-xl py-3 px-2"
            >
              <span className="text-slate-400 text-xs font-semibold">{formatDayFromISO(date)}</span>
              <span className="text-slate-500 text-[10px]">{formatDateFromISO(date)}</span>
              <span className="text-2xl">{getWeatherEmoji(data.daily.weather_code[idx])}</span>
              <span className="text-[#f1f5f9] font-semibold text-sm">
                {convertTemp(data.daily.temperature_2m_max[idx], unit)}°
              </span>
              <span className="text-slate-500 text-xs">
                {convertTemp(data.daily.temperature_2m_min[idx], unit)}°
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
