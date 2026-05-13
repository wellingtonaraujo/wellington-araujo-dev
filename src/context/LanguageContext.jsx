import { createContext, useContext, useState } from 'react'
import { ptBR } from '../i18n/pt-br'
import { enUS } from '../i18n/en-us'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt')

  const translations = language === 'pt' ? ptBR : enUS

  const t = (key) => {
    return key.split('.').reduce((obj, k) => obj?.[k], translations)
  }

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}