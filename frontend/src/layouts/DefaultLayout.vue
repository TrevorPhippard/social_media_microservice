<template>
  <div class="layout-default">
    <Navbar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
</script>

<style scoped>
.main-content {
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
}
</style>
