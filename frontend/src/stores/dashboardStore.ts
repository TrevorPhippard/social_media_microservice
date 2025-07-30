// src/stores/dashboardStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { DashboardService, type Stats } from '@/services/DashboardService'

export const useDashboardStore = defineStore('dashboard', () => {
  const stats = ref<Stats>({
    users: 0,
    posts: 0,
    comments: 0,
    activeUsers: 0,
  })

  async function loadStats() {
    stats.value = await DashboardService.fetchStats()
  }

  return {
    stats,
    loadStats,
  }
})
