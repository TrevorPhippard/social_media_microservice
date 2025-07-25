import { ref } from 'vue'

export function useReactions(postId: string, initialLiked = false, initialLikes = 0) {
  const liked = ref(initialLiked)
  const likeCount = ref(initialLikes)

  function toggleLike() {
    if (liked.value) {
      liked.value = false
      likeCount.value--
    } else {
      liked.value = true
      likeCount.value++
    }
    // TODO: Send like/unlike request to API here
  }

  return {
    liked,
    likeCount,
    toggleLike,
  }
}
