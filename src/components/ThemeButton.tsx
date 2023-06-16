import { useTheme } from 'next-themes'
import { Moon, SunDim } from 'phosphor-react'
import { useEffect, useState } from 'react'

export function ThemeButton() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      type="button"
      className="flex items-center justify-center h-10 w-10 rounded-md   transition-colors duration-300 dark:bg-purple-400 dark:hover:bg-purple-400/80 bg-yellow-500 hover:bg-yellow-500/80"
      data-cy="theme-button"
    >
      {theme === 'dark' && (
        <SunDim size={16} className="text-zinc-800" weight="bold" />
      )}

      {theme === 'light' && (
        <Moon size={16} weight="fill" className="text-white" />
      )}
    </button>
  )
}
