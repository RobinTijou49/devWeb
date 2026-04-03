import { ref, onMounted } from 'vue'

const theme = ref('light')

export function useTheme() {
  const setTheme = (newTheme) => {
    theme.value = newTheme
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
    localStorage.setItem('theme', newTheme)
    console.debug('[useTheme] setTheme', newTheme)
  }

  const toggleTheme = () => {
    const next = theme.value === 'light' ? 'dark' : 'light'
    console.debug('[useTheme] toggleTheme', theme.value, '->', next)
    setTheme(next)
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
    } else {
      // optionnel : détecter le thème système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  })

  return { theme, toggleTheme }
}
