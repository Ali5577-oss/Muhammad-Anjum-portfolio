import { memo } from 'react'
import { Github, ExternalLink, Star } from 'lucide-react'

function ProjectCard({ project }) {
  return (
    <article className="reveal card-hover project-tilt group overflow-hidden rounded-2xl border border-theme bg-card shadow-card">
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          width="400"
          height="208"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23e2e8f0"/><text x="200" y="100" font-family="Arial" font-size="16" fill="%2364748b" text-anchor="middle" dominant-baseline="middle">Project Screenshot</text></svg>'
          }}
        />
        <div className="absolute inset-0 flex translate-y-3 items-end justify-center gap-2 bg-slate-950/55 pb-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-900"><Github className="h-3.5 w-3.5" /> Code</a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-gradient px-3 py-2 text-xs font-bold text-white"><ExternalLink className="h-3.5 w-3.5" /> Live demo</a>}
        </div>
        {project.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg border border-white/20 bg-slate-950/65 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
            <Star className="w-3 h-3 mr-1" /> Featured
          </span>
        )}
        <span className="absolute bottom-3 right-3 px-3 py-1 bg-gray-900/70 text-white text-xs rounded-full">
          {project.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-secondary">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="rounded-md border border-theme px-2 py-1 text-xs text-accent-700 dark:text-accent-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="inline-flex items-center text-sm font-medium text-accent-600 dark:text-accent-400 hover:underline"
            >
              <Github className="w-4 h-4 mr-1" /> View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="inline-flex items-center text-sm font-medium text-accent-600 dark:text-accent-400 hover:underline"
            >
              <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default memo(ProjectCard)