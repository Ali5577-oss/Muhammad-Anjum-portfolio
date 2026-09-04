import { useCallback, useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frameId = 0
    const handleScroll = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(() => {
        frameId = 0
        setScrolled(window.scrollY > 18)
        const scrollPosition = window.scrollY + 100
        for (const item of navItems) {
          const section = item.href.substring(1)
          const element = document.getElementById(section)
          if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
            setActiveSection(current => current === section ? current : section)
            break
          }
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  const toggleMenu = useCallback(() => setIsOpen(open => !open), [])
  const closeMenu = useCallback(() => setIsOpen(false), [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-theme shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-gradient transition-transform hover:scale-105 inline-block">
              MAT
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className={`link-underline px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-accent-600 dark:text-accent-400'
                    : 'text-secondary hover:text-primary dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-3 inline-flex items-center gap-1.5 rounded-lg bg-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105">
              Hire Me <ArrowUpRight className="h-4 w-4" />
            </a>
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            <button
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md text-secondary hover:text-primary dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-5 animate-fade-in border-t border-theme/70">
            <div className="pt-3 pb-1 space-y-1">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-gray-800'
                      : 'text-secondary hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={closeMenu} className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-gradient px-4 py-3 font-semibold text-white">
                Hire Me <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}