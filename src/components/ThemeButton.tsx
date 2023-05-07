import { Moon, SunDim } from 'phosphor-react'
import { useEffect, useState } from 'react'

type ThemeType = 'dark' | 'light'

export function ThemeButton() {
  const [theme, setTheme] = useState<ThemeType>()

  useEffect(() => {
    setTheme('dark')
  }, [])

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      onClick={handleToggleTheme}
      type="button"
      className="flex items-center justify-center h-10 w-10 rounded-md   transition-colors duration-300 dark:bg-purple-400 dark:hover:bg-purple-400/80 bg-yellow-500 hover:bg-yellow-500/80"
    >
      {theme === 'dark' && (
        <Moon size={16} weight="fill" className="text-white" />
      )}

      {theme === 'light' && (
        <SunDim size={16} className="text-zinc-800" weight="bold" />
      )}
    </button>
  )
}
