<template>
  <div class="comments">
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <p>
        <strong>{{ comment.author.username }}</strong
        >: {{ comment.content }}
      </p>
    </div>

    <form @submit.prevent="submitComment">
      <input v-model="newComment" placeholder="Add a comment..." />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useCommentStore } from '@/stores/commentStore'

const props = defineProps<{ postId: number }>()
const commentStore = useCommentStore()
const newComment = ref('')

onMounted(() => {
  commentStore.loadComments(props.postId)
})

const comments = computed(() => commentStore.getComments(props.postId))

const submitComment = async () => {
  if (!newComment.value.trim()) return
  await commentStore.addComment(props.postId, newComment.value)
  newComment.value = ''
}
</script>
