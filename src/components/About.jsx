import { memo } from 'react'
import { GraduationCap, Briefcase, Code2, Lightbulb } from 'lucide-react'

const infoCards = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Computer Science student building a practical foundation in software development.',
  },
  {
    icon: Briefcase,
    title: 'Experience',
    description: 'Around 1 year of hands-on experience through academic, personal, and practical projects.',
  },
  {
    icon: Code2,
    title: 'Focus',
    description: 'Responsive web apps, full-stack features, and cross-platform mobile experiences.',
  },
  {
    icon: Lightbulb,
    title: 'Learning',
    description: 'Learning modern tools by applying them to real problems and improving with every project.',
  },
]

function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 h-72 opacity-35" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-label">A little context</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">About me</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal text-lg leading-8 text-secondary space-y-5">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-accent-500">What I do</p>
            <p>
              I am a Computer Science student and developer who enjoys turning clear ideas into useful digital experiences. With around 1 year of practical development experience, I bring curiosity, steady learning, and a hands-on mindset to every project.
            </p>
            <p>
              My focus includes responsive frontend development, backend features, database-driven applications, and Flutter mobile apps. I work with technologies such as React, Tailwind CSS, Node.js, PHP, Java, MySQL, MongoDB, Firebase, and Spring Boot according to the needs of the project.
            </p>
            <p>
              My approach is practical and collaborative: first I understand the goal and the people using the product, then I break the work into clear steps and build a maintainable solution. I care about clean interfaces, reliable functionality, responsive performance, and quality that can be reviewed and improved.
            </p>
            <p>
              When working with clients, I value clear communication, realistic timelines, and dependable delivery. I am open to freelance opportunities and custom project offers, with pricing tailored to your requirements, project scope, and timeline.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="reveal card-hover rounded-2xl border border-theme bg-card p-6 shadow-card"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500"><card.icon className="h-5 w-5" /></div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-secondary mt-1">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)