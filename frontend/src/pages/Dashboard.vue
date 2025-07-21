<!-- src/pages/Dashboard.vue -->
<template>
  <section class="dashboard">
    <h1>Dashboard</h1>

    <div class="stats-grid">
      <DashboardCard title="Users" :value="stats.users" icon="👥" />
      <DashboardCard title="Posts" :value="stats.posts" icon="📝" />
      <DashboardCard title="Comments" :value="stats.comments" icon="💬" />
      <DashboardCard title="Active Now" :value="stats.activeUsers" icon="⚡️" />
    </div>

    <div class="charts">
      <!-- Placeholder for charts -->
      <p>Charts and analytics will go here</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DashboardCard from '@/components/dashboard/DashboardCard.vue'

interface Stats {
  users: number
  posts: number
  comments: number
  activeUsers: number
}

const stats = ref<Stats>({
  users: 0,
  posts: 0,
  comments: 0,
  activeUsers: 0,
})

onMounted(async () => {
  // Fetch stats from your API
  // Replace with your real API endpoint
  const response = await fetch('/api/dashboard/stats')
  if (response.ok) {
    const data = await response.json()
    stats.value = data
  } else {
    // Fallback or error handling
    stats.value = {
      users: 1200,
      posts: 3400,
      comments: 8700,
      activeUsers: 125,
    }
  }
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
