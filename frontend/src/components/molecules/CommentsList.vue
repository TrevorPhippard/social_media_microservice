<template>
  <div class="space-y-4">
    <Comment
      v-for="comment in postComments"
      :key="comment.id"
      :comment="comment"
    />
    <CommentBox @submit="onSubmit" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCommentsStore } from '@/stores/useCommentsStore'
import Comment from '@/components/molecules/Comment.vue'
import CommentBox from '@/components/molecules/CommentBox.vue'

const props = defineProps<{
  postId: string
}>()

const commentsStore = useCommentsStore()

const postComments = computed(() =>
  commentsStore.getCommentsForPost(props.postId).sort((a, b) =>
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  )
)

function onSubmit(text: string) {
  commentsStore.addComment({
    id: Math.random().toString(36).slice(2),
    postId: props.postId,
    author: { id: 'currentUser', username: 'You' },
    content: text,
    createdAt: new Date(),
  })
}
</script>
