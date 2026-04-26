import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import type { GeoResult } from '../../types/geo'
import { useGeoSearch } from '../../hooks/useGeoSearch'
import { LoadingSpinner } from '../LoadingSpinner'

interface Props {
  onCitySelect: (city: GeoResult) => void
}

export function SearchBar({ onCitySelect }: Props) {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(inputValue), 300)
    return () => clearTimeout(id)
  }, [inputValue])

  const { data: suggestions = [], isFetching } = useGeoSearch(debouncedQuery)

  useEffect(() => {
    setIsOpen(suggestions.length > 0 && inputValue.length >= 2)
    setActiveIndex(-1)
  }, [suggestions, inputValue])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function handleSelect(city: GeoResult) {
    onCitySelect(city)
    setInputValue(`${city.name}, ${city.country}`)
    setIsOpen(false)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => Math.min(i + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      handleSelect(suggestions[activeIndex])
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onFocus={() => suggestions.length > 0 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={t('search.placeholder')}
          className="w-full bg-[#1e293b] text-[#f1f5f9] placeholder-slate-500 rounded-2xl pl-12 pr-12 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-sky-500 border border-slate-700 transition-all"
          autoComplete="off"
        />
        {isFetching && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <LoadingSpinner size="sm" />
          </div>
        )}
      </div>

      {isOpen && (
        <ul className="absolute z-50 w-full mt-2 bg-[#1e293b] border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
          {suggestions.map((city, i) => (
            <li key={city.id}>
              <button
                onMouseDown={() => handleSelect(city)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                  i === activeIndex ? 'bg-slate-700' : 'hover:bg-slate-700/50'
                }`}
              >
                <svg className="h-4 w-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="min-w-0">
                  <span className="text-[#f1f5f9] font-medium">{city.name}</span>
                  <span className="text-slate-400 text-sm ml-2 truncate">
                    {[city.admin1, city.country].filter(Boolean).join(', ')}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
