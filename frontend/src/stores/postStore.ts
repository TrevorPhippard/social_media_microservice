import { defineStore } from 'pinia'
import { ref } from 'vue'
import { PostService } from '@/services/PostService' // Make sure this import is correct
import type { Post, CreatePostPayload } from '@/types' // Adjust import as needed
import { ApiClient } from '@/services/ApiClient'

// Initialize services outside the store for reuse
const apiClient = new ApiClient(import.meta.env.VITE_API_BASE_URL, () =>
  localStorage.getItem('token'),
)
const postService = new PostService(apiClient)

export const usePostStore = defineStore('posts', () => {
  // State
  const post = ref<Post>()
  const posts = ref<Post[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  async function fetchPosts() {
    loading.value = true
    error.value = null
    try {
      posts.value = await postService.fetchPosts()
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  async function getPost(postId: number) {
    loading.value = true
    error.value = null
    try {
      post.value = await postService.getPostById(postId)
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  async function createPost(payload: CreatePostPayload) {
    const post = await postService.createPost(payload)
    posts.value.unshift(post)
  }

  // Return state and actions
  return {
    posts,
    loading,
    error,
    getPost,
    fetchPosts,
    createPost,
  }
})
