'use client'

import useSmartNav from '@/hooks/use-smart-nav'
import { ChevronDown, Languages } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

interface Language {
  code: string
  label: string
  icon: string
}

const languages: Language[] = [
  { code: 'en', label: 'English', icon: '🇺🇸' },
  { code: 'bn', label: 'বাংলা', icon: '🇧🇩' },
]

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const scrollState = useSmartNav()

  // Extract current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'en'
  const currentLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`

    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className={`flex items-center justify-between gap-4 py-6 container w-full sticky z-50 bg-white shadow-[0px_9px_26px_-4px_rgba(0,_0,_0,_0.1)] transition-[top] duration-300 ease-in-out ${scrollState === 'up' ? 'top-0' : '-top-full'}`}>
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/10mslogo-svg.svg" alt="10 Minute School" width={120} height={40} className="h-8 w-auto" />
      </div>

      {/* Language Switcher */}
      <div className="relative" ref={dropdownRef}>
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer justify-between flex w-full items-center gap-1 rounded border px-2 py-[2px] hover:bg-slate-50 transition-colors">
          <Languages size={15} className="text-gray-500" />
          <span className="text-sm">{currentLanguage.code === 'bn' ? 'বাং' : 'EN'}</span>
          <ChevronDown size={12} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white border rounded-md shadow-lg z-[9999] min-w-[120px]">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2 transition-colors first:rounded-t-md last:rounded-b-md ${
                  currentLocale === language.code ? 'bg-gray-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span>{language.icon}</span>
                <span className="text-sm">{language.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default LanguageSwitcher
