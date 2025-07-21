import { defineStore } from 'pinia'
import { PostService } from '@/services/PostService'
import { ApiClient } from '@/services/ApiClient'
import type { Post, CreatePostPayload } from '@/types'

const apiClient = new ApiClient(import.meta.env.VITE_API_BASE_URL, () =>
  localStorage.getItem('token'),
)
const postService = new PostService(apiClient)

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchPosts() {
      this.loading = true
      try {
        this.posts = await postService.fetchPosts()
      } catch (err: any) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    async createPost(payload: CreatePostPayload) {
      const post = await postService.createPost(payload)
      this.posts.unshift(post)
    },
  },
})
