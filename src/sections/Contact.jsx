export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 md:p-16">
          <div className="max-w-4xl">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Contato
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Vamos construir algo profissional juntos.
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed mb-12">
              Disponível para oportunidades remotas,
              freelas, contratos PJ e desenvolvimento
              de sistemas web modernos utilizando
              Laravel, PHP e JavaScript.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="mailto:seuemail@email.com"
                className="px-6 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition font-semibold"
              >
                Entrar em Contato
              </a>

              <a
                href="https://github.com/seugithub"
                target="_blank"
                className="px-6 py-4 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/seulinkedin"
                target="_blank"
                className="px-6 py-4 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
              >
                LinkedIn
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
                <h3 className="font-bold mb-2">
                  Trabalho Remoto
                </h3>

                <p className="text-zinc-400 text-sm">
                  Disponível para projetos nacionais e internacionais.
                </p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
                <h3 className="font-bold mb-2">
                  Full Stack
                </h3>

                <p className="text-zinc-400 text-sm">
                  Backend, frontend, APIs e integrações.
                </p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
                <h3 className="font-bold mb-2">
                  Laravel Specialist
                </h3>

                <p className="text-zinc-400 text-sm">
                  Desenvolvimento de aplicações modernas e escaláveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}