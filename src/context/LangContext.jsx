import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('FR')
  const t = translations[lang]
  const toggle = () => setLang(l => l === 'FR' ? 'EN' : 'FR')

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
