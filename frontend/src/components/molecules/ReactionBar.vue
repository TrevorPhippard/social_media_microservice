<template>
  <div class="flex items-center space-x-6 text-gray-600">
    <button
      @click="toggleLike"
      :aria-pressed="liked.toString()"
      class="flex items-center space-x-1 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
      type="button"
    >
      <LikeIcon :class="liked ? 'fill-blue-600' : 'stroke-current'" class="w-5 h-5" />
      <span>{{ likeCount }}</span>
    </button>

    <button
      @click="$emit('comment')"
      class="flex items-center space-x-1 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
      type="button"
    >
      <CommentIcon class="w-5 h-5" />
      <span>{{ commentCount }}</span>
    </button>

    <button
      @click="$emit('share')"
      class="flex items-center space-x-1 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
      type="button"
    >
      <ShareIcon class="w-5 h-5" />
      <span>{{ shareCount }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useReactions } from '@/composables/useReactions'

import LikeIcon from '@/components/icons/LikeIcon.vue'
import CommentIcon from '@/components/icons/CommentIcon.vue'
import ShareIcon from '@/components/icons/ShareIcon.vue'

const props = defineProps<{
  postId: string
  initialLikes?: number
  initialComments?: number
  initialShares?: number
  initialLiked?: boolean
}>()

const emits = defineEmits<{
  (e: 'comment'): void
  (e: 'share'): void
}>()

const {
  liked,
  likeCount,
  toggleLike,
} = useReactions(props.postId, props.initialLiked ?? false, props.initialLikes ?? 0)
const commentCount = ref(props.initialComments ?? 0)
const shareCount = ref(props.initialShares ?? 0)
</script>
