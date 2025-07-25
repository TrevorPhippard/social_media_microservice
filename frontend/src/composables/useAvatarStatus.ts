import { ref, onMounted, onUnmounted } from 'vue'

type Status = 'online' | 'idle' | 'offline'

const userStatusMap = new Map<string, Status>() // mock map for now

export function useAvatarStatus(userId?: string) {
  const status = ref<Status>('offline')

  function fetchStatus(id?: string) {
    // Simulate online status (replace w/ socket-based presence later)
    if (!id) return
    status.value = userStatusMap.get(id) ?? 'offline'
  }

  onMounted(() => {
    fetchStatus(userId)
  })

  onUnmounted(() => {
    // Optional: clear interval or unsubscribe
  })

  return { status }
}
