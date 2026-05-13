export default function About() {
  return (
    <section
      id="about"
      className="py-32 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Sobre
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              Desenvolvimento orientado a soluções reais.
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-zinc-300 text-xl leading-relaxed">
              Desenvolvedor Full Stack especializado em Laravel,
              PHP e JavaScript, com experiência no desenvolvimento
              de sistemas administrativos, painéis de gestão,
              autenticação, controle de permissões e aplicações
              orientadas a regras de negócio.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Meu foco é criar aplicações web modernas,
              escaláveis e organizadas que tragam automação,
              produtividade e melhor gestão operacional para
              empresas e instituições.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Trabalho principalmente com Laravel, TailwindCSS,
              MySQL e APIs REST, desenvolvendo soluções completas
              do backend ao frontend.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                <h3 className="text-4xl font-black mb-3">
                  3+
                </h3>

                <p className="text-zinc-400">
                  Sistemas administrativos desenvolvidos
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                <h3 className="text-4xl font-black mb-3">
                  Full Stack
                </h3>

                <p className="text-zinc-400">
                  Backend, frontend e integrações
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}