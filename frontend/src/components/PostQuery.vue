<template>
  <div class="p-4 space-y-4">
    <h2 class="text-xl font-bold">Posts</h2>

    <div v-if="loading">Loading posts...</div>
    <div v-else-if="error" class="text-red-500">Error: {{ error.message }}</div>

    <ul v-else class="space-y-2">
      <li v-for="(post, index) in posts" :key="index" class="border p-2 rounded shadow">
        <h3 class="font-semibold">{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <p class="text-sm text-gray-600">Author ID: {{ post.authorId }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { gql } from '@apollo/client/core'
import { computed } from 'vue'

// GraphQL query
const GET_POSTS = gql`
  query GetPosts {
    posts {
      title
      content
      authorId
    }
  }
`

// Apollo composable
const { result, loading, error } = useQuery(GET_POSTS)

// Extract posts from result
const posts = computed(() => result.value?.posts || [])
</script>
