import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="relative bg-zinc-950 text-white overflow-hidden">

      {/* GLOW EFFECTS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="fixed top-[30%] left-[-200px] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-[-200px] w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />

        {/* PROJECTS */}
        <Projects setActiveProject={setActiveProject} />

        <Services />
        <Contact />
      </main>

      <Footer />

      {/* ===================================== */}
      {/* 🔥 CASE STUDY MODAL (VERSÃO PREMIUM) */}
      {/* ===================================== */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-start justify-center overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          {/* CONTAINER */}
          <div
            className="relative w-full max-w-5xl my-16 mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CARD */}
            <div className="bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">

              {/* HEADER */}
              <div className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">

                <div>
                  <p className="text-blue-400 text-xs uppercase tracking-widest">
                    {activeProject.category}
                  </p>

                  <h2 className="text-lg font-bold">
                    {activeProject.title}
                  </h2>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="w-10 h-10 rounded-xl border border-white/10 hover:bg-white/5 transition"
                >
                  ✕
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-12 space-y-14">

                {/* IMAGE */}
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full object-cover"
                  />
                </div>

                {/* PROBLEMA */}
                <section>
                  <h3 className="text-xl font-semibold mb-3">
                    Problema
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {activeProject.problem}
                  </p>
                </section>

                {/* SOLUÇÃO */}
                <section>
                  <h3 className="text-xl font-semibold mb-3">
                    Solução
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {activeProject.solution}
                  </p>
                </section>

                {/* RESULTADO */}
                <section>
                  <h3 className="text-xl font-semibold mb-3">
                    Resultado
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {activeProject.result}
                  </p>
                </section>

                {/* STACK */}
                <section>
                  <h3 className="text-xl font-semibold mb-4">
                    Tecnologias
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* DESTAQUES */}
                {activeProject.highlights && (
                  <section>
                    <h3 className="text-xl font-semibold mb-4">
                      Destaques
                    </h3>

                    <ul className="space-y-2 text-zinc-400">
                      {activeProject.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-blue-400">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}