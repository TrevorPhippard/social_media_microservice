<template>
  <article class="bg-white rounded-lg shadow p-4 mb-4">
    <!-- Header: Avatar, Name, Timestamp -->
    <header class="flex items-center space-x-3 mb-3">
      <BaseAvatar :src="post.author.avatar" :alt="post.author.username" size="md" />
      <div>
        <h3 class="font-semibold text-gray-900">{{ post.author.username }}</h3>
        <time class="text-xs text-gray-500">{{ formattedDate }}</time>
      </div>
    </header>

    <!-- Content -->
    <section class="mb-3 whitespace-pre-wrap break-words">{{ post.content }}</section>

    <!-- Media (optional) -->
    <section v-if="post.media" class="mb-3">
      <img
        v-if="post.media.type === 'image'"
        :src="post.media.url"
        alt="Post media"
        class="rounded max-h-96 object-cover w-full"
      />
      <!-- Add video, gallery support later -->
    </section>

    <!-- Reactions -->
    <ReactionBar
      :postId="post.id"
      :initialLikes="post.likeCount"
      :initialComments="post.commentCount"
      :initialShares="post.shareCount"
      :initialLiked="post.viewerHasLiked"
      @comment="toggleComments"
      @share="handleShare"
    />

    <!-- Comments Preview -->
    <section v-if="showComments" class="mt-4 border-t pt-3 space-y-2">
      <Comment
        v-for="comment in post.comments"
        :key="comment.id"
        :comment="comment"
      />
      <CommentBox @submit="addComment" />
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseAvatar from '@/components/atoms/BaseAvatar.vue'
import ReactionBar from '@/components/molecules/ReactionBar.vue'
import Comment from '@/components/molecules/Comment.vue'
import CommentBox from '@/components/molecules/CommentBox.vue'

const props = defineProps<{
  post: {
    id: string
    author: { avatar?: string; username: string }
    content: string
    media?: { type: string; url: string }
    likeCount: number
    commentCount: number
    shareCount: number
    viewerHasLiked: boolean
    comments: Array<{ id: string; author: any; content: string }>
  }
}>()

const emits = defineEmits<{
  (e: 'share', postId: string): void
}>()

const showComments = ref(false)

const toggleComments = () => {
  showComments.value = !showComments.value
}

const addComment = (text: string) => {
  // TODO: Add comment to backend
  console.log('Add comment:', text)
  // For demo, just add to local array (ideally you update via Vuex/Pinia or API)
  props.post.comments.push({
    id: Math.random().toString(36).slice(2),
    author: { username: 'You' },
    content: text,
  })
}

const handleShare = () => {
  emits('share', props.post.id)
}

const formattedDate = computed(() => {
  // Format or use a date lib like dayjs
  return new Date().toLocaleString()
})
</script>
