import { ApiClient } from './ApiClient'
import type { Notification } from '@/types'

const NotificationStub: Notification[] = [
  {
    id: 1,
    userId: 1,
    type: 'like', // ✅ must be one of 'like' | 'comment' | 'follow' | 'mention'
    message: 'John liked your post.',
    isRead: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 1,
    userId: 1,
    type: 'like', // ✅ must be one of 'like' | 'comment' | 'follow' | 'mention'
    message: 'Mike comment on your post.',
    isRead: false,
    createdAt: new Date().toISOString(),
  },
]

export class NotificationService {
  private api: ApiClient

  constructor(apiClient: ApiClient) {
    this.api = apiClient
  }

  // Fetch notifications for current user
  fetchNotifications(): Promise<Notification[]> {
    return Promise.resolve(NotificationStub)

    //this.api.get<Notification[]>('/api/notifications')
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
