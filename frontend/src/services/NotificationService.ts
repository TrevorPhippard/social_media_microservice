import { ApiClient } from './ApiClient'
import type { Notification } from '@/types'

export class NotificationService {
  private api: ApiClient

  constructor(apiClient: ApiClient) {
    this.api = apiClient
  }

  // Fetch notifications for current user
  fetchNotifications(): Promise<Notification[]> {
    return this.api.get<Notification[]>('/api/notifications')
  }

  // Mark a notification as read
  markAsRead(notificationId: number): Promise<void> {
    return this.api.post<void>(`/api/notifications/${notificationId}/read`, {})
  }

  // Mark all notifications as read
  markAllAsRead(): Promise<void> {
    return this.api.post<void>('/api/notifications/read-all', {})
  }
}
