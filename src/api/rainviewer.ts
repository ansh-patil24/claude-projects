import { RAINVIEWER_API } from '../config'
import type { RainViewerData } from '../types/weather'

export async function fetchRainViewerData(): Promise<RainViewerData> {
  const res = await fetch(RAINVIEWER_API)
  if (!res.ok) throw new Error('RainViewer fetch failed')
  return res.json()
}
