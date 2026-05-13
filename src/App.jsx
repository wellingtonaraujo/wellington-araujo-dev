export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <p className="uppercase tracking-[0.3em] text-zinc-400 mb-4">
          Portfolio Hero
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
          Wellington
          <span className="block text-blue-400">
            Araújo
          </span>
        </h1>

        <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed mb-8">
          Full Stack Developer especializado em Laravel, PHP e
          JavaScript, criando sistemas web modernos, escaláveis e
          orientados a negócios.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-400 transition font-semibold">
            Ver Projetos
          </button>

          <button className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition">
            Contato
          </button>
        </div>
      </section>
    </div>
  )
}