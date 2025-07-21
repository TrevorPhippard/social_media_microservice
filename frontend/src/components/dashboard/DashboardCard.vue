<!-- src/components/dashboard/DashboardCard.vue -->
<template>
  <div class="card">
    <div class="icon">{{ icon }}</div>
    <div class="content">
      <p class="title">{{ title }}</p>
      <p class="value">{{ value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: number
  icon: string
}>()
</script>

<style scoped>
.card {
  background: white;
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: default;
  user-select: none;
}

.icon {
  font-size: 2rem;
  line-height: 1;
}

.title {
  font-weight: 600;
  color: #555;
  margin: 0;
}

.value {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  color: #222;
}
</style>
