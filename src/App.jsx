import { useState } from 'react'

import projects from './data/projects'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ProjectModal from './components/ProjectModal'

import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <LanguageProvider>
      <div className="relative bg-zinc-950 text-white overflow-hidden">

        {/* GLOW EFFECTS */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="fixed top-[30%] left-[-200px] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed bottom-0 right-[-200px] w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <Navbar />

        <main className="relative z-10">
          <Hero />
          <About />

          <Projects setActiveProject={setActiveProject} />

          <Services
            setActiveProject={setActiveProject}
            projects={projects}
          />

          <Contact />
        </main>

        <Footer />

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </LanguageProvider>
  )
}