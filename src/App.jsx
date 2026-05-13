import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

export default function App() {
  return (
    <div className="bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  )
}