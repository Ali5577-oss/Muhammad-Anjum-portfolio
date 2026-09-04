import { memo } from 'react'
import { Code2, Briefcase, GraduationCap, Download, Sparkles } from 'lucide-react'

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label">The journey</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Development experience</h2>
          <div className="mt-2 h-1 w-20 bg-accent-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            I am currently open to freelance opportunities and custom project offers where I can contribute, communicate clearly, and deliver dependable work.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative ml-4 border-l-2 border-accent-500/30 pl-8">
            {/* Timeline item */}
            <div className="reveal relative mb-10">
              <div className="pulse-dot absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-secondary bg-accent-500"></div>
              <div className="card-hover rounded-2xl border border-theme bg-card p-6 shadow-card">
                <div className="flex items-center mb-2">
                  <Briefcase className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-2" />
                  <h3 className="text-lg font-semibold">Approximately 1 Year</h3>
                </div>
                <p className="text-secondary">
                  Over approximately 1 year, I have worked on personal and academic projects including responsive websites, full-stack applications, database-backed features, and Flutter mobile experiences. I have used React, Tailwind CSS, JavaScript, PHP, Node.js, Java, MySQL, MongoDB, Firebase, and Spring Boot while focusing on usable interfaces, working functionality, and measurable progress from idea to implementation.
                </p>
              </div>
            </div>
            <div className="reveal relative mb-10">
              <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-secondary bg-teal-500"></div>
              <div className="card-hover rounded-2xl border border-theme bg-card p-6 shadow-card">
                <div className="flex items-center mb-2">
                  <Code2 className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-2" />
                  <h3 className="text-lg font-semibold">Freelance Ready</h3>
                </div>
                <p className="text-secondary">
                  Ready to take on client projects with an honest understanding of my current experience. I will clarify requirements, communicate progress, adapt to feedback, and deliver quality work within an agreed scope and timeline.
                </p>
              </div>
            </div>
            {/* Future learning item */}
            <div className="reveal relative">
              <div className="absolute -left-[41px] top-1 w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full border-4 border-white dark:border-gray-800"></div>
              <div className="card-hover rounded-2xl border border-theme bg-card p-6 shadow-card">
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-2" />
                  <h3 className="text-lg font-semibold">Continuous Learning</h3>
                </div>
                <p className="text-secondary">
                  Actively exploring modern technologies, strengthening my fundamentals, and building real-world projects so I can bring better solutions to future clients and teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="reveal card-hover rounded-2xl border border-theme bg-card/70 p-6 text-center shadow-card backdrop-blur-sm">
            <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">~1</div>
            <div className="text-secondary mt-2">Year Development Experience</div>
          </div>
          <div className="reveal card-hover rounded-2xl border border-theme bg-card/70 p-6 text-center shadow-card backdrop-blur-sm">
            <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">Web + Mobile</div>
            <div className="text-secondary mt-2">Development Focus</div>
          </div>
          <div className="reveal card-hover rounded-2xl border border-theme bg-card/70 p-6 text-center shadow-card backdrop-blur-sm">
            <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">10+</div>
            <div className="text-secondary mt-2">Technologies & Tools</div>
          </div>
          <div className="reveal card-hover rounded-2xl border border-theme bg-card/70 p-6 text-center shadow-card backdrop-blur-sm">
            <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">Open</div>
            <div className="text-secondary mt-2">For Freelance Projects</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Experience)