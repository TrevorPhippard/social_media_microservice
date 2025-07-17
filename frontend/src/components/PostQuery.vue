<template>
  <div class="max-w-3xl mx-auto mt-10 p-4">

    <div v-if="loading" class="text-gray-500">Loading posts...</div>
    <div v-else-if="error" class="text-red-600">Error: {{ error.message }}</div>

    <ul v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <li v-for="(post, index) in posts" :key="index"
          class="bg-white shadow-md rounded-lg p-4 border border-gray-100 hover:shadow-lg transition">
        <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ post.title }}</h3>
        <p class="text-gray-700 mb-2">{{ post.content }}</p>
        <p class="text-sm text-gray-500">Author ID: {{ post.authorId }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'
import { GET_POSTS } from '@/graphql/post'

const { result, loading, error } = useQuery(GET_POSTS)

const posts = computed(() => result.value?.posts || [])
</script>
