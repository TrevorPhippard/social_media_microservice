import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const darkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

  function toggleTheme() {
    darkMode.value = !darkMode.value
  }

  watch(
    darkMode,
    (val) => {
      document.documentElement.classList.toggle('dark', val)
    },
    { immediate: true },
  )

  return { darkMode, toggleTheme }
})
