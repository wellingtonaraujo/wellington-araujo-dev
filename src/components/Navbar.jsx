import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // trava o scroll quando menu mobile estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <button onClick={scrollToTop} className="text-left">
            <h1 className="font-black text-lg tracking-tight hover:text-white transition">
              Wellington Araújo
            </h1>

            <p className="text-sm text-zinc-500">
              Full Stack Developer
            </p>
          </button>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition">Sobre</a>
            <a href="#projects" className="hover:text-white transition">Projetos</a>
            <a href="#services" className="hover:text-white transition">Serviços</a>
            <a href="#contact" className="hover:text-white transition">Contato</a>
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 rounded-lg border border-white/10 hover:border-white/30 text-xs text-zinc-300 hover:text-white transition"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 rounded-xl border border-white/10 bg-zinc-900 flex items-center justify-center"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </header>

      {/* OVERLAY + MENU MOBILE */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* MENU LATERAL */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-zinc-950 border-l border-white/10 shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <nav className="flex flex-col px-6 py-10">

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="py-4 text-zinc-300 hover:text-white transition"
            >
              Sobre
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="py-4 text-zinc-300 hover:text-white transition"
            >
              Projetos
            </a>

            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="py-4 text-zinc-300 hover:text-white transition"
            >
              Serviços
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-4 text-zinc-300 hover:text-white transition"
            >
              Contato
            </a>

            <button
              onClick={toggleLanguage}
              className="mt-6 py-3 px-4 rounded-xl border border-white/10 text-zinc-300 hover:text-white transition"
            >
              {language === 'pt' ? 'Trocar para English' : 'Switch to Português'}
            </button>

          </nav>
        </div>
      </div>
    </>
  )
}