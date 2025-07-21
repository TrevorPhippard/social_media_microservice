<template>
  <div class="max-w-2xl mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-4">Feed</h1>

    <div v-if="loading" class="text-center text-gray-500">
      Loading posts...
    </div>

    <div v-else-if="error" class="text-red-500 text-center">
      {{ error }}
    </div>

    <div v-else>
      <div v-if="posts.length === 0" class="text-center text-gray-500">
        No posts yet.
      </div>

      <div v-for="post in posts" :key="post.id" class="mb-6">
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import PostCard from '@/components/post/PostCard.vue'
import { usePosts } from '@/composables/usePosts'

const { posts, loading, error, fetchPosts } = usePosts()

onMounted(fetchPosts)

</script>
