<template>
  <div class="flex min-h-screen">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Navbar />
      <main class="flex-1 p-4 bg-gray-50 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
</script>
