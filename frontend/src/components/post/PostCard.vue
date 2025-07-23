<!-- src/components/post/PostCard.vue -->
<template>
  <div class="post-card">
    <h2>{{ post.author.username }}</h2>
    <p>{{ post.content }}</p>
    <small>{{ post.createdAt }}</small>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  post: {
    id: number
    author: {
      id: number
      username: string
      email: string
      avatarUrl?: string
      bio?: string
      createdAt: string
      updatedAt: string
      token: string
      refreshToken?: string
    }
    content: string
    imageUrl?: string
    createdAt: string
    updatedAt: string
    likesCount: number
    commentsCount: number
  }
}>()
</script>
