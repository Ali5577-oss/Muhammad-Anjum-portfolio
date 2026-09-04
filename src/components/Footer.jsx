import { memo, useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    let frameId = 0
    const handleScroll = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(() => {
        frameId = 0
        setShowBackToTop(current => {
          const next = window.scrollY > 500
          return current === next ? current : next
        })
      })
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <footer className="relative border-t border-theme bg-secondary py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400"><span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Available for freelance</span>
        <h3 className="mt-4 text-lg font-semibold">Muhammad Anjum Tariq</h3>
        <p className="text-secondary">Computer Science Student & Developer</p>
        <p className="mt-2 text-secondary">Available for freelance projects - let's build something great together.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="rounded-full border border-theme p-2 text-secondary transition-colors hover:border-accent-400 hover:bg-accent-500 hover:text-white" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="rounded-full border border-theme p-2 text-secondary transition-colors hover:border-accent-400 hover:bg-accent-500 hover:text-white" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:kmanjum617@gmail.com" className="rounded-full border border-theme p-2 text-secondary transition-colors hover:border-accent-400 hover:bg-accent-500 hover:text-white" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-4 text-sm text-secondary">
          © 2026 Muhammad Anjum Tariq. All rights reserved.
        </p>
      </div>
      {showBackToTop && <a href="#home" aria-label="Back to top" className="absolute bottom-8 right-6 rounded-full border border-theme bg-card p-3 text-secondary shadow-card transition-all hover:-translate-y-1 hover:text-accent-500 sm:right-10"><ArrowUp className="h-4 w-4" /></a>}
    </footer>
  )
}

export default memo(Footer)