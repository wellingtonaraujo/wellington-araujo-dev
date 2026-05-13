export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-black text-lg">
            Wellington Araújo
          </h1>

          <p className="text-sm text-zinc-400">
            Full Stack Developer
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white transition">
            Sobre
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projetos
          </a>

          <a href="#services" className="hover:text-white transition">
            Serviços
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}