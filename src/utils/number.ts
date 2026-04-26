const LOCALE_MAP: Record<string, string> = {
  en: 'en-US', hi: 'hi-IN', fr: 'fr-FR', de: 'de-DE',
  es: 'es-ES', pt: 'pt-BR', ar: 'ar-SA', zh: 'zh-CN',
  ja: 'ja-JP', ko: 'ko-KR', it: 'it-IT', ru: 'ru-RU',
  id: 'id-ID', tr: 'tr-TR', nl: 'nl-NL',
}

export function formatNum(value: number, language: string, decimals = 0): string {
  const locale = LOCALE_MAP[language] ?? 'en-US'
  return value.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}
