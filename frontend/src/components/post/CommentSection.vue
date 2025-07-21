<template>
  <div class="comments">
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <p><strong>{{ comment.author.name }}</strong>: {{ comment.content }}</p>
    </div>

    <form @submit.prevent="addComment">
      <input v-model="newComment" placeholder="Add a comment..." />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Comment } from '@/types'

const props = defineProps<{ postId: number }>()
const comments = ref<Comment[]>([])
const newComment = ref('')

onMounted(async () => {
  comments.value = await fetch(`/api/posts/${props.postId}/comments`).then(res => res.json())
})

const addComment = async () => {
  const comment = await fetch(`/api/posts/${props.postId}/comments`, {
    method: 'POST',
    body: JSON.stringify({ content: newComment.value }),
  }).then(res => res.json())
  comments.value.push(comment)
  newComment.value = ''
}
</script>
