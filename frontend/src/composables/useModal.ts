import { ref } from 'vue'

type ModalKey = string

const openModals = ref<ModalKey[]>([])

export function useModal(modalId: ModalKey) {
  const isOpen = ref(false)

  const open = () => {
    if (!openModals.value.includes(modalId)) {
      openModals.value.push(modalId)
      isOpen.value = true
    }
  }

  const close = () => {
    openModals.value = openModals.value.filter((id) => id !== modalId)
    isOpen.value = false
  }

  const toggle = () => {
    isOpen.value ? close() : open()
  }

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}
