// src/composables/useComments.ts
import { storeToRefs } from 'pinia'
import { useCommentsStore } from '@/stores/comments'

export function useComments() {
  const store = useCommentsStore()
  const { comments } = storeToRefs(store)

  return {
    comments,
    postComment: store.postComment,
  }
}
