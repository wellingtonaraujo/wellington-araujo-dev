export default function ProjectCard({ project, onClick }) {
  return (
    <div onClick={() => onClick(project)}>
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-8">
        <h3>{project.title}</h3>
      </div>
    </div>
  )
}