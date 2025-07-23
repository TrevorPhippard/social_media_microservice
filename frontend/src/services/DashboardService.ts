import type { ApiClient } from './ApiClient'

// src/services/DashboardService.ts
export interface Stats {
  users: number
  posts: number
  comments: number
  activeUsers: number
}

export class DashboardService {
  private api: ApiClient

  constructor(apiClient: ApiClient) {
    this.api = apiClient
  }

  static async fetchStats(): Promise<Stats> {
    const response = await fetch('/api/dashboard/stats')
    if (!response.ok) {
      // Fallback or throw error
      return {
        users: 1200,
        posts: 3400,
        comments: 8700,
        activeUsers: 125,
      }
    }
    return await response.json()
  }
}
