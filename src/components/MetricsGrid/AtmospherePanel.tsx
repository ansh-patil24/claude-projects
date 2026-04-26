import { useTranslation } from 'react-i18next'
import type { GeoResult } from '../../types/geo'
import { useWeather } from '../../hooks/useWeather'
import { formatNum } from '../../utils/number'
import { LoadingSpinner } from '../LoadingSpinner'
import { ErrorMessage } from '../ErrorMessage'

export function AtmospherePanel({ city }: { city: GeoResult }) {
  const { data, isLoading, isError } = useWeather(city.latitude, city.longitude)
  const { t, i18n } = useTranslation()

  if (isLoading) {
    return (
      <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg flex items-center justify-center h-44">
        <LoadingSpinner />
      </div>
    )
  }
  if (isError || !data) return <ErrorMessage message={t('atmosphere.error')} />

  const { relative_humidity_2m, surface_pressure, visibility } = data.current

  const stats = [
    { icon: '💧', label: t('atmosphere.humidity'), value: `${formatNum(relative_humidity_2m, i18n.language)}%` },
    { icon: '🌡️', label: t('atmosphere.pressure'), value: `${formatNum(Math.round(surface_pressure), i18n.language)} hPa` },
    { icon: '👁️', label: t('atmosphere.visibility'), value: `${formatNum(visibility / 1000, i18n.language, 1)} km` },
  ]

  return (
    <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t('atmosphere.title')}</h3>
      <div className="flex flex-col gap-3.5">
        {stats.map(({ icon, label, value }) => (
          <div key={label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">{icon}</span>
              <span className="text-slate-400 text-sm">{label}</span>
            </div>
            <span className="text-[#f1f5f9] font-semibold text-sm">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
