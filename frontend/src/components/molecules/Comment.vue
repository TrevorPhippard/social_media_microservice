<template>
  <article class="flex space-x-3 p-3 rounded hover:bg-gray-50">
    <BaseAvatar :src="comment.author.avatar" :alt="comment.author.username" size="sm" />
    <div class="flex-1">
      <header class="flex items-center space-x-2">
        <h4 class="font-semibold text-gray-900">{{ comment.author.username }}</h4>
        <time class="text-xs text-gray-500">{{ formattedDate }}</time>
      </header>
      <p class="mt-1 text-gray-800 whitespace-pre-wrap">{{ comment.content }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseAvatar from '@/components/atoms/BaseAvatar.vue'

const props = defineProps<{
  comment: {
    author: { username: string; avatar?: string }
    content: string
    createdAt?: string | Date
  }
}>()

const formattedDate = computed(() => {
  if (!props.comment.createdAt) return ''
  const date = new Date(props.comment.createdAt)
  return date.toLocaleString()
})
</script>
