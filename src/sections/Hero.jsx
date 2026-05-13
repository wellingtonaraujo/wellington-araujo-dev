export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-zinc-700 rounded-full px-4 py-2 text-sm text-zinc-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Disponível para trabalho remoto
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
            Desenvolvedor
            <span className="block text-blue-400">
              Full Stack
            </span>
          </h1>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl mb-10">
            Especializado em Laravel, PHP e JavaScript, desenvolvendo
            sistemas web modernos, escaláveis e orientados a negócios.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition font-semibold">
              Ver Projetos
            </button>

            <button className="px-6 py-4 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition">
              Entrar em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}