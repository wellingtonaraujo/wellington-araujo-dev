import waf from '../assets/images/waf.jpeg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-32 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 border border-zinc-700 rounded-full px-4 py-2 text-sm text-zinc-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Disponível para trabalho remoto
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-8">
              Desenvolvedor
              <span className="block text-blue-400">
                Full Stack
              </span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-10">
              Especializado em Laravel, PHP e JavaScript,
              desenvolvendo sistemas web modernos,
              escaláveis e orientados a negócios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <button className="px-6 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.35)] transition font-semibold">
                Ver Projetos
              </button>

              <button className="px-6 py-4 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition">
                Entrar em Contato
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="absolute w-[380px] h-[380px] bg-blue-500/20 blur-[100px] rounded-full"></div>

            <div className="relative w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] bg-zinc-900 group">

              <img
                src={waf}
                alt="Wellington Araújo"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}