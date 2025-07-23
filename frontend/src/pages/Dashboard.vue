<!-- src/pages/Dashboard.vue -->

<template>
  <section class="dashboard">
    <h1>Dashboard</h1>

    <div class="stats-grid">
      <DashboardCard title="Users" :value="dashboard.stats.users" icon="👥" />
      <DashboardCard title="Posts" :value="dashboard.stats.posts" icon="📝" />
      <DashboardCard title="Comments" :value="dashboard.stats.comments" icon="💬" />
      <DashboardCard title="Active Now" :value="dashboard.stats.activeUsers" icon="⚡️" />
    </div>

    <div class="charts">
      <p>Charts and analytics will go here</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import DashboardCard from '@/components/dashboard/DashboardCard.vue'
import { useDashboardStore } from '@/stores/dashboardStore'

const dashboard = useDashboardStore()

onMounted(() => {
  dashboard.loadStats()
})
</script>

<style scoped>
.dashboard {
  padding: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.charts {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: #777;
  font-style: italic;
  font-size: 1.1rem;
}
</style>
