import type { GeoResult } from '../../types/geo'
import { AQIPanel } from './AQIPanel'
import { WindPanel } from './WindPanel'
import { UVPanel } from './UVPanel'
import { AtmospherePanel } from './AtmospherePanel'

export function MetricsGrid({ city }: { city: GeoResult }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <AQIPanel city={city} />
      <WindPanel city={city} />
      <UVPanel city={city} />
      <AtmospherePanel city={city} />
    </div>
  )
}
