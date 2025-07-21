<template>
  <div class="dashboard-layout">
    <Sidebar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue'
</script>

<style scoped>
.dashboard-layout {
  display: flex;
}
main {
  flex: 1;
  padding: 1rem;
}
</style>
