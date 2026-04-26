import { useTranslation } from 'react-i18next'
import type { GeoResult } from '../../types/geo'
import type { AirQualityCurrent } from '../../types/weather'
import { useAirQuality } from '../../hooks/useAirQuality'
import { getEAQILabel, getEAQIBadgeClass } from '../../utils/aqi'
import { LoadingSpinner } from '../LoadingSpinner'
import { ErrorMessage } from '../ErrorMessage'

type PollutantKey = 'pm2_5' | 'pm10' | 'nitrogen_dioxide' | 'ozone' | 'sulphur_dioxide' | 'carbon_monoxide'

const POLLUTANTS: Array<{ key: PollutantKey; label: string }> = [
  { key: 'pm2_5', label: 'PM2.5' },
  { key: 'pm10', label: 'PM10' },
  { key: 'nitrogen_dioxide', label: 'NO₂' },
  { key: 'ozone', label: 'O₃' },
  { key: 'sulphur_dioxide', label: 'SO₂' },
  { key: 'carbon_monoxide', label: 'CO' },
]

export function AQIPanel({ city }: { city: GeoResult }) {
  const { data, isLoading, isError } = useAirQuality(city.latitude, city.longitude)
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg flex items-center justify-center h-44">
        <LoadingSpinner />
      </div>
    )
  }
  if (isError || !data) return <ErrorMessage message={t('aqi.error')} />

  const current: AirQualityCurrent = data.current
  const aqi = current.european_aqi

  return (
    <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t('aqi.title')}</h3>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl font-bold text-[#f1f5f9]">{aqi}</span>
        <span className={`px-2 py-0.5 rounded-lg text-xs font-semibold ${getEAQIBadgeClass(aqi)}`}>
          {t(getEAQILabel(aqi))}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {POLLUTANTS.map(({ key, label }) => (
          <div key={key} className="bg-slate-800/60 rounded-lg p-2 text-center">
            <p className="text-[10px] text-slate-400 mb-0.5">{label}</p>
            <p className="text-sm font-semibold text-[#f1f5f9]">
              {Math.round(current[key])}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
