import { useNotificationStore } from '@/stores/notifications'

export async function useApi<T>(url: string, options?: RequestInit): Promise<T | null> {
  const notify = useNotificationStore()
  try {
    const res = await fetch(url, options)
    if (!res.ok) throw new Error(await res.text())
    return await res.json()
  } catch (err: any) {
    notify.addNotification(err.message || 'API error')
    return null
  }
}
