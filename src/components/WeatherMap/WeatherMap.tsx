import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import type { GeoResult } from '../../types/geo'
import { MapController } from './MapController'
import { useRainViewer } from '../../hooks/useRainViewer'
import { useWeather } from '../../hooks/useWeather'
import { getWeatherEmoji } from '../../utils/weather'
import { RAINVIEWER_TILE_BASE } from '../../config'

// Fix Leaflet default marker icons broken by Vite's asset bundling
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl })

type MapLayer = 'none' | 'radar' | 'satellite'

const LAYER_LABELS: Record<MapLayer, string> = {
  none: 'Base',
  radar: 'Precipitation',
  satellite: 'Cloud IR',
}

export function WeatherMap({ city }: { city: GeoResult }) {
  const { t } = useTranslation()
  const [activeLayer, setActiveLayer] = useState<MapLayer>('radar')
  const { data: rvData } = useRainViewer()
  const { data: weather } = useWeather(city.latitude, city.longitude)

  const radarPath = rvData?.radar?.past?.at(-1)?.path
  const satellitePath = rvData?.satellite?.infrared?.at(-1)?.path

  const tileUrl =
    activeLayer === 'radar' && radarPath
      ? `${RAINVIEWER_TILE_BASE}${radarPath}/256/{z}/{x}/{y}/2/1_1.png`
      : activeLayer === 'satellite' && satellitePath
      ? `${RAINVIEWER_TILE_BASE}${satellitePath}/256/{z}/{x}/{y}/0/0_0.png`
      : null

  return (
    <div className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg flex flex-col" style={{ minHeight: 460 }}>
      <div className="px-4 py-3 flex items-center justify-between border-b border-slate-700 shrink-0">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Map</h3>
        <div className="flex gap-1">
          {(Object.keys(LAYER_LABELS) as MapLayer[]).map(layer => (
            <button
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                activeLayer === layer
                  ? 'bg-sky-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {LAYER_LABELS[layer]}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <MapContainer
          center={[city.latitude, city.longitude]}
          zoom={7}
          style={{ height: '100%', width: '100%', minHeight: 400 }}
          zoomControl
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {tileUrl && (
            <TileLayer
              key={tileUrl}
              url={tileUrl}
              opacity={0.7}
              attribution='&copy; <a href="https://rainviewer.com/">RainViewer</a>'
            />
          )}
          <Marker position={[city.latitude, city.longitude]}>
            <Popup>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{city.name}, {city.country}</div>
              {weather && (
                <div style={{ fontSize: 12, marginTop: 4, color: '#94a3b8' }}>
                  {getWeatherEmoji(weather.current.weather_code)}{' '}
                  {Math.round(weather.current.temperature_2m)}°C &middot;{' '}
                  {t('wmo.' + weather.current.weather_code, { defaultValue: '—' })}
                </div>
              )}
            </Popup>
          </Marker>
          <MapController city={city} />
        </MapContainer>
      </div>
    </div>
  )
}
