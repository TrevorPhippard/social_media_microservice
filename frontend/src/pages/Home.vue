<!-- src/pages/Home.vue -->
<template>
  <section class="home">
    <h1>Welcome, Trevor</h1>
    <!-- <h1>Welcome, {{ user?.name }}</h1> -->
    <PostFeed />
  </section>
</template>

<script setup lang="ts">
// import { useAuthStore } from '@/stores/auth'
import PostFeed from '@/components/post/PostFeed.vue'

// const userStore = useAuthStore()
// const user = userStore.user
</script>
