import { useTranslation } from 'react-i18next'
import type { GeoResult } from '../../types/geo'
import { useWeather } from '../../hooks/useWeather'
import { getUVLabel, getUVColorClass, getUVBarWidth } from '../../utils/uv'
import { LoadingSpinner } from '../LoadingSpinner'
import { ErrorMessage } from '../ErrorMessage'

export function UVPanel({ city }: { city: GeoResult }) {
  const { data, isLoading, isError } = useWeather(city.latitude, city.longitude)
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg flex items-center justify-center h-44">
        <LoadingSpinner />
      </div>
    )
  }
  if (isError || !data) return <ErrorMessage message={t('uv.error')} />

  const uv = data.daily.uv_index_max[0] ?? 0

  return (
    <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t('uv.title')}</h3>
      <div className="flex items-end gap-2 mb-5">
        <span className={`text-4xl font-bold ${getUVColorClass(uv)}`}>{Math.round(uv)}</span>
        <span className={`text-sm font-semibold pb-1 ${getUVColorClass(uv)}`}>{t(getUVLabel(uv))}</span>
      </div>
      <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${getUVBarWidth(uv)}%`,
            background: 'linear-gradient(to right, #22c55e, #eab308, #f97316, #ef4444, #a855f7)',
          }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-slate-500 mt-1.5">
        <span>{t('uv.low')}</span>
        <span>{t('uv.moderate')}</span>
        <span>{t('uv.high')}</span>
        <span>{t('uv.extreme')}</span>
      </div>
    </div>
  )
}
