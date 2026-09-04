import { memo, useEffect, useRef, useState } from 'react'
import { Github, Linkedin, ArrowRight, Sparkles, Send } from 'lucide-react'

const phrases = ['modern web experiences', 'ideas into reality', 'responsive websites', 'cross-platform apps']

function Hero() {
  const [phrase, setPhrase] = useState(0)
  const photoRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => setPhrase(current => (current + 1) % phrases.length), 3000)
    return () => clearInterval(timer)
  }, [])

  const handleTilt = (event) => {
    const element = photoRef.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = element.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    element.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 6}deg) translateY(-4px)`
  }
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="hero-grid absolute inset-0 -z-10 opacity-70" />
      <div className="absolute -left-32 top-24 -z-10 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl animate-gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-theme bg-card/70 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-secondary backdrop-blur-sm">
              <span className="pulse-dot h-2 w-2 rounded-full bg-green-500" /> Available for freelance
            </span>
            <p className="section-label mt-8">Full Stack & Mobile App Developer</p>
            <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
             <span className="text-gradient">Muhammad Anjum Tariq...</span> Turning ideas into digital reality 🔥.
 
            </h1>
            <p className="mt-6 min-h-8 text-xl font-semibold text-secondary sm:text-2xl">
              I build <span className="typing-caret pr-1 text-primary">{phrases[phrase]}</span>
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-secondary sm:text-lg">
              I am a Computer Science student with around 1 year of practical development experience. I help businesses and individuals turn ideas into reliable, user-friendly digital products through thoughtful web applications, mobile apps, and full-stack solutions. I am available for freelance projects and open to custom offers that match my skills while I continue learning and growing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center rounded-lg bg-gradient px-5 py-3 font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
              >
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-theme bg-card/50 px-5 py-3 font-semibold transition-colors hover:border-accent-400 hover:bg-card"
              >
                Contact Me
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-accent-500/50 px-5 py-3 font-semibold text-accent-700 transition-colors hover:bg-accent-50 dark:text-accent-300 dark:hover:bg-accent-900/20"
              >
                <Send className="h-4 w-4" /> Hire Me
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <a
                href="#"
                className="group relative rounded-full border border-theme p-2.5 transition-colors hover:border-accent-400 hover:text-accent-500"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="group relative rounded-full border border-theme p-2.5 transition-colors hover:border-accent-400 hover:text-accent-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right: Profile photo placeholder */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative animate-float">
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-accent-400/30 to-teal-400/20 blur-3xl animate-gradient" />
              <div ref={photoRef} onMouseMove={handleTilt} onMouseLeave={() => { photoRef.current.style.transform = '' }} className="relative h-72 w-72 rounded-[1.75rem] border border-white/80 bg-gradient p-1 shadow-2xl transition-transform duration-300 sm:h-80 sm:w-80">
                <div className="h-full w-full overflow-hidden rounded-[1.5rem] border-4 border-white/80 dark:border-slate-800">
                {/* Replace this with your actual photo */}
                <img
                  src="/prof.jpg"
                  alt="Muhammad Anjum Tariq"
                  width="320"
                  height="320"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23e2e8f0"/><text x="50" y="50" font-family="Arial" font-size="14" fill="%2364748b" text-anchor="middle" dominant-baseline="middle">Your Photo</text></svg>'
                  }}
                />
                </div>
              </div>
              <div className="absolute -bottom-7 -left-8 rounded-xl border border-theme glass px-4 py-3 shadow-card">
                <div className="flex items-center gap-2 text-sm font-semibold"><Sparkles className="h-4 w-4 text-accent-500" /> Building with purpose</div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-accent-500 rounded-full opacity-30 animate-float"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-accent-700 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)