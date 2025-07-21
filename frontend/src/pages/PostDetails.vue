<template>
  <div v-if="post">
    <h2>{{ post.author.username }}</h2>
    <p>{{ post.content }}</p>
    <CommentSection :post-id="post.id" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CommentSection from '@/components/post/CommentSection.vue'
import type { Post } from '@/types'

const route = useRoute()
const postId = Number(route.params.id)
const post = ref<Post | null>(null)

onMounted(async () => {
  post.value = await fetch(`/api/posts/${postId}`).then(res => res.json())
})
</script>
