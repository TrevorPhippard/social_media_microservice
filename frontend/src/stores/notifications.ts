import { defineStore } from 'pinia'
import { NotificationService } from '@/services/NotificationService'
import { ApiClient } from '@/services/ApiClient'
import type { Notification } from '@/types'

const apiClient = new ApiClient(import.meta.env.VITE_API_BASE_URL, () =>
  localStorage.getItem('token'),
)
const notificationService = new NotificationService(apiClient)

export const useNotificationStore = defineStore('notifications', {
  state: () => ({
    notifications: [] as Notification[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchNotifications() {
      this.loading = true
      try {
        this.notifications = await notificationService.fetchNotifications()
      } catch (err: any) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    async markAsRead(id: number) {
      await notificationService.markAsRead(id)
      const notif = this.notifications.find((n) => n.id === id)
      if (notif) notif.isRead = true
    },
    async markAllAsRead() {
      await notificationService.markAllAsRead()
      this.notifications.forEach((n) => (n.isRead = true))
    },
  },
})
