'use client'

import { useState } from 'react'

const languages = [
  { code: 'ar', label: 'العربية', file: '/My_Site/index.html' },
  { code: 'en', label: 'English', file: '/My_Site/index-en.html' },
  { code: 'fr', label: 'Français', file: '/My_Site/index-fr.html' },
]

export default function Home() {
  const [lang, setLang] = useState('ar')
  const current = languages.find(l => l.code === lang)!

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Language Switcher */}
      <div className="absolute top-3 right-3 z-50 flex gap-1 bg-black/60 backdrop-blur-sm rounded-lg p-1">
        {languages.map(l => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              lang === l.code
                ? 'bg-cyan-500 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Website Iframe */}
      <iframe
        src={current.file}
        className="w-full h-full border-0"
        title={`Abdelkader Atia - ${current.label}`}
      />
    </div>
  )
}
