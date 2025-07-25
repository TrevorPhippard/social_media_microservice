import { storeToRefs } from 'pinia'
import { usePostStore } from '@/stores/postStore'

export const usePosts = () => {
  const store = usePostStore()
  const { posts, loading, error } = storeToRefs(store)

  return {
    posts,
    loading,
    error,
    fetchPosts: store.fetchPosts,
    createPost: store.createPost,
  }
}
