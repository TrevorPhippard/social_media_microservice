import { defineStore } from 'pinia'
import { CommentService } from '@/services/CommentService'
import { ApiClient } from '@/services/ApiClient'
import type { Comment, CreateCommentPayload } from '@/types'

const apiClient = new ApiClient(import.meta.env.VITE_API_BASE_URL, () =>
  localStorage.getItem('token'),
)
const commentService = new CommentService(apiClient)

export const useCommentStore = defineStore('comments', {
  state: () => ({
    comments: [] as Comment[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchComments(postId: number) {
      this.loading = true
      try {
        this.comments = await commentService.fetchComments(postId)
      } catch (err: any) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    async createComment(postId: number, payload: CreateCommentPayload) {
      const comment = await commentService.createComment(postId, payload)
      this.comments.push(comment)
    },
  },
})
