<template>
  <form @submit.prevent="submitPost">
    <textarea v-model="content" placeholder="What's on your mind?"></textarea>
    <button type="submit">Post</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content = ref('')

const submitPost = async () => {
  await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({ content: content.value }),
  })
  content.value = ''
}
</script>
