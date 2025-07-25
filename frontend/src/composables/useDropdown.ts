import { ref, onMounted, onUnmounted } from 'vue'

export function useDropdown() {
  const isOpen = ref(false)
  const dropdownRef = ref<HTMLElement | null>(null)

  const open = () => (isOpen.value = true)
  const close = () => (isOpen.value = false)
  const toggle = () => (isOpen.value = !isOpen.value)

  function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      close()
    }
  }

  function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      close()
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
    document.removeEventListener('keydown', handleEscape)
  })

  return {
    isOpen,
    dropdownRef,
    open,
    close,
    toggle,
  }
}
