import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import hi from './locales/hi'
import fr from './locales/fr'
import de from './locales/de'
import es from './locales/es'
import pt from './locales/pt'
import ar from './locales/ar'
import zh from './locales/zh'
import ja from './locales/ja'
import ko from './locales/ko'
import it from './locales/it'
import ru from './locales/ru'
import id from './locales/id'
import tr from './locales/tr'
import nl from './locales/nl'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    fr: { translation: fr },
    de: { translation: de },
    es: { translation: es },
    pt: { translation: pt },
    ar: { translation: ar },
    zh: { translation: zh },
    ja: { translation: ja },
    ko: { translation: ko },
    it: { translation: it },
    ru: { translation: ru },
    id: { translation: id },
    tr: { translation: tr },
    nl: { translation: nl },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'it', label: 'Italiano' },
  { code: 'ru', label: 'Русский' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'nl', label: 'Nederlands' },
]

export default i18n
