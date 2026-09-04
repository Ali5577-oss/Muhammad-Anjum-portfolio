import { memo } from 'react'
import { Code2, Server, Database, Smartphone } from 'lucide-react'

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    description: 'I create responsive, accessible interfaces that make products clear and easy to use across screen sizes.',
    skills: ['HTML5', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'I build practical server-side features and APIs that connect application logic with real user needs.',
    skills: ['PHP', 'Node.js', 'Java', 'Spring Boot'],
  },
  {
    icon: Database,
    title: 'Database',
    description: 'I organize application data with structured models and queries that support reliable everyday workflows.',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    description: 'I use Flutter and Firebase to develop cross-platform mobile experiences with useful connected features.',
    skills: ['Flutter', 'Firebase'],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label">The toolkit</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Technical skills</h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            I use these technologies to turn real requirements into clear, functional products while continuing to strengthen my skills through hands-on development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="reveal card-hover flex h-full flex-col rounded-2xl border border-theme bg-card p-6 shadow-card"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500"><category.icon className="h-5 w-5" /></div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <p className="text-secondary text-sm mb-4">{category.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <li
                    key={skill}
                    className="rounded-lg border border-theme px-2.5 py-1.5 text-sm text-secondary transition-all hover:scale-105 hover:border-accent-400 hover:text-accent-500"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Skills)