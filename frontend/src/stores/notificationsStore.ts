import { defineStore } from 'pinia'
import { ref } from 'vue'
import { NotificationService } from '@/services/NotificationService'
import { ApiClient } from '@/services/ApiClient'
import type { Notification } from '@/types'

// Initialize services outside the store for reuse
const apiClient = new ApiClient(import.meta.env.VITE_API_BASE_URL, () =>
  localStorage.getItem('token'),
)
const notificationService = new NotificationService(apiClient)

export const useNotificationStore = defineStore('notifications', () => {
  // State
  const notifications = ref<Notification[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  async function addNotification(msg: string) {
    // Implement your addNotification logic here
  }

  async function fetchNotifications() {
    loading.value = true
    error.value = null
    try {
      notifications.value = await notificationService.fetchNotifications()
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  async function markAsRead(id: number) {
    await notificationService.markAsRead(id)
    const notif = notifications.value.find((n) => n.id === id)
    if (notif) notif.isRead = true
  }

  async function markAllAsRead() {
    await notificationService.markAllAsRead()
    notifications.value.forEach((n) => (n.isRead = true))
  }

  // Return the state and actions
  return {
    notifications,
    loading,
    error,
    addNotification,
    fetchNotifications,
    markAsRead,
    markAllAsRead,
  }
})
