import { memo } from 'react'
import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-theme p-2 transition-all hover:rotate-12 hover:border-accent-400 hover:bg-accent-500/10"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  )
}

export default memo(ThemeToggle)