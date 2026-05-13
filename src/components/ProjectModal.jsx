import { useLanguage } from '../context/LanguageContext'

export default function ProjectModal({ project, onClose }) {
  const { language } = useLanguage()

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl my-16 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

          {/* HEADER */}
          <div className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">

            <div>
              <p className="text-blue-400 text-xs uppercase tracking-widest">
                {project.category?.[language] || project.category}
              </p>

              <h2 className="text-lg font-bold">
                {project.title?.[language] || project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl border border-white/10 hover:bg-white/5 transition"
            >
              ✕
            </button>
          </div>

          {/* IMAGE */}
          <div className="border-b border-white/10">
            <img
              src={project.image}
              alt={project.title?.[language]}
              className="w-full h-[320px] object-cover"
            />
          </div>

          <div className="p-8 md:p-12 space-y-12">

            {/* OVERVIEW */}
            <section>
              <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-3">
                Overview
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                {project.description?.[language]}
              </p>
            </section>

            {/* CONTEXT */}
            {project.context && (
              <section>
                <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-3">
                  {language === 'pt' ? 'Contexto' : 'Context'}
                </h3>
                <p className="text-zinc-400 leading-relaxed whitespace-pre-line">
                  {project.context?.[language]}
                </p>
              </section>
            )}

            {/* CHALLENGES */}
            {project.challenges && (
              <section className="border-l-2 border-yellow-500/30 pl-4">
                <h3 className="text-sm uppercase tracking-widest text-yellow-400 mb-3">
                  {language === 'pt' ? 'Desafios' : 'Challenges'}
                </h3>
                <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
                  {project.challenges?.[language]}
                </p>
              </section>
            )}

            {/* SOLUTION */}
            {project.solution && (
              <section className="border-l-2 border-blue-500/30 pl-4">
                <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-3">
                  {language === 'pt' ? 'Solução' : 'Solution'}
                </h3>
                <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
                  {project.solution?.[language]}
                </p>
              </section>
            )}

            {/* RESULT */}
            {project.result && (
              <section>
                <h3 className="text-sm uppercase tracking-widest text-green-400 mb-3">
                  {language === 'pt' ? 'Resultado' : 'Result'}
                </h3>
                <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
                  {project.result?.[language]}
                </p>
              </section>
            )}

            {/* IMPACT */}
            {project.impact && (
              <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-sm uppercase tracking-widest text-purple-400 mb-3">
                  {language === 'pt' ? 'Impacto' : 'Impact'}
                </h3>
                <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
                  {project.impact?.[language]}
                </p>
              </section>
            )}

            {/* TECHNOLOGIES */}
            {project.technologies?.length > 0 && (
              <section>
                <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-4">
                  {language === 'pt' ? 'Tecnologias' : 'Technologies'}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* HIGHLIGHTS */}
            {project.highlights?.length > 0 && (
              <section>
                <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-4">
                  {language === 'pt' ? 'Destaques' : 'Highlights'}
                </h3>

                <ul className="space-y-2 text-zinc-300">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-400">•</span>
                      {item?.[language] || item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}