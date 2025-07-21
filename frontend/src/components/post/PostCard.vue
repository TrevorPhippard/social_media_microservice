<!-- src/components/post/PostCard.vue -->
<template>
  <div class="post-card">
    <h2>{{ post.author.name }}</h2>
    <p>{{ post.content }}</p>
    <small>{{ post.createdAt }}</small>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  post: {
    id: number
    content: string
    createdAt: string
    author: {
      name: string
    }
  }
}>()
</script>
