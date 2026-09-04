import { lazy, memo, Suspense, useCallback, useMemo, useState } from 'react'
import { projects } from '../data/projects'

const ProjectCard = lazy(() => import('./ProjectCard'))

const categories = ['All', 'Web', 'Mobile', 'Other']

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredProjects = useMemo(() => activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory), [activeCategory])

  const filterProjects = useCallback((category) => setActiveCategory(category), [])

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label">Selected work</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Projects</h2>
          <p className="mt-4 text-lg text-secondary">Here are some of the projects I've built. More coming soon.</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => filterProjects(category)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-gradient text-white shadow-glow'
                  : 'border border-theme bg-card text-secondary hover:border-accent-400 hover:text-accent-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={null}>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Suspense>
        </div>
        {filteredProjects.length === 0 && <p className="rounded-2xl border border-dashed border-theme p-12 text-center text-secondary">No projects in this category yet. Add yours next.</p>}
        <p className="mt-12 text-center text-lg text-secondary">Have a project in mind? <a href="#contact" className="font-semibold text-accent-500 link-underline">Let's discuss it</a>.</p>
      </div>
    </section>
  )
}

export default memo(Projects)