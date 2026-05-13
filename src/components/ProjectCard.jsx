import { useLanguage } from '../context/LanguageContext'

export default function ProjectCard({ project, onClick }) {
  const { language } = useLanguage()

  return (
    <div onClick={() => onClick(project)}>

      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title?.[language]}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-8">

        <h3>
          {project.title?.[language]}
        </h3>

      </div>

    </div>
  )
}